# GitHub Account Security Checklist

Use this checklist to verify your GitHub account security regularly.

## Immediate Actions (Do Now)

- [ ] **Enable Two-Factor Authentication (2FA)**
  - Navigate to: Settings → Password and authentication → Two-factor authentication
  - Use: Authenticator app (Google Authenticator, Authy) or Security key (YubiKey)
  
- [ ] **Review Active Sessions**
  - Check: Settings → Password and authentication → Sessions
  - Action: Sign out of any unrecognized sessions
  
- [ ] **Audit Personal Access Tokens**
  - Location: Settings → Developer settings → Personal access tokens
  - Action: Delete tokens you don't recognize or no longer use
  - Tip: Use fine-grained tokens with minimal permissions

## Account Security Review (Monthly)

- [ ] **Check SSH Keys**
  - Location: Settings → SSH and GPG keys
  - Action: Remove any keys you don't recognize
  
- [ ] **Review Authorized Applications**
  - Location: Settings → Applications → Authorized OAuth Apps
  - Action: Revoke access for apps you don't use
  
- [ ] **Verify Email Addresses**
  - Location: Settings → Emails
  - Action: Remove any unrecognized email addresses
  - Ensure: Primary email is correct and verified

- [ ] **Check Security Log**
  - Location: Settings → Security log
  - Action: Review recent security events for suspicious activity

## Repository Security (Per Project)

- [ ] **Enable Security Features**
  - Repository Settings → Security → Enable:
    - Dependabot alerts
    - Dependabot security updates
    - Code scanning alerts (if applicable)
    - Secret scanning alerts

- [ ] **Configure Branch Protection**
  - Settings → Branches → Add rule for `main`:
    - Require pull request reviews
    - Require status checks to pass
    - Require conversation resolution before merging

- [ ] **Review Collaborators**
  - Settings → Collaborators and teams
  - Action: Remove anyone who no longer needs access

- [ ] **Check Deploy Keys**
  - Settings → Deploy keys
  - Action: Remove unused deploy keys

- [ ] **Verify Webhooks**
  - Settings → Webhooks
  - Action: Delete any webhooks you don't recognize

- [ ] **Review GitHub Actions Secrets**
  - Settings → Secrets and variables → Actions
  - Action: Remove unused secrets
  - Verify: All secrets are still needed

## Password Security Best Practices

✅ **Do:**
- Use a unique, strong password (12+ characters)
- Use a password manager (1Password, LastPass, Bitwarden)
- Change password if you suspect compromise
- Use a passphrase (e.g., "BlueMountain!Coffee29")

❌ **Don't:**
- Reuse passwords across sites
- Use simple passwords (password123, qwerty)
- Share your password with anyone
- Write passwords in plain text files

## Signs of Potential Compromise

🚨 **Watch for these warning signs:**

- Unrecognized login notifications from GitHub
- Repositories you didn't create
- Code changes you didn't make
- Issues or pull requests you didn't open
- New collaborators you didn't add
- Unexpected emails about repository changes
- OAuth apps you didn't authorize
- Unusual GitHub Actions workflow runs

## If You Suspect Compromise

**Act immediately:**

1. **Change your password** (Settings → Password and authentication)
2. **Revoke all access tokens** (Developer settings → Personal access tokens)
3. **Sign out all sessions** (Settings → Sessions → Sign out of all sessions)
4. **Enable 2FA** if not already enabled
5. **Review audit log** (Settings → Security → Audit log)
6. **Contact GitHub Support** if unauthorized changes were made

## GitHub Security Resources

- [GitHub Security Advisories](https://github.com/advisories)
- [Security Best Practices](https://docs.github.com/en/code-security/getting-started/securing-your-account-and-data)
- [Two-Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa)
- [Protecting Your Repository](https://docs.github.com/en/code-security/getting-started/securing-your-repository)
- [GitHub Support](https://support.github.com/)

## Quick Links

- GitHub Settings: https://github.com/settings
- Security Settings: https://github.com/settings/security
- Sessions: https://github.com/settings/sessions
- Applications: https://github.com/settings/applications
- Developer Settings: https://github.com/settings/apps

---

**Last Updated**: December 6, 2025  
**Next Review**: Monthly or when suspicious activity is detected
