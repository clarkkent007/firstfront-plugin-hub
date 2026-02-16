# Quick Start Guide

Get the Copilot CLI Plugin Marketplace running in **2 minutes**.

## Prerequisites Checklist

- ✅ Node.js 18+ installed
- ✅ GitHub Copilot CLI installed (`copilot` command available)
- ✅ Git installed

## 2-Minute Setup

```bash
# 1. Navigate to project directory
cd copilot-plugin-marketplace

# 2. Install dependencies (takes ~30 seconds)
npm install

# 3. Start development server
npm run dev
```

That's it! The application is now running at **http://localhost:3000**

## What You Should See

### Hero Section
- Gradient background with "Copilot CLI Plugin Marketplace" title
- Key features listed (Fast execution, Safe & validated, AI-powered)
- Professional SaaS design

### Plugin Grid
A 2-column grid with 4 plugin cards:

1. **📄 Generate README**
   - Creates comprehensive README.md for projects
   - Great for documenting your work

2. **🔗 Summarize Git Commits**
   - Analyzes git history
   - Generates changelog of recent changes

3. **🧪 Generate Test Cases**
   - Creates unit and integration tests
   - Follows testing best practices

4. **🔍 Repository Review**
   - Comprehensive code review
   - Suggests improvements and optimizations

## Running a Plugin

1. **Click "Run Plugin"** on any card
2. **Loading spinner** appears while Copilot CLI processes
3. **Output displays** in terminal-style block
4. **Click "Show Output"** to expand/collapse results

## Example: Generating README

```
User clicks "Generate README"
     ↓
Button shows loading state
     ↓
Copilot CLI prompt sent to copilot command
     ↓
"Analyzing project structure..."
     ↓
Output displayed in terminal block
     ↓
User can review and copy output
```

## Troubleshooting (30 seconds)

| Problem | Solution |
|---------|----------|
| `copilot command not found` | Run: `npm install -g @github-copilot/cli` |
| Port 3000 already in use | Run: `npm run dev -- -p 3001` |
| Build fails | Run: `npm install` again or check Node version |
| Plugins don't run | Verify: `copilot --version` in terminal |

## Next: Creating Your Plugin

Want to add your own plugin? Takes **2 minutes**:

### Step 1: Create Plugin File

Create `src/plugins/my-plugin.ts`:

```typescript
import { Plugin } from '@/types/plugin';

const myPlugin: Plugin = {
  id: 'my-plugin',
  name: 'My Custom Plugin',
  description: 'What my plugin does',
  copilotPrompt: 'Your prompt here',
  icon: '🚀',
};

export default myPlugin;
```

### Step 2: Register Plugin

Update `src/plugins/index.ts`:

```typescript
import myPlugin from './my-plugin';

export const allPlugins: Plugin[] = [
  // ... existing plugins
  myPlugin,  // Add this line
];

export const pluginMap: Record<string, Plugin> = {
  // ... existing plugins
  'my-plugin': myPlugin,  // Add this line
};
```

### Step 3: See It Live

Refresh your browser. Your plugin appears in the marketplace!

## Useful Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Building
npm run build            # Create production build
npm run start            # Run production build

# Type Checking
npx tsc --noEmit        # Check for TypeScript errors

# Clean Up
rm -rf .next             # Remove build cache
npm install              # Reinstall dependencies
```

## Architecture at a Glance

```
┌─────────────────────────────────────────┐
│         Next.js Web Server              │
│  (http://localhost:3000)                │
└──────────────┬──────────────────────────┘
               │
        ┌──────┴──────┐
        │              │
    ┌───▼────┐    ┌───▼──────┐
    │Frontend │    │API Route │
    │(React)  │    │(POST)    │
    └────┬────┘    └───┬──────┘
         │             │
    ┌────▼─┐       ┌───▼──────────────┐
    │Pages │       │child_process.exec│
    │Cards │       └───┬──────────────┘
    │Hero  │           │
    └──────┘       ┌───▼───────────────┐
                   │GitHub Copilot CLI │
                   └───────────────────┘
```

## Key Concepts

### Plugins
Reusable modules that define:
- `id`: Unique identifier
- `name`: Display name
- `description`: What it does
- `copilotPrompt`: Prompt sent to Copilot
- `icon`: Optional emoji

### Safe Execution
- Only predefined plugins can run
- 30-second timeout
- No command injection possible
- Comprehensive error handling

### UI Components
- **Hero**: Eye-catching header section
- **PluginCard**: Individual plugin display
- **Terminal Output**: Dark theme styled output

## Success Checklist

✅ Project installed
✅ Dev server running
✅ Website visible at localhost:3000
✅ Plugins display correctly
✅ Understand plugin system
✅ Ready to create custom plugins

## Need More Help?

- **Setup Details**: Read `SETUP.md`
- **Architecture**: Read `PROJECT_README.md`
- **TypeScript Types**: Check `src/types/plugin.ts`
- **Example Plugins**: See `src/plugins/`

## 🎉 You're Ready!

Start with `npm run dev` and explore the marketplace.

Create your first custom plugin. Build something amazing with GitHub Copilot CLI!

---

**Questions?** Check the detailed documentation files or review the source code - it's all well-commented and straightforward.
