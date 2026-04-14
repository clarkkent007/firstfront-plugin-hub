import { Plugin } from '@/types/plugin';

const securityAudit: Plugin = {
  id: 'security-audit',
  name: 'Security Audit',
  description: 'Comprehensive security scan covering OWASP Top 10, secrets detection, and vulnerability analysis.',
  copilotPrompt: 'Perform a comprehensive security audit of this codebase. Check for hardcoded secrets, SQL injection, XSS vulnerabilities, auth issues, and provide remediation steps.',
  icon: '🔒',
};

export default securityAudit;
