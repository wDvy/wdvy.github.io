#!/bin/bash

set -euo pipefail

REMOTE_USER_HOST="${1:-magicalmidwinter@ams1-shared-01.dreamhost.com}"
REMOTE_PATH="${2:-/home/magicalmidwinter/magicalmidwinter.com}"
OUT_DIR="${3:-out}"

if [[ ! -d "$OUT_DIR" ]]; then
  echo "Output directory '$OUT_DIR' not found. Run 'npm run build' first." >&2
  exit 1
fi

OUT_FULL_PATH="$(cd "$OUT_DIR" && pwd)"
echo "Deploying from $OUT_FULL_PATH to ${REMOTE_USER_HOST}:${REMOTE_PATH}"

# Purge the remote directory first to avoid stale files being left behind.
ssh "$REMOTE_USER_HOST" "set -e; cd '$REMOTE_PATH'; find . -mindepth 1 -maxdepth 1 ! -name '.well-known' -exec rm -rf {} +"

rsync -a "$OUT_FULL_PATH/" "${REMOTE_USER_HOST}:${REMOTE_PATH}/"

echo "Deploy complete."