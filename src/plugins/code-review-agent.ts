import { Plugin } from '@/types/plugin';

const codeReviewPlugin: Plugin = {
  id: 'code-review-agent',
  name: 'Code Review Agent',
  description: 'Automated PR code review using multiple specialized agents with confidence-based scoring to filter false positives.',
  copilotPrompt: 'Perform comprehensive code review on PRs. Check for: CLAUDE.md compliance, bug detection, historical context analysis, PR history review, and code comment quality. Use confidence scoring to prioritize findings.',
  icon: '🔍',
};

export default codeReviewPlugin;
