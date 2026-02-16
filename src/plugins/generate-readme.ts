import { Plugin } from '@/types/plugin';

const readmePlugin: Plugin = {
  id: 'generate-readme',
  name: 'Generate README',
  description: 'Generate a comprehensive README.md for the current project based on its structure and code.',
  copilotPrompt: 'Analyze the current project structure and generate a comprehensive README.md file. Include project description, setup instructions, usage guide, and contributing guidelines.',
  icon: '📄',
};

export default readmePlugin;
