@echo off
setlocal enabledelayedexpansion
title Dubem Luxury Boutique - GitHub Push Sync
color 0b

echo ========================================================
echo  DUBEM LUXURY BOUTIQUE - GITHUB PRODUCTION PUSH
echo ========================================================
echo Target Repository: git@github.com:Emmanuelace10/nobless.git
echo Author: Emmanuelace10 (abiakamace@gmail.com)
echo.
echo Attempting git push via SSH...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESS: Code pushed to GitHub successfully!
    echo ========================================================
    echo You can now deploy on Vercel at: https://vercel.com/new
    goto :end
)

echo.
echo ========================================================
echo  NOTE: If SSH publickey failed, you can also push via HTTPS token:
echo ========================================================
echo Paste a GitHub Personal Access Token (ghp_...) to push via HTTPS:
echo (Or press Enter to exit):
echo.
set /p "PAT=Paste GitHub Token: "

if defined PAT (
    echo.
    echo Pushing with Personal Access Token...
    git push https://!PAT!@github.com/Emmanuelace10/nobless.git main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo ========================================================
        echo  SUCCESS: Pushed to https://github.com/Emmanuelace10/nobless.git!
        echo ========================================================
    )
)

:end
echo.
pause
