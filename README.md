# Nexus Plugin Hub

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clarkkent007/firstfront-plugin-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **A powerful plugin marketplace for Nexus agents, enabling AI-powered productivity plugins.**

## 🚀 Quick Start (2 Minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

## 🔌 Available Plugins

| Plugin | Description |
|--------|-------------|
| 📄 Generate README | Create comprehensive project documentation |
| 🔗 Summarize Commits | Analyze git history and generate changelogs |
| 🧪 Generate Tests | Create unit and integration test cases |
| 🔍 Repository Review | Comprehensive code review with suggestions |
| 🚀 Setup Nexus Agent | Initialize Nexus Agent Gateway |
| 🔌 Create Plugin | Generate new Nexus plugins |
| 🔒 Security Audit | OWASP Top 10 and vulnerability scan |
| ⚡ Performance Analysis | Identify bottlenecks and optimizations |
| 📚 API Documentation | Generate OpenAPI specs from code |

## 💻 Technology Stack

- **Frontend**: React 19, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Runtime**: Nexus Agent Gateway
- **Deployment**: Vercel

## 📂 Project Structure

```
firstfront-plugin-hub/
├── app/
│   ├── api/run-plugin/route.ts      # API endpoint
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Home page
├── src/
│   ├── components/                   # React components
│   ├── plugins/                      # Plugin definitions
│   └── types/                        # TypeScript types
└── vercel.json                       # Vercel config
```

## 🌐 Deployment

### Vercel (Recommended)
1. Click "Deploy with Vercel" button above
2. Or connect your GitHub repo to Vercel
3. Automatic deployment on every push

### Manual
```bash
npm install
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com)
- **Agent Runtime**: [Nexus Agent Gateway](https://github.com/clarkkent007/nexus-agent-gateway)

## 📄 License

MIT - Feel free to use this for any purpose.

---

**Built with ❤️ by [FirstFront](https://github.com/clarkkent007)**
