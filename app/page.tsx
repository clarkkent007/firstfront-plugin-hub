'use client';

import Hero from '@/components/Hero';
import PluginCard from '@/components/PluginCard';
import { allPlugins } from '@/plugins';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Community Plugins
          </h2>
          <p className="text-gray-600">
            Run AI-powered productivity plugins powered by FirstFront Agent Gateway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPlugins.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl border border-amber-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need More Plugins?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            FirstFront Nexus provides unified plugin management for Claude Code, OpenClaw, 
            Knowledge Work, MCP servers, and more. Browse and install from a unified interface.
          </p>
          <a
            href="https://github.com/clarkkent007/firstfront-nexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Open FirstFront Nexus →
          </a>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-600 text-sm">
          <p>
            Built with Next.js, TypeScript, and{' '}
            <span className="font-semibold">FirstFront Agent Gateway</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
