export default function MainHeader() {
  return (
    <div className="glass-card rounded-3xl p-8 mb-8 text-center animate-glow-pulse">
      <div className="neon-gradient text-6xl font-bold mb-4 animate-float">
        <i className="fas fa-magic mr-4"></i>AI STUDIO PRO
      </div>
      <p className="text-gray-300 text-xl mb-6">Next-Generation Content Creation Platform</p>
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
