@echo off
chcp 65001 > nul
title Mệnh Quán - Khởi động Máy chủ Bát Tự Chiêm Nghiệm
echo.
echo ======================================================
echo    MỆNH QUÁN - ĐÔNG PHƯƠNG BÁT TỰ CHIÊM NGHIỆM
echo ======================================================
echo.
echo Đang khởi chạy máy chủ tại http://127.0.0.1:5173/ ...
start "" "http://127.0.0.1:5173/"
"C:\AI Engineering\runtime\node.exe" --import ./register.mjs ./server.mjs
pause
