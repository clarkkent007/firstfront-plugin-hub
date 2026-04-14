import { Plugin } from '@/types/plugin';

const clawflowsAutomations: Plugin = {
  id: 'clawflows-automations',
  name: 'ClawFlows Automations',
  description: 'Install 100+ OpenClaw automations from ClawFlows registry. Powered by Lobster workflow engine with zero LLM tokens.',
  copilotPrompt: 'Install ClawFlows automations: npm install -g clawflows && clawflows install <automation-name>. Available automations include prediction-markets, social-search, chart-generation, calendar, and more. Help user find relevant automations.',
  icon: '⚡',
};

export default clawflowsAutomations;
