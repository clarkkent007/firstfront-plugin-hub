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
            Available Plugins
          </h2>
          <p className="text-gray-600">
            Select a plugin below and click "Run Plugin" to execute it powered by GitHub Copilot CLI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPlugins.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-600 text-sm">
          <p>
            Built with Next.js, TypeScript, and{' '}
            <span className="font-semibold">GitHub Copilot CLI</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
