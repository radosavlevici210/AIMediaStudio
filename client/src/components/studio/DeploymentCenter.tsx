export default function DeploymentCenter() {
  const deploymentOptions = [
    {
      name: "GitHub Pages",
      icon: "fab fa-github",
      description: "Deploy to GitHub Pages for free hosting",
      color: "text-gray-400",
      bgColor: "bg-gray-500/20",
      url: "https://github.com/new"
    },
    {
      name: "Netlify",
      icon: "fas fa-globe",
      description: "One-click deployment with CDN",
      color: "text-teal-400",
      bgColor: "bg-teal-500/20",
      url: "https://app.netlify.com/drop"
    },
    {
      name: "Vercel",
      icon: "fas fa-rocket",
      description: "Deploy with edge functions",
      color: "text-white",
      bgColor: "bg-black/40",
      url: "https://vercel.com/new"
    },
    {
      name: "Replit Deploy",
      icon: "fas fa-server",
      description: "Deploy directly from Replit",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      url: "#"
    }
  ];

  return (
    <div className="mt-6 glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[--neon-green] flex items-center">
          <i className="fas fa-cloud-upload-alt mr-3"></i>Deployment Center
        </h3>
        <div className="text-sm text-gray-400">
          Production Ready Hosting
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {deploymentOptions.map((option, index) => (
          <a
            key={index}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${option.bgColor} border border-white/20 rounded-xl p-4 hover:scale-105 transition-transform cursor-pointer group`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <i className={`${option.icon} text-2xl ${option.color}`}></i>
              <h4 className="font-semibold text-white">{option.name}</h4>
            </div>
            <p className="text-sm text-gray-300">{option.description}</p>
            <div className="mt-3 text-xs text-gray-400 group-hover:text-white transition-colors">
              Click to deploy →
            </div>
          </a>
        ))}
      </div>

      <div className="bg-black/20 rounded-xl p-4 border border-[--neon-green]/30">
        <h4 className="text-[--neon-green] font-semibold mb-2 flex items-center">
          <i className="fas fa-info-circle mr-2"></i>Deployment Instructions
        </h4>
        <ol className="text-sm text-gray-300 space-y-2">
          <li>1. Export your project files using the Export Suite</li>
          <li>2. Choose your preferred hosting platform above</li>
          <li>3. Upload the exported files to your chosen platform</li>
          <li>4. Configure domain and SSL settings if needed</li>
          <li>5. Your AI Studio will be live and accessible worldwide</li>
        </ol>
      </div>
    </div>
  );
}