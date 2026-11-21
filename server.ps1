# Lightweight local HTTP server for Dubem Luxury Boutique using .NET HttpListener
param([int]$Port = 8080)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host " DUBEM LUXURY BOUTIQUE - LOCAL TEST DOMAIN SERVER" -ForegroundColor Yellow
    Write-Host " Address: No. 19 Nwaturocha Street, Ikenegbu, Owerri" -ForegroundColor Gray
    Write-Host " Serving at: $prefix" -ForegroundColor Green
    Write-Host " Open in browser: $prefix" -ForegroundColor Yellow
    Write-Host " Press Ctrl+C to terminate server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Cyan

    $mimeMap = @{
        ".html" = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".png"  = "image/png"
        ".svg"  = "image/svg+xml"
        ".webp" = "image/webp"
        ".ico"  = "image/x-icon"
    }

    $root = $PSScriptRoot

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $relPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($relPath)) {
                $relPath = "index.html"
            }

            # Normalize path
            $relPath = [System.Uri]::UnescapeDataString($relPath).Replace('/', '\')
            $filePath = Join-Path $root $relPath

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
                $response.ContentType = $contentType
                $response.StatusCode = 200

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $relPath")
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }

            $response.OutputStream.Close()
        } catch {
            Write-Host "Request error: $_" -ForegroundColor Red
        }
    }
} catch {
    Write-Error $_
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
