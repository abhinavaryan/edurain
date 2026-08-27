[Windows.Security.Credentials.PasswordVault, Windows.Security.Credentials, ContentType = WindowsRuntime] | Out-Null
$vault = New-Object Windows.Security.Credentials.PasswordVault
$creds = $vault.FindAllByResource('gemini:antigravity')
foreach ($cred in $creds) {
    $cred.RetrievePassword()
    $env:AGY_OAUTH_TOKEN = $cred.Password
    Write-Output "Token retrieved successfully."
}
