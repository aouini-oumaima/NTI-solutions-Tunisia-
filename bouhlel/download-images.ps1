# Télécharge toutes les images de ntisolutions.com.tn dans .\images\
# Usage : clic droit > Exécuter avec PowerShell  (ou : powershell -File download-images.ps1)

New-Item -ItemType Directory -Force -Path "images" | Out-Null
Set-Location "images"

$urls = @(
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/logo-blanc.png",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/panoramic-firefighter-team-use-water-fog-type-fire-extinguisher-fight-with-flame-1-scaled.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/04/firemen-using-water-from-hose-fire-fighting-firefight-training-insurance-group.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-ip-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-numerique-cctv.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-immobiles-1-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-fixed-bullet-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-domes-fixes-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-ptz.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-thermiques-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-DVR.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-NVR.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-XVR.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/controle-dacces-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-tournique-barreaude.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-tourniquet-tripod.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/couloir.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-comtrole-de-ronde-1.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/VOITURES.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/PORTES.jpg",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/Le-systeme-de-securite-incendie.jpg.png",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/Conventionnel.jpg.png",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/Desenfumage-et-compartimentage-1.png",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/lutte.png",
  "http://ntisolutions.com.tn/wp-content/uploads/2021/07/2.png"
)

foreach ($url in $urls) {
  $name = Split-Path $url -Leaf
  Write-Host "↓ $name"
  try { Invoke-WebRequest -Uri $url -OutFile $name -UseBasicParsing }
  catch { Write-Host "  ✗ échec" -ForegroundColor Red }
}

Write-Host ""
Write-Host "✅ Terminé — $((Get-ChildItem).Count) fichiers" -ForegroundColor Green
