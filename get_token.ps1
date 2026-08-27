[Windows.Security.Credentials.PasswordVault, Windows.Security.Credentials, ContentType = WindowsRuntime] | Out-Null
$vault = New-Object Windows.Security.Credentials.PasswordVault
$creds = $vault.FindAllByResource('gemini:antigravity')
if ($creds.Count -eq 1) {
    $cred = $creds[0]
    $cred.RetrievePassword()
    $env:AGY_OAUTH_TOKEN = $cred.Password
    Write-Output "Token retrieved successfully."
} else {
    Write-Error "Ambiguous or missing credentials for gemini:antigravity. Expected exactly 1, found $($creds.Count)."
}
