import { Plugin } from '@/types/plugin';

const reviewPlugin: Plugin = {
  id: 'review-repo',
  name: 'Repository Review',
  description: 'Conduct a comprehensive code review and provide improvement suggestions.',
  copilotPrompt: 'Review this repository and provide a detailed analysis. Include: code quality assessment, architecture recommendations, performance optimization opportunities, security considerations, and best practices for improvement.',
  icon: '🔍',
};

export default reviewPlugin;
