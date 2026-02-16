import { Plugin } from '@/types/plugin';

const testPlugin: Plugin = {
  id: 'generate-tests',
  name: 'Generate Test Cases',
  description: 'Generate comprehensive unit and integration test cases for the project.',
  copilotPrompt: 'Generate comprehensive test cases for the main functions and modules in this project. Include unit tests, integration tests, and edge cases. Follow testing best practices and use appropriate testing frameworks.',
  icon: '🧪',
};

export default testPlugin;
