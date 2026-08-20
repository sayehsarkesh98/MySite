#!/usr/bin/env bash
# One-command deploy to Cloudflare Pages.
# Usage:
#   ./deploy.sh                                   (prompts for token)
#   CLOUDFLARE_API_TOKEN=cfat_... ./deploy.sh     (non-interactive)
set -euo pipefail

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  read -rsp "Paste your Cloudflare API token: " CLOUDFLARE_API_TOKEN
  echo
  export CLOUDFLARE_API_TOKEN
fi

npm install --silent
npm run build
npx --yes wrangler@latest pages deploy dist \
  --project-name=cinema-portfolio \
  --commit-dirty=true

echo ""
echo "Live at: https://cinema-portfolio.pages.dev"
