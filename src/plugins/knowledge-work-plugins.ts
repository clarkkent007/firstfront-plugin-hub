import { Plugin } from '@/types/plugin';

const knowledgeWorkPlugins: Plugin = {
  id: 'knowledge-work-plugins',
  name: 'Knowledge Work Plugins',
  description: 'Claude Cowork plugins for roles: productivity, sales, customer-support, product-management, marketing, legal, finance, data, enterprise-search.',
  copilotPrompt: 'Install Claude Cowork knowledge work plugins from anthropics/knowledge-work-plugins. Run: claude plugin marketplace add anthropics/knowledge-work-plugins && claude plugin install <plugin-name>@knowledge-work-plugins. Install role-specific plugins based on user needs.',
  icon: '💼',
};

export default knowledgeWorkPlugins;
