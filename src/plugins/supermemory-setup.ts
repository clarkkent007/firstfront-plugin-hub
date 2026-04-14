import { Plugin } from '@/types/plugin';

const supermemoryPlugin: Plugin = {
  id: 'supermemory-setup',
  name: 'Supermemory AI',
  description: 'Set up Supermemory for long-term AI memory. Auto-recall and auto-capture conversations. 96%+ recall on benchmarks.',
  copilotPrompt: 'Install Supermemory plugin for OpenClaw: openclaw plugins install @supermemory/openclaw-supermemory. Then run: openclaw supermemory setup and guide user to get API key from app.supermemory.ai.',
  icon: '🧠',
};

export default supermemoryPlugin;
