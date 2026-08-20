# One-command deploy to Cloudflare Pages (Windows PowerShell).
# Usage:
#   .\deploy.ps1                                          (prompts for token)
#   $env:CLOUDFLARE_API_TOKEN="cfat_..."; .\deploy.ps1    (non-interactive)
$ErrorActionPreference = "Stop"

if (-not $env:CLOUDFLARE_API_TOKEN) {
    $secure = Read-Host "Paste your Cloudflare API token" -AsSecureString
    $env:CLOUDFLARE_API_TOKEN = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    )
}

npm install --silent
npm run build
npx --yes wrangler@latest pages deploy dist `
    --project-name=cinema-portfolio `
    --commit-dirty=true

Write-Host ""
Write-Host "Live at: https://cinema-portfolio.pages.dev"
