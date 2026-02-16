# Plugin Examples & Usage Scenarios

This document provides detailed examples of each plugin and expected use cases.

## Overview

The Copilot CLI Plugin Marketplace provides 4 powerful plugins for development productivity:

```
┌─────────────────────────────────────────────┐
│    Copilot CLI Plugin Marketplace            │
├─────────────────────────────────────────────┤
│ 📄 Generate README                          │
│ 🔗 Summarize Git Commits                    │
│ 🧪 Generate Test Cases                      │
│ 🔍 Repository Review                        │
└─────────────────────────────────────────────┘
```

## Plugin 1: Generate README

### Purpose
Generates a comprehensive README.md file for any project.

### What It Does
- Analyzes project structure
- Reads main files and documentation
- Generates formatted README with:
  - Project description
  - Setup instructions
  - Usage guide
  - Contributing guidelines
  - Features and benefits

### Use Cases

**Scenario 1: New Project Documentation**
```
Developer: "I just created a new project and need documentation"
Action: Click "Run Plugin" on Generate README
Result: Professional README.md is generated
Outcome: Can be copied and used immediately
```

**Scenario 2: Update Existing README**
```
Developer: "My project evolved, README is outdated"
Action: Run Generate README again
Result: Updated documentation reflecting current state
Outcome: Team has current project documentation
```

### Example Output
```markdown
# My Awesome Project

A production-ready web application for...

## Features
- Feature 1
- Feature 2
- Feature 3

## Installation
```bash
npm install
```

## Usage
```bash
npm run dev
```

## Contributing
1. Fork repository
2. Create feature branch
3. Submit pull request

## License
MIT
```

## Plugin 2: Summarize Git Commits

### Purpose
Analyzes recent git commits and generates a structured changelog.

### What It Does
- Reviews commit history
- Extracts key changes
- Identifies breaking changes
- Groups changes by category
- Generates formatted changelog

### Use Cases

**Scenario 1: Release Notes**
```
Developer: "Need to document changes for v2.0 release"
Action: Click "Run Plugin" on Summarize Git Commits
Result: Changelog with all changes since last release
Outcome: Professional release notes for users
```

**Scenario 2: Team Communication**
```
Manager: "What has the team been working on?"
Action: Run Summarize Git Commits
Result: Summary of all recent work
Outcome: Clear project progress status
```

**Scenario 3: Code Review Preparation**
```
Developer: "Reviewing PR, need context on changes"
Action: Run Summarize Git Commits
Result: History and context of changes
Outcome: Better code review insights
```

### Example Output
```
CHANGELOG

## [2.0.0] - 2026-02-16

### Added
- New authentication system
- User profile management
- API rate limiting
- Comprehensive logging

### Changed
- Refactored database queries for performance
- Updated UI to modern design
- Improved error messages

### Fixed
- Memory leak in background worker
- Race condition in cache layer
- Unicode handling in exports

### Breaking Changes
- Removed deprecated v1 API endpoints
- Changed authentication flow
```

## Plugin 3: Generate Test Cases

### Purpose
Creates comprehensive unit and integration test cases for projects.

### What It Does
- Analyzes project code
- Identifies testable functions and components
- Generates test cases covering:
  - Happy path scenarios
  - Edge cases
  - Error conditions
  - Integration points
- Suggests testing frameworks
- Follows testing best practices

### Use Cases

**Scenario 1: Initial Test Suite**
```
Developer: "New project has no tests yet"
Action: Click "Run Plugin" on Generate Test Cases
Result: Complete test suite structure and examples
Outcome: Project has test foundation to build on
```

**Scenario 2: Improve Test Coverage**
```
QA Lead: "Current tests don't cover edge cases"
Action: Run Generate Test Cases
Result: Additional test cases for uncovered scenarios
Outcome: Improved code reliability
```

**Scenario 3: Onboarding New Developer**
```
New Dev: "How should tests be structured here?"
Action: Run Generate Test Cases
Result: Examples of proper testing patterns
Outcome: New developer learns project standards
```

### Example Output
```typescript
import { calculateTotal } from './calculator';

describe('calculateTotal', () => {
  it('should add positive numbers', () => {
    const result = calculateTotal([1, 2, 3]);
    expect(result).toBe(6);
  });

  it('should handle empty array', () => {
    const result = calculateTotal([]);
    expect(result).toBe(0);
  });

  it('should handle negative numbers', () => {
    const result = calculateTotal([1, -2, 3]);
    expect(result).toBe(2);
  });

  it('should throw on invalid input', () => {
    expect(() => calculateTotal('invalid')).toThrow();
  });
});

// Integration Tests
describe('API Integration', () => {
  it('should fetch and calculate totals', async () => {
    const data = await fetchData();
    const result = calculateTotal(data.values);
    expect(result).toBeGreaterThan(0);
  });
});
```

## Plugin 4: Repository Review

### Purpose
Comprehensive code review and improvement suggestions.

### What It Does
- Analyzes entire repository
- Reviews code quality
- Assesses architecture
- Identifies security issues
- Suggests optimizations
- Evaluates best practices compliance

### Outputs Include
- Code quality score
- Architecture recommendations
- Performance opportunities
- Security vulnerabilities
- Testing suggestions
- Documentation gaps
- Refactoring opportunities

### Use Cases

**Scenario 1: Project Kickoff**
```
Architect: "New project needs initial review"
Action: Click "Run Plugin" on Repository Review
Result: Comprehensive review with recommendations
Outcome: Team has clear direction for improvements
```

**Scenario 2: Security Audit**
```
Security Officer: "Need to audit project for vulnerabilities"
Action: Run Repository Review
Result: Security analysis and recommendations
Outcome: Identified and prioritized security issues
```

**Scenario 3: Performance Optimization**
```
DevOps: "Application is slow, where to optimize?"
Action: Run Repository Review
Result: Performance bottlenecks identified
Outcome: Optimization roadmap created
```

**Scenario 4: Before Major Release**
```
Release Manager: "Ready to ship v1.0?"
Action: Run Repository Review
Result: Pre-release checklist and issues
Outcome: Confident in release quality
```

### Example Output
```
REPOSITORY REVIEW

## Code Quality Assessment
Rating: 8.5/10

## Architecture Analysis
✅ Good: Modular component structure
⚠️  Improve: Reduce circular dependencies
❌ Issue: Missing error boundaries in React

## Performance Opportunities
1. Implement lazy loading for images
2. Code-split large components
3. Enable gzip compression
4. Add caching layer for API calls

## Security Findings
🔴 CRITICAL: Exposed API keys in env.example
🟡 MEDIUM: Missing CSRF protection on forms
🟢 LOW: Consider HTTPS enforcement

## Testing Coverage
Current: 45%
Target: 80%
Missing: Integration tests, E2E tests

## Best Practices
✅ TypeScript properly configured
✅ ESLint rules enforced
⚠️  Missing pre-commit hooks
❌ No automated security scanning

## Recommendations (Priority Order)
1. Add secret scanning to CI/CD
2. Implement testing framework
3. Set up error monitoring
4. Add API rate limiting
5. Refactor circular dependencies
```

## Plugin Execution Flow

### Typical Plugin Run Sequence

```
1. User opens marketplace (http://localhost:3000)
   ↓
2. Sees 4 plugin cards with descriptions
   ↓
3. Clicks "Run Plugin" on chosen card
   ↓
4. Frontend sends POST to /api/run-plugin
   {
     "pluginId": "generate-readme"
   }
   ↓
5. Backend validates plugin ID (security check)
   ↓
6. Executes: copilot "Your prompt for README..."
   ↓
7. Copilot CLI processes prompt
   ↓
8. Output captured and returned
   ↓
9. Frontend displays in terminal-style block
   ↓
10. User reviews, copies, or saves output
```

## Best Practices for Plugin Results

### Using Generated README
1. Review for accuracy
2. Add project-specific sections
3. Update links and references
4. Commit to repository

### Using Commit Summary
1. Copy to release notes
2. Validate for breaking changes
3. Share with stakeholders
4. Update version numbers

### Using Generated Tests
1. Review test logic
2. Add project-specific scenarios
3. Run tests to verify
4. Integrate into CI/CD

### Using Repository Review
1. Prioritize recommendations
2. Create issues for each item
3. Assign to team members
4. Track completion

## Custom Plugin Examples

Want to extend with your own plugins? Here are some ideas:

### Documentation Plugin
```typescript
{
  id: 'generate-docs',
  name: 'Generate API Docs',
  description: 'Auto-generate API documentation from code',
  copilotPrompt: 'Generate comprehensive API documentation...',
  icon: '📚',
}
```

### Security Plugin
```typescript
{
  id: 'security-scan',
  name: 'Security Scan',
  description: 'Scan for security vulnerabilities',
  copilotPrompt: 'Perform comprehensive security audit...',
  icon: '🔐',
}
```

### Performance Plugin
```typescript
{
  id: 'performance-audit',
  name: 'Performance Audit',
  description: 'Analyze and suggest performance improvements',
  copilotPrompt: 'Analyze performance bottlenecks...',
  icon: '⚡',
}
```

## Integration Examples

### In Your Workflow
```bash
# Morning routine
1. npm run dev              # Start marketplace
2. Run "Repository Review"  # See what needs work
3. Run "Summarize Commits"  # Check team progress
4. Run "Generate Tests"     # Improve coverage

# Before release
1. Run "Repository Review"  # Final checks
2. Run "Summarize Commits"  # Generate release notes
3. Run "Generate README"    # Update documentation
```

### In CI/CD Pipeline
```yaml
name: Daily Analysis
on:
  schedule:
    - cron: '0 9 * * 1'  # Monday at 9 AM

jobs:
  copilot-analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run plugins
        run: |
          curl -X POST http://localhost:3000/api/run-plugin \
            -d '{"pluginId": "generate-readme"}'
      - name: Commit results
        run: git add -A && git commit -m "Weekly analysis"
```

## Tips for Maximum Effectiveness

1. **Be Specific with Prompts**: Good prompts = better results
2. **Review Output Carefully**: Copilot suggestions need human validation
3. **Iterate and Refine**: Run plugins multiple times if needed
4. **Customize Plugins**: Tailor prompts to your project
5. **Automate**: Integrate into your development workflow
6. **Share Results**: Use outputs for team communication

---

**Ready to get started?** Run `npm run dev` and try the plugins!
