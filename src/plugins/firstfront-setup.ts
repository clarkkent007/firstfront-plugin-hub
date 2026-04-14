import { Plugin } from '@/types/plugin';

const firstfrontSetup: Plugin = {
  id: 'firstfront-setup',
  name: 'Setup FirstFront Agent',
  description: 'Initialize and configure FirstFront Agent Gateway in your project with optimal settings.',
  copilotPrompt: 'Set up FirstFront Agent Gateway in the current project. Configure agent settings, create .firstfront/ config directory, and generate initial setup guide.',
  icon: '🚀',
};

export default firstfrontSetup;
