import { Plugin } from '@/types/plugin';

const apiDoc: Plugin = {
  id: 'api-documentation',
  name: 'API Documentation',
  description: 'Generate OpenAPI specs and comprehensive API documentation from code.',
  copilotPrompt: 'Analyze the API endpoints in this codebase and generate comprehensive OpenAPI 3.0 documentation. Include request/response schemas, authentication, and examples.',
  icon: '📚',
};

export default apiDoc;
