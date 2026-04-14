export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-100 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          Powered by FirstFront Agent Gateway
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          FirstFront<br />
          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Plugin Hub
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Supercharge your development workflow with AI-powered productivity plugins. 
          Run intelligent analysis, generate documentation, review code, and more—all powered by FirstFront.
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
