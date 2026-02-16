'use client';

import { useState } from 'react';
import { Plugin, PluginResult } from '@/types/plugin';

interface PluginCardProps {
  plugin: Plugin;
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PluginResult | null>(null);
  const [showOutput, setShowOutput] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRun = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/run-plugin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pluginId: plugin.id }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: PluginResult = await response.json();
      setResult(data);
      setShowOutput(true);

      if (!data.success) {
        setError(data.error || 'Unknown error occurred');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to run plugin';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {plugin.icon && <span className="text-2xl">{plugin.icon}</span>}
            <h3 className="text-lg font-semibold text-gray-900">{plugin.name}</h3>
          </div>
          <p className="text-sm text-gray-600">{plugin.description}</p>
        </div>
      </div>

      {/* Run Button */}
      <div className="mb-4">
        <button
          onClick={handleRun}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
            isLoading
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></span>
              Running...
            </span>
          ) : (
            'Run Plugin'
          )}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-red-700">
            <span className="font-semibold">Error:</span> {error}
          </p>
        </div>
      )}

      {/* Output Section */}
      {result && (
        <div className="space-y-2">
          <button
            onClick={() => setShowOutput(!showOutput)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>{showOutput ? '▼' : '▶'}</span>
            {showOutput ? 'Hide Output' : 'Show Output'}
          </button>

          {showOutput && (
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-words">
                {result.output}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
