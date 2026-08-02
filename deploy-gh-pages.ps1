$ErrorActionPreference = 'Stop'
$repo = 'CzhcpqfG/reidxiao.top'
$branch = 'gh-pages'
$distPath = 'd:\Vibetask\reidxiao.top\dist'

$files = Get-ChildItem -Path $distPath -Recurse -File
Write-Host "Found $($files.Count) files to upload."

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($distPath.Length + 1).Replace('\', '/')
    Write-Host "Uploading: $relativePath"

    $bytes = [IO.File]::ReadAllBytes($file.FullName)
    $content = [Convert]::ToBase64String($bytes)

    # Check if file exists -> get sha for update
    $sha = $null
    try {
        $existing = gh api "repos/$repo/contents/$relativePath`?ref=$branch" --jq '.sha' 2>$null
        if ($LASTEXITCODE -eq 0 -and $existing) {
            $sha = $existing.Trim('"')
            Write-Host "  File exists, sha=$sha"
        }
    } catch {
        # File does not exist yet
    }

    $body = [ordered]@{
        message = "deploy: update $relativePath"
        content = $content
        branch  = $branch
    }
    if ($sha) { $body['sha'] = $sha }

    $bodyJson = $body | ConvertTo-Json -Compress
    $tempFile = [IO.Path]::GetTempFileName()
    [IO.File]::WriteAllText($tempFile, $bodyJson, [Text.UTF8Encoding]::new($false))

    gh api -X PUT "repos/$repo/contents/$relativePath" --input $tempFile | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  FAILED uploading $relativePath"
    } else {
        Write-Host "  OK"
    }
    Remove-Item $tempFile
}

Write-Host "Done. All files uploaded to $branch branch."
