# Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm or yarn** - Comes with Node.js
- **GitHub Copilot CLI** - Install with:
  ```bash
  npm install -g @github-copilot/cli
  ```
- **Git** - [Download here](https://git-scm.com/)

## Installation Steps

### 1. Navigate to Project

```bash
cd copilot-plugin-marketplace
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 16+ (modern React framework)
- React 19 with latest features
- TailwindCSS 4 (utility-first CSS)
- TypeScript (type safety)

### 3. Verify GitHub Copilot CLI

Ensure `copilot` command is available:

```bash
which copilot    # macOS/Linux
where copilot    # Windows
```

Should output the path to your Copilot CLI installation.

## Running the Application

### Development Mode

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

The development server:
- Hot-reloads on file changes
- Provides detailed error messages
- Runs TypeScript type checking
- Available on http://localhost:3000

### Production Build

```bash
npm run build
npm run start
```

Creates an optimized production build and runs it.

## Project Structure

```
copilot-plugin-marketplace/
├── app/                              # Next.js App Router directory
│   ├── api/
│   │   └── run-plugin/
│   │       └── route.ts             # API endpoint for executing plugins
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout component
│   └── page.tsx                     # Home page
├── src/
│   ├── components/
│   │   ├── Hero.tsx                 # Hero section component
│   │   └── PluginCard.tsx           # Plugin card component
│   ├── plugins/
│   │   ├── index.ts                 # Plugin registry & exports
│   │   ├── generate-readme.ts       # README generation plugin
│   │   ├── summarize-commits.ts     # Git commit summary plugin
│   │   ├── generate-tests.ts        # Test generation plugin
│   │   └── review-repo.ts           # Repository review plugin
│   └── types/
│       └── plugin.ts                # TypeScript interfaces
├── public/                          # Static assets
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # TailwindCSS configuration
├── postcss.config.mjs               # PostCSS configuration
└── next.config.ts                   # Next.js configuration
```

## Environment Setup

### Install Copilot CLI (if not already installed)

```bash
npm install -g @github-copilot/cli
```

Verify installation:

```bash
copilot --version
```

### Authentication

Copilot CLI will prompt for authentication on first use. Follow the prompts to authenticate with your GitHub account.

## Running Your First Plugin

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Open the browser**: Go to `http://localhost:3000`

3. **View the marketplace**: You should see:
   - Hero section with branding
   - 4 plugin cards in a grid
   - Each card has a "Run Plugin" button

4. **Run a plugin**: Click "Run Plugin" on any card:
   - Button shows loading spinner
   - Copilot CLI executes the plugin prompt
   - Output displays in terminal-style block
   - Collapsible output section

## Troubleshooting

### "copilot command not found"

**Solution**: Install GitHub Copilot CLI globally:
```bash
npm install -g @github-copilot/cli
```

### Build fails with CSS errors

**Solution**: Ensure you're using Node 18+:
```bash
node --version  # Should be v18.0.0 or higher
```

### Port 3000 already in use

**Solution**: Kill the process or use a different port:
```bash
# Use different port
npm run dev -- -p 3001
```

### Plugins not executing

**Solution**: 
1. Check Copilot CLI is installed: `copilot --version`
2. Check authentication: Run `copilot "test"` in terminal
3. Check browser console for API errors (F12)

### TypeScript errors

**Solution**: Run type checking:
```bash
npx tsc --noEmit
```

## Development Workflow

### 1. Creating a New Plugin

**File**: `src/plugins/my-plugin.ts`

```typescript
import { Plugin } from '@/types/plugin';

const myPlugin: Plugin = {
  id: 'my-plugin-id',
  name: 'My Plugin Name',
  description: 'What this plugin does',
  copilotPrompt: 'The prompt to send to Copilot CLI',
  icon: '🎯', // Optional emoji icon
};

export default myPlugin;
```

**Register it**: Update `src/plugins/index.ts`:

```typescript
import myPlugin from './my-plugin';

export const allPlugins: Plugin[] = [
  // ... existing plugins
  myPlugin,
];

export const pluginMap: Record<string, Plugin> = {
  // ... existing plugins
  'my-plugin-id': myPlugin,
};
```

### 2. Creating a New Component

**File**: `src/components/MyComponent.tsx`

```typescript
'use client'; // Add this for interactive components

export default function MyComponent() {
  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Your component */}
    </div>
  );
}
```

### 3. Adding Styles

Use TailwindCSS utility classes in JSX:

```typescript
<div className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
  Styled element
</div>
```

Or add to `app/globals.css`:

```css
.my-class {
  background-color: #2563eb;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

## Build & Deployment

### Testing Before Deploy

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to test the production build.

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy Elsewhere

The `npm run build` creates a `.next` directory with optimized code. You can host this on:
- Netlify
- AWS Lambda
- Docker containers
- Traditional Node.js hosting

## Performance Tips

### 1. Image Optimization

Use Next.js Image component:
```typescript
import Image from 'next/image';
```

### 2. Code Splitting

Components are automatically code-split by Next.js.

### 3. Caching

The marketplace uses browser caching for assets.

## Security Considerations

✅ **Implemented**:
- Plugin ID validation (whitelist only)
- No shell command injection possible
- 30-second execution timeout
- 10MB output buffer limit
- Comprehensive error handling

⚠️ **Production Notes**:
- Run on trusted servers only
- Copilot CLI requires authentication
- Output is logged in browser (user-accessible)
- Consider rate limiting for public deployments

## Type Safety

All code is written in TypeScript for type safety:

```bash
# Check for type errors
npx tsc --noEmit
```

## Code Style

This project uses:
- 2-space indentation
- Consistent naming conventions
- Component-based architecture
- Functional components with hooks

## Support & Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **GitHub Copilot CLI**: https://github.com/github/cli

## Tips for Success

1. **Start simple**: Run existing plugins first
2. **Understand prompts**: Good Copilot prompts = good results
3. **Test locally**: Always test changes with `npm run dev`
4. **Read output**: Review Copilot results carefully
5. **Iterate**: Refine plugin prompts based on results

## Next Steps

1. ✅ Installation complete!
2. Run the dev server: `npm run dev`
3. Explore the marketplace in your browser
4. Run a plugin and review the output
5. Create your own custom plugin
6. Build something amazing!

---

**Need help?** Check the main README.md for more details about the project architecture and plugin system.
