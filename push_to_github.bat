@echo off
setlocal enabledelayedexpansion
title Dubem Luxury Boutique - GitHub Push Sync
color 0b

echo ========================================================
echo  DUBEM LUXURY BOUTIQUE - GITHUB PRODUCTION PUSH
echo ========================================================
echo Target Repository: https://github.com/Emmanuelace10/my-project.git
echo Author: Emmanuelace10 (abiakamace@gmail.com)
echo.
echo Attempting git push...
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
echo  NOTE: If asked for credentials, you can also push via token:
echo ========================================================
echo Paste your GitHub Personal Access Token (ghp_...) to push directly:
echo (Or press Enter to exit):
echo.
set /p "PAT=Paste GitHub Token: "

if defined PAT (
    echo.
    echo Pushing with Personal Access Token...
    git push https://!PAT!@github.com/Emmanuelace10/my-project.git main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo ========================================================
        echo  SUCCESS: Pushed to https://github.com/Emmanuelace10/my-project.git!
        echo ========================================================
    )
)

:end
echo.
pause
