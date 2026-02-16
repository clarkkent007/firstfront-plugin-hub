# Copilot CLI Plugin Marketplace

A minimal but impressive web application that allows users to run predefined productivity plugins powered by **GitHub Copilot CLI**. This is a modern, extensible, production-ready application built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

- **Plugin Marketplace**: Browse and run 4+ predefined AI-powered plugins
- **GitHub Copilot CLI Integration**: Execute intelligent analysis and generation tasks
- **Clean Modern UI**: Beautiful, responsive design with terminal-style output display
- **Real-time Execution**: Watch plugin output stream in real-time with loading states
- **Type-Safe**: Full TypeScript support for plugins and API
- **Security**: Validated plugin execution with no command injection vulnerabilities
- **Extensible Architecture**: Add new plugins with minimal code

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- GitHub Copilot CLI installed (`copilot` command available in PATH)
- Git

### Installation

```bash
# Clone and navigate to project
cd copilot-plugin-marketplace

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the marketplace.

## 📦 Project Structure

```
copilot-plugin-marketplace/
├── app/
│   ├── api/
│   │   └── run-plugin/
│   │       └── route.ts          # API endpoint for plugin execution
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section
│   │   └── PluginCard.tsx        # Plugin card component
│   ├── plugins/
│   │   ├── index.ts              # Plugin registry
│   │   ├── generate-readme.ts    # README generation plugin
│   │   ├── summarize-commits.ts  # Git commit summary plugin
│   │   ├── generate-tests.ts     # Test generation plugin
│   │   └── review-repo.ts        # Repository review plugin
│   └── types/
│       └── plugin.ts             # Plugin interfaces
├── package.json
└── README.md
```

## 🔌 Plugin System

### Plugin Interface

Each plugin is a TypeScript module that exports a `Plugin` object:

```typescript
interface Plugin {
  id: string;                  // Unique identifier
  name: string;                // Display name
  description: string;         // What the plugin does
  copilotPrompt: string;       // Prompt sent to Copilot CLI
  icon?: string;               // Optional emoji icon
}
```

### Creating a New Plugin

1. **Create plugin file** in `src/plugins/`:

```typescript
// src/plugins/my-plugin.ts
import { Plugin } from '@/types/plugin';

const myPlugin: Plugin = {
  id: 'my-plugin',
  name: 'My Plugin',
  description: 'What this plugin does',
  copilotPrompt: 'Your prompt for Copilot CLI here',
  icon: '🎯',
};

export default myPlugin;
```

2. **Register plugin** in `src/plugins/index.ts`:

```typescript
import myPlugin from './my-plugin';

export const allPlugins: Plugin[] = [
  // ... other plugins
  myPlugin,
];

export const pluginMap: Record<string, Plugin> = {
  // ... other plugins
  'my-plugin': myPlugin,
};
```

3. **Done!** The plugin now appears in the marketplace.

## 📋 Included Plugins

### 1. Generate README
- **ID**: `generate-readme`
- **Purpose**: Generate comprehensive README.md documentation
- **Input**: Current project structure
- **Output**: Formatted README with setup, usage, and contributing guides

### 2. Summarize Git Commits
- **ID**: `summarize-commits`
- **Purpose**: Analyze recent git history and generate changelog
- **Input**: Recent commit messages
- **Output**: Detailed summary of changes and improvements

### 3. Generate Test Cases
- **ID**: `generate-tests`
- **Purpose**: Generate unit and integration test cases
- **Input**: Project code structure
- **Output**: Comprehensive test suite recommendations

### 4. Repository Review
- **ID**: `review-repo`
- **Purpose**: Comprehensive code review and improvement suggestions
- **Input**: Entire repository structure and code
- **Output**: Code quality assessment, architecture recommendations, security analysis

## 🔒 Security

- **No Command Injection**: Only predefined plugin IDs are allowed
- **Whitelist Validation**: Plugin execution is restricted to registered plugins
- **Timeout Protection**: 30-second timeout on Copilot CLI execution
- **Buffer Limits**: 10MB output buffer to prevent memory issues
- **Error Handling**: Comprehensive error messages without exposing system details

## 🎨 UI Components

### Hero Section
- Gradient background with branding
- Project description and key features
- Modern SaaS aesthetic

### Plugin Card
- Plugin name, description, and icon
- "Run Plugin" button with loading state
- Animated spinner during execution
- Collapsible output section with terminal-style display
- Error display for failed executions

### Terminal Output Block
- Dark theme (gray-900 background)
- Green monospace text
- Code syntax preservation
- Horizontal scrolling for long lines
- Proper whitespace handling

## 📡 API Endpoint

### POST `/api/run-plugin`

Execute a plugin and get results.

**Request**:
```json
{
  "pluginId": "generate-readme"
}
```

**Response**:
```json
{
  "success": true,
  "output": "Generated content..."
}
```

**Error Response**:
```json
{
  "success": false,
  "output": "",
  "error": "Error message"
}
```

## 🛠️ Development

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📚 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Runtime**: Node.js
- **Process Management**: child_process (Node.js built-in)
- **CLI Integration**: GitHub Copilot CLI

## 🚀 Production Ready

This application follows production best practices:

- ✅ Type-safe with full TypeScript coverage
- ✅ Clean, modular component architecture
- ✅ Proper error handling and validation
- ✅ Security hardening against injection attacks
- ✅ Responsive design for all devices
- ✅ Optimized performance with Next.js
- ✅ Professional UI/UX with smooth transitions
- ✅ Well-documented code and README

## 🔄 Workflow

1. **User visits marketplace** → Hero section and plugin grid displayed
2. **User selects plugin** → Reads description and clicks "Run Plugin"
3. **Plugin executes** → Loading spinner shows progress
4. **Copilot CLI runs** → Prompt sent to GitHub Copilot
5. **Results displayed** → Output shown in collapsible terminal block
6. **User reviews output** → Can run another plugin or review results

## 📝 Example Use Cases

### As a Developer
- Generate README for new projects
- Review code quality before submitting PR
- Create test cases for new features
- Summarize changes for release notes

### As a Team Lead
- Quickly understand project improvements
- Review code quality across projects
- Generate documentation templates
- Get architecture recommendations

### In Automation
- CI/CD pipeline integration
- Automated code review systems
- Documentation generation workflows
- Quality assurance processes

## 🎯 Architecture Decisions

1. **No Database**: Simplicity and fast deployment. Plugins are configured in code.
2. **Next.js App Router**: Modern routing with React Server Components support.
3. **TypeScript**: Type safety for plugin system and API contracts.
4. **TailwindCSS**: Rapid UI development with consistent styling.
5. **Child Process**: Direct Copilot CLI integration without wrappers.
6. **Client-Side State**: React hooks for UI state, no complex state management needed.

## 🤝 Contributing

To extend this marketplace:

1. Create new plugin in `src/plugins/`
2. Add to plugin registry in `src/plugins/index.ts`
3. Test plugin execution via the UI
4. Update README with plugin details

## 📄 License

MIT - Feel free to use this as a template for your own plugin marketplace.

## 🙌 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Powered by [GitHub Copilot CLI](https://github.com/github/cli)

---

**Built as a production-ready showcase of GitHub Copilot CLI integration capabilities.** This project demonstrates how to safely execute and display Copilot CLI output in a modern web application, making AI-powered productivity tools accessible to teams.
