import { Plugin } from '@/types/plugin';

const claudeCodePlugins: Plugin = {
  id: 'claude-code-plugins',
  name: 'Claude Code Plugins',
  description: 'Install official Anthropic Claude Code plugins: code-review, feature-dev, frontend-design, security-guidance, and more.',
  copilotPrompt: 'Install Claude Code plugins from anthropics/claude-code. Run: claude plugin marketplace add anthropics/claude-code && claude plugin install <plugin-name>. Show available plugins and help user install relevant ones.',
  icon: '🔧',
};

export default claudeCodePlugins;
