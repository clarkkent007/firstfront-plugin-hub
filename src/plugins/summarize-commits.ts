import { Plugin } from '@/types/plugin';

const gitPlugin: Plugin = {
  id: 'summarize-commits',
  name: 'Summarize Git Commits',
  description: 'Analyze recent git commits and generate a summary of changes and improvements.',
  copilotPrompt: 'Summarize the recent git commits. Include key changes, features added, and any breaking changes. Format as a detailed changelog.',
  icon: '🔗',
};

export default gitPlugin;
