#!/bin/bash
set -e

if [ -z "$1" ]; then
    echo "用法: $0 <版本号> [doc-1宿主机端口] [doc-2宿主机端口]"
    echo "示例: $0 1.0.0 80 81"
    exit 1
fi

TAG=$1
PORT1=${2:-9085}
PORT2=${3:-9084}

echo "===== 重启 Docker 容器 ====="
echo "版本号: ${TAG}"
echo "doc-1 端口: ${PORT1}"
echo "doc-2 端口: ${PORT2}"
echo ""

echo "[1/2] 停止并删除现有容器 ..."
docker stop doc-tenant-rugadapt-1 doc-tenant-rugadapt-2 2>/dev/null || true
docker rm doc-tenant-rugadapt-1 doc-tenant-rugadapt-2 2>/dev/null || true
echo "现有容器已清理"
echo ""

echo "[2/2] 调用 docker-run.sh 启动新容器 ..."
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
bash "${SCRIPT_DIR}/docker-run.sh" "$@"

echo ""
echo "===== 重启完成 ====="