import { Plugin } from '@/types/plugin';
import readmePlugin from './generate-readme';
import gitPlugin from './summarize-commits';
import testPlugin from './generate-tests';
import reviewPlugin from './review-repo';
import firstfrontSetup from './firstfront-setup';
import createPlugin from './create-plugin';
import securityAudit from './security-audit';
import performanceAudit from './performance-audit';
import apiDoc from './api-documentation';

export const allPlugins: Plugin[] = [
  readmePlugin,
  gitPlugin,
  testPlugin,
  reviewPlugin,
  firstfrontSetup,
  createPlugin,
  securityAudit,
  performanceAudit,
  apiDoc,
];

export const pluginMap: Record<string, Plugin> = {
  'generate-readme': readmePlugin,
  'summarize-commits': gitPlugin,
  'generate-tests': testPlugin,
  'review-repo': reviewPlugin,
  'firstfront-setup': firstfrontSetup,
  'create-plugin': createPlugin,
  'security-audit': securityAudit,
  'performance-audit': performanceAudit,
  'api-documentation': apiDoc,
};

export { readmePlugin, gitPlugin, testPlugin, reviewPlugin, firstfrontSetup, createPlugin, securityAudit, performanceAudit, apiDoc };
