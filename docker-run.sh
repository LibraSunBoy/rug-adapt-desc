#!/bin/bash
set -e

REGISTRY="registry.cn-shanghai.aliyuncs.com"
NAMESPACE="marmots"
IMAGE_NAME="doc-tenant-rugadapt"
FULL_IMAGE="${REGISTRY}/${NAMESPACE}/${IMAGE_NAME}"

if [ -z "$1" ]; then
    echo "用法: $0 <版本号> [doc-1宿主机端口] [doc-2宿主机端口]"
    echo "示例: $0 1.0.0 80 81"
    exit 1
fi

TAG=$1
PORT1=${2:-9084}
PORT2=${3:-9085}

echo "===== docker-pull && docker-compose up ====="
echo "版本号: ${TAG}"
echo "doc-1 端口: ${PORT1}"
echo "doc-2 端口: ${PORT2}"
echo "镜像: ${FULL_IMAGE}:${TAG}"
echo ""

echo "[1/3] 登录阿里云 ACR ..."
docker login --username=13027619526 --password=QQ516580 ${REGISTRY}

echo "[2/3] 拉取镜像 ..."
docker pull ${FULL_IMAGE}:${TAG}

echo "[3/3] 通过 docker-compose.yml 运行容器 ..."

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
COMPOSE_FILE="${SCRIPT_DIR}/docker-compose.yml"

cat > "${COMPOSE_FILE}" <<EOF
services:
  doc-1:
    image: ${FULL_IMAGE}:${TAG}
    container_name: doc-tenant-rugadapt-1
    ports:
      - "${PORT1}:80"
    restart: unless-stopped

  doc-2:
    image: ${FULL_IMAGE}:${TAG}
    container_name: doc-tenant-rugadapt-2
    ports:
      - "${PORT2}:80"
    restart: unless-stopped
EOF

docker compose -f "${COMPOSE_FILE}" up -d

echo ""
echo "===== 完成 ====="
echo "容器: doc-tenant-rugadapt-1 (${PORT1}:80)"
echo "容器: doc-tenant-rugadapt-2 (${PORT2}:80)"
echo "访问: http://localhost:${PORT1} 和 http://localhost:${PORT2}"
echo "Compose 文件: ${COMPOSE_FILE}"
echo "查看日志: docker compose -f ${COMPOSE_FILE} logs -f"