@echo off
chcp 65001 > nul
title Mệnh Quán - Khởi động Máy chủ Bát Tự Chiêm Nghiệm (5 Đại Đồ Bản)
echo.
echo ======================================================
echo    MỆNH QUÁN - ĐÔNG PHƯƠNG BÁT TỰ CHIÊM NGHIỆM
echo ======================================================
echo.
if not exist "menh-quan-ritual-release\dist\server\index.js" (
  echo Đang giải nén gói phát hành menh-quan-ritual-release...
  tar -xzf "menh-quan-ritual-release\ritual-release.tar.gz" -C "menh-quan-ritual-release"
)
echo Đang khởi chạy máy chủ tại http://127.0.0.1:5173/ ...
start "" "http://127.0.0.1:5173/"

set "NODE_CMD="
where node >nul 2>nul
if %errorlevel% equ 0 (
  set "NODE_CMD=node"
) else if exist "C:\AI Engineering\runtime\node.exe" (
  set "NODE_CMD=C:\AI Engineering\runtime\node.exe"
) else if exist "C:\Users\phamp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
  set "NODE_CMD=C:\Users\phamp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
)

if defined NODE_CMD (
  "%NODE_CMD%" --import ./register.mjs ./server.mjs
) else (
  echo [Lỗi] Không tìm thấy Node.js trên hệ thống. Vui lòng cài đặt Node.js.
)
pause
