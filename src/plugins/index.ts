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
import mempalacePlugin from './mempalace-setup';
import claudeCodePlugins from './claude-code-plugins';
import knowledgeWorkPlugins from './knowledge-work-plugins';
import clawhubPlugins from './clawhub-plugins';
import supermemoryPlugin from './supermemory-setup';
import clawflowsAutomations from './clawflows-automations';
import frontendDesignPlugin from './frontend-design';
import codeReviewPlugin from './code-review-agent';
import securityPlugin from './security-guidance';

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
  mempalacePlugin,
  claudeCodePlugins,
  knowledgeWorkPlugins,
  clawhubPlugins,
  supermemoryPlugin,
  clawflowsAutomations,
  frontendDesignPlugin,
  codeReviewPlugin,
  securityPlugin,
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
  'mempalace-setup': mempalacePlugin,
  'claude-code-plugins': claudeCodePlugins,
  'knowledge-work-plugins': knowledgeWorkPlugins,
  'clawhub-plugins': clawhubPlugins,
  'supermemory-setup': supermemoryPlugin,
  'clawflows-automations': clawflowsAutomations,
  'frontend-design': frontendDesignPlugin,
  'code-review-agent': codeReviewPlugin,
  'security-guidance': securityPlugin,
};

export { readmePlugin, gitPlugin, testPlugin, reviewPlugin, firstfrontSetup, createPlugin, securityAudit, performanceAudit, apiDoc, mempalacePlugin, claudeCodePlugins, knowledgeWorkPlugins, clawhubPlugins, supermemoryPlugin, clawflowsAutomations, frontendDesignPlugin, codeReviewPlugin, securityPlugin };
