@echo off
setlocal enabledelayedexpansion
title Dubem Luxury Boutique - GitHub Push Sync
color 0b

echo ========================================================
echo  DUBEM LUXURY BOUTIQUE - GITHUB PRODUCTION PUSH
echo ========================================================
echo Target Repository: https://github.com/Emmanuelace10/dd-boutiques.git
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
echo  NOTE: GitHub requires authentication to write to your repo.
echo ========================================================
echo If you have a GitHub Personal Access Token (starts with ghp_),
echo paste it below and press Enter to push automatically.
echo (Or press Enter with no token to exit):
echo.
set /p "PAT=Paste GitHub Token (ghp_...): "

if defined PAT (
    echo.
    echo Pushing with provided Personal Access Token...
    git push https://!PAT!@github.com/Emmanuelace10/dd-boutiques.git main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo ========================================================
        echo  SUCCESS: Pushed to https://github.com/Emmanuelace10/dd-boutiques.git!
        echo ========================================================
    ) else (
        echo.
        echo Push failed. Please verify that your token has 'repo' scope.
    )
)

:end
echo.
pause
