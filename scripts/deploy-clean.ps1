param(
  [string]$RemoteUserHost = "magicalmidwinter@ams1-shared-01.dreamhost.com",
  [string]$RemotePath = "/home/magicalmidwinter/magicalmidwinter.com",
  [string]$OutDir = "out"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $OutDir)) {
  throw "Output directory '$OutDir' not found. Run 'npm run build' first."
}

$outFullPath = (Resolve-Path -LiteralPath $OutDir).Path
Write-Host "Deploying from $outFullPath to ${RemoteUserHost}:${RemotePath}" -ForegroundColor Cyan

# Purge remote directory first to avoid stale files being left behind.
$cleanupCommand = "set -e; cd '$RemotePath'; find . -mindepth 1 -maxdepth 1 ! -name '.well-known' -exec rm -rf {} +"
& ssh $RemoteUserHost $cleanupCommand
if ($LASTEXITCODE -ne 0) {
  throw "Remote cleanup failed."
}

& scp -r "$outFullPath/*" "${RemoteUserHost}:${RemotePath}/"
if ($LASTEXITCODE -ne 0) {
  throw "SCP upload failed."
}

$permissionsCommand = "set -e; cd '$RemotePath'; find . -type d -exec chmod 755 {} +; find . -type f -exec chmod 644 {} +"
& ssh $RemoteUserHost $permissionsCommand
if ($LASTEXITCODE -ne 0) {
  throw "Remote permission update failed."
}

Write-Host "Deploy complete." -ForegroundColor Green
