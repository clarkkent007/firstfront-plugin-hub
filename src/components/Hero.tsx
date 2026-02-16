export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Powered by GitHub Copilot CLI
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Copilot CLI<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Plugin Marketplace
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Supercharge your development workflow with AI-powered productivity plugins. 
          Run intelligent analysis, generate documentation, review code, and more—all powered by GitHub Copilot CLI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">⚡</span>
            <span className="font-medium">Fast execution</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">🔒</span>
            <span className="font-medium">Safe & validated</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">🧠</span>
            <span className="font-medium">AI-powered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
