import { Plugin } from '@/types/plugin';
import readmePlugin from './generate-readme';
import gitPlugin from './summarize-commits';
import testPlugin from './generate-tests';
import reviewPlugin from './review-repo';

export const allPlugins: Plugin[] = [
  readmePlugin,
  gitPlugin,
  testPlugin,
  reviewPlugin,
];

export const pluginMap: Record<string, Plugin> = {
  'generate-readme': readmePlugin,
  'summarize-commits': gitPlugin,
  'generate-tests': testPlugin,
  'review-repo': reviewPlugin,
};

export { readmePlugin, gitPlugin, testPlugin, reviewPlugin };
