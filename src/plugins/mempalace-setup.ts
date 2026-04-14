import { Plugin } from '@/types/plugin';

const mempalacePlugin: Plugin = {
  id: 'mempalace-setup',
  name: 'MemPalace Memory',
  description: 'Set up MemPalace - the highest-scoring AI memory system. Enables persistent memory across agent sessions.',
  copilotPrompt: 'Install and configure MemPalace for AI agent memory. Run: pip install mempalace && mempalace init. Set up MCP server for the agent to use mempalace_search, mempalace_add_drawer, and knowledge graph tools.',
  icon: '🧠',
};

export default mempalacePlugin;
