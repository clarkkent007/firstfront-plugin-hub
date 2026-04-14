import { Plugin } from '@/types/plugin';

const createPlugin: Plugin = {
  id: 'create-plugin',
  name: 'Create Plugin',
  description: 'Generate a new FirstFront plugin with proper structure, manifest, and documentation.',
  copilotPrompt: 'Create a new FirstFront plugin in the current directory. Generate plugin.json manifest, example implementation, README, and tests.',
  icon: '🔌',
};

export default createPlugin;
