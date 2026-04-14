import { Plugin } from '@/types/plugin';

const performanceAudit: Plugin = {
  id: 'performance-audit',
  name: 'Performance Analysis',
  description: 'Analyze codebase for performance bottlenecks, inefficient patterns, and optimization opportunities.',
  copilotPrompt: 'Analyze this codebase for performance issues. Identify slow queries, memory leaks, inefficient algorithms, bundle size concerns, and suggest optimizations.',
  icon: '⚡',
};

export default performanceAudit;
