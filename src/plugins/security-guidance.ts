import { Plugin } from '@/types/plugin';

const securityPlugin: Plugin = {
  id: 'security-guidance',
  name: 'Security Scanner',
  description: 'Security reminder hook that warns about potential security issues. Monitors OWASP Top 10, command injection, XSS, and more.',
  copilotPrompt: 'Scan code for security vulnerabilities. Check for: command injection, XSS, eval usage, dangerous HTML, pickle deserialization, os.system calls, SQL injection, auth bypass, and secret exposure. Generate security report with remediation steps.',
  icon: '🔒',
};

export default securityPlugin;
