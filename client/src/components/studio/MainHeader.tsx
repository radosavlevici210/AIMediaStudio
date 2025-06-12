export default function MainHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false 
  });

  return (
    <div className="glass-card rounded-3xl p-8 mb-8 text-center animate-glow-pulse">
      <div className="neon-gradient text-6xl font-bold mb-4 animate-float">
        <i className="fas fa-magic mr-4"></i>AI STUDIO PRO+
      </div>
      <p className="text-gray-300 text-xl mb-4">Next-Generation Content Creation Platform</p>
      <div className="text-sm text-gray-400 mb-4 border-t border-white/10 pt-4">
        <div className="flex justify-center space-x-8">
          <span>© 2025 Ervin Remus Radosavlevici</span>
          <span>|</span>
          <span>All Rights Reserved</span>
          <span>|</span>
          <span>Private License</span>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Session: {currentDate} at {currentTime} | Build: PROD-2025.01.12
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-[--neon-green]">8K</div>
          <div className="text-sm text-gray-400">Max Resolution</div>
        </div>
        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-[--electric-blue]">∞</div>
          <div className="text-sm text-gray-400">Content Length</div>
        </div>
        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-[--hot-pink]">AI+</div>
          <div className="text-sm text-gray-400">Neural Engine</div>
        </div>
        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-[--bright-orange]">24/7</div>
          <div className="text-sm text-gray-400">Processing</div>
        </div>
      </div>
    </div>
  );
}
