[Windows.Security.Credentials.PasswordVault, Windows.Security.Credentials, ContentType = WindowsRuntime] | Out-Null
$vault = New-Object Windows.Security.Credentials.PasswordVault
$creds = $vault.FindAllByResource('gemini:antigravity')
foreach ($cred in $creds) {
    $cred.RetrievePassword()
    Write-Output "TOKEN=$($cred.Password)"
}
