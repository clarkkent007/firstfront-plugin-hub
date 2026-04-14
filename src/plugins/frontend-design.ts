import { Plugin } from '@/types/plugin';

const frontendDesignPlugin: Plugin = {
  id: 'frontend-design',
  name: 'Frontend Design System',
  description: 'Create distinctive, production-grade frontend interfaces. Avoids generic AI aesthetics with bold design choices, typography, and animations.',
  copilotPrompt: 'Apply frontend design best practices when building UI. Focus on: bold design choices over generic templates, typography systems, micro-interactions, enter/exit animations, shadow hierarchy, border radius consistency, and color contrast. Import design system patterns.',
  icon: '🎨',
};

export default frontendDesignPlugin;
