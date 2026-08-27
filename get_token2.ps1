Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;

public class CredentialManager {
    [DllImport("advapi32.dll", EntryPoint = "CredReadW", CharSet = CharSet.Unicode, SetLastError = true)]
    public static extern bool CredRead(string target, uint type, int reservedFlag, out IntPtr credentialPtr);

    [DllImport("advapi32.dll", EntryPoint = "CredFree", SetLastError = true)]
    public static extern void CredFree(IntPtr credentialPtr);

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CREDENTIAL {
        public uint Flags;
        public uint Type;
        public string TargetName;
        public string Comment;
        public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
        public uint CredentialBlobSize;
        public IntPtr CredentialBlob;
        public uint Persist;
        public uint AttributeCount;
        public IntPtr Attributes;
        public string TargetAlias;
        public string UserName;
    }

    public static string GetCredential(string targetName) {
        IntPtr credPtr;
        bool success = CredRead(targetName, 1, 0, out credPtr); // 1 = CRED_TYPE_GENERIC
        if (!success) return null;

        CREDENTIAL cred = (CREDENTIAL)Marshal.PtrToStructure(credPtr, typeof(CREDENTIAL));
        byte[] blob = new byte[cred.CredentialBlobSize];
        Marshal.Copy(cred.CredentialBlob, blob, 0, (int)cred.CredentialBlobSize);
        CredFree(credPtr);

        // Try UTF-8 since Unicode gave ?????
        return System.Text.Encoding.UTF8.GetString(blob);
    }
}
"@

$token = [CredentialManager]::GetCredential('gemini:antigravity')
if ($token) {
    Write-Output "Extracted Token: $token"
    # Overwrite the settings.json automatically!
    $settingsPath = "C:\Users\abhin\.gemini\antigravity\scratch\edurain\.vscode\settings.json"
    $json = Get-Content $settingsPath -Raw | ConvertFrom-Json
    $json."ralphLoop.antigravity.oauthToken" = $token
    $json | ConvertTo-Json | Set-Content $settingsPath
    Write-Output "Injected into settings.json!"
} else {
    Write-Output "Token not found!"
}
