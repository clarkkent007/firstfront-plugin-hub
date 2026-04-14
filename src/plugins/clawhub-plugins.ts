import { Plugin } from '@/types/plugin';

const clawhubPlugins: Plugin = {
  id: 'clawhub-plugins',
  name: 'ClawHub Skills',
  description: 'Browse and install skills from ClawHub - the public skill registry for OpenClaw agents. 1000+ skills available.',
  copilotPrompt: 'Browse ClawHub skill registry at clawhub.ai. Run: clawhub search <query> to find skills, clawhub install <slug> to install. Help user discover and install relevant skills for their workflow.',
  icon: '🦞',
};

export default clawhubPlugins;
