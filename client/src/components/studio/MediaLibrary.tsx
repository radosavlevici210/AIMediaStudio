import { useState } from "react";

export default function MediaLibrary() {
  const [activeCategory, setActiveCategory] = useState("video");
  
  const mediaItems = {
    video: [
      {
        id: 1,
        title: "AI Cityscape Demo",
        duration: "0:30",
        format: "MP4",
        size: "45.2 MB",
        preview: "/api/placeholder/320/180",
        created: "2025-01-12"
      },
      {
        id: 2,
        title: "Neural Network Visualization",
        duration: "1:15",
        format: "MP4",
        size: "128.7 MB",
        preview: "/api/placeholder/320/180",
        created: "2025-01-11"
      }
    ],
    audio: [
      {
        id: 1,
        title: "Digital Dreams",
        duration: "3:47",
        format: "MP3",
        size: "8.4 MB",
        waveform: true,
        created: "2025-01-12"
      },
      {
        id: 2,
        title: "Cyberpunk Ambient",
        duration: "4:23",
        format: "WAV",
        size: "42.1 MB",
        waveform: true,
        created: "2025-01-10"
      }
    ]
  };

  const categories = [
    { id: "video", label: "Videos", icon: "fas fa-video", count: mediaItems.video.length },
    { id: "audio", label: "Audio", icon: "fas fa-music", count: mediaItems.audio.length }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--electric-blue] flex items-center">
          <i className="fas fa-folder-open mr-3"></i>Media Library
        </h2>
        <button className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
          <i className="fas fa-upload mr-2"></i>Upload Media
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors ${
              activeCategory === category.id
                ? "bg-[--electric-blue] text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <i className={category.icon}></i>
            <span>{category.label}</span>
            <span className="bg-black/30 px-2 py-1 rounded-full text-xs">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaItems[activeCategory as keyof typeof mediaItems].map((item) => (
          <div key={item.id} className="bg-black/20 rounded-xl p-4 hover:bg-black/30 transition-colors group">
            {activeCategory === "video" && (
              <div className="bg-black rounded-lg aspect-video mb-3 flex items-center justify-center border border-white/20 group-hover:border-[--electric-blue]/50 transition-colors">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[--electric-blue] to-[--hot-pink] rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <i className="fas fa-play text-white text-lg"></i>
                  </div>
                  <p className="text-xs text-gray-400">Video Preview</p>
                </div>
              </div>
            )}
            
            {activeCategory === "audio" && (
              <div className="bg-black rounded-lg h-20 mb-3 flex items-center justify-center border border-white/20 group-hover:border-[--electric-blue]/50 transition-colors">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-t from-[--electric-blue] to-[--hot-pink] w-1 rounded-full" 
                      style={{
                        height: `${Math.random() * 40 + 10}px`,
                        opacity: 0.7
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-semibold text-white truncate">{item.title}</h4>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{item.duration}</span>
                <span>{item.format}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{item.size}</span>
                <span>{item.created}</span>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <button className="flex-1 bg-[--electric-blue] text-white px-3 py-1 rounded text-xs hover:bg-[--electric-blue]/80 transition-colors">
                  <i className="fas fa-play mr-1"></i>Play
                </button>
                <button className="px-3 py-1 bg-white/10 rounded text-xs hover:bg-white/20 transition-colors">
                  <i className="fas fa-download"></i>
                </button>
                <button className="px-3 py-1 bg-white/10 rounded text-xs hover:bg-white/20 transition-colors">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Storage Info */}
      <div className="mt-6 bg-black/20 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Storage Used</span>
          <span className="text-sm text-[--electric-blue]">224.4 MB / 10 GB</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full" style={{width: "2.2%"}}></div>
        </div>
      </div>
    </div>
  );
}