@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

if "%1"=="" (
    echo ERROR: no version tag specified
    echo Usage: docker-build.bat ^<version^>
    exit /b 1
)

set TAG=%1
set PROJECT_DIR=%~dp0

echo ===== docs build start =====
echo Version: %TAG%
echo.

echo [1/4] npm install ...
cd /d "%PROJECT_DIR%"
call npm install
if %ERRORLEVEL% neq 0 (
    echo npm install failed
    exit /b 1
)

echo [2/4] npm run build ...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo npm run build failed
    exit /b 1
)

echo [3/4] Login ACR ...
docker login --username=13027619526 --password=QQ516580 registry.cn-shanghai.aliyuncs.com
if %ERRORLEVEL% neq 0 (
    echo Login failed
    exit /b 1
)

echo [4/4] Build and push image ...
docker build -t doc-tenant-rugadapt:%TAG% -f Dockerfile .
if %ERRORLEVEL% neq 0 (
    echo Build image failed
    exit /b 1
)
docker tag doc-tenant-rugadapt:%TAG% registry.cn-shanghai.aliyuncs.com/marmots/doc-tenant-rugadapt:%TAG%
docker push registry.cn-shanghai.aliyuncs.com/marmots/doc-tenant-rugadapt:%TAG%
if %ERRORLEVEL% neq 0 (
    echo Push failed
    exit /b 1
)

echo.
echo ===== Done: doc-tenant-rugadapt:%TAG% =====