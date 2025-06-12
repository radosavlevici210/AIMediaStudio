import { useState } from "react";

interface VideoGeneratorProps {
  onGenerate: (data: any) => void;
  output?: any;
}

export default function VideoGenerator({ onGenerate, output }: VideoGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [duration, setDuration] = useState("30 seconds");
  const [resolution, setResolution] = useState("4K Ultra HD (3840x2160)");
  const [frameRate, setFrameRate] = useState("24 fps (Cinematic)");
  const [cameraMovement, setCameraMovement] = useState("Static Shot");
  const [lighting, setLighting] = useState("Natural");

  const handleGenerate = () => {
    onGenerate({ prompt, style, duration, resolution, frameRate, cameraMovement, lighting });
  };

  return (
    <div id="video-tab" className="tab-content">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Video Creation Panel */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--hot-pink] flex items-center">
              <i className="fas fa-video mr-3"></i>AI Video Generator
            </h2>
            <button className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
              <i className="fas fa-magic mr-2"></i>AI Vision
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Video Prompt</label>
              <textarea 
                rows={4} 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your video scene in detail...

Example:
A futuristic cityscape at sunset with flying cars moving between glass skyscrapers. Neon lights begin to illuminate the buildings as the camera slowly pans across the urban landscape. The scene has a cyberpunk aesthetic with vibrant purple and blue tones."
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--hot-pink] focus:ring-2 focus:ring-[--hot-pink]/20 transition-colors text-white"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                <select 
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--hot-pink] text-white"
                >
                  <option>Cinematic</option>
                  <option>Animation</option>
                  <option>Realistic</option>
                  <option>Artistic</option>
                  <option>Documentary</option>
                  <option>Abstract</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--hot-pink] text-white"
                >
                  <option>10 seconds</option>
                  <option>30 seconds</option>
                  <option>1 minute</option>
                  <option>2 minutes</option>
                  <option>5 minutes</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
                <select 
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--hot-pink] text-white"
                >
                  <option>4K Ultra HD (3840x2160)</option>
                  <option>8K Ultra HD (7680x4320)</option>
                  <option>1080p Full HD (1920x1080)</option>
                  <option>720p HD (1280x720)</option>
                  <option>IMAX (1.43:1)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Frame Rate</label>
                <select 
                  value={frameRate}
                  onChange={(e) => setFrameRate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--hot-pink] text-white"
                >
                  <option>24 fps (Cinematic)</option>
                  <option>30 fps (Standard)</option>
                  <option>60 fps (Smooth)</option>
                  <option>120 fps (High Speed)</option>
                </select>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-[--bright-orange]">Advanced Settings</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Camera Movement</label>
                  <select 
                    value={cameraMovement}
                    onChange={(e) => setCameraMovement(e.target.value)}
                    className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-white"
                  >
                    <option>Static Shot</option>
                    <option>Pan Left/Right</option>
                    <option>Tilt Up/Down</option>
                    <option>Zoom In/Out</option>
                    <option>Tracking Shot</option>
                    <option>Crane Shot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Lighting</label>
                  <select 
                    value={lighting}
                    onChange={(e) => setLighting(e.target.value)}
                    className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-white"
                  >
                    <option>Natural</option>
                    <option>Dramatic</option>
                    <option>Soft</option>
                    <option>High Contrast</option>
                    <option>Neon</option>
                    <option>Golden Hour</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleGenerate}
                className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center"
              >
                <i className="fas fa-play mr-2"></i>Generate Video
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-images mr-2"></i>Storyboard
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-cog mr-2"></i>Advanced
              </button>
            </div>
          </div>
        </div>
        
        {/* Video Preview Panel */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--bright-orange] mb-4 flex items-center">
            <i className="fas fa-tv mr-3"></i>Video Preview
          </h3>
          
          {/* Video Player */}
          <div className="bg-black rounded-xl mb-4 aspect-video flex items-center justify-center border border-white/20">
            <div className="text-center text-gray-400">
              <i className="fas fa-video text-4xl mb-3"></i>
              <p className="text-sm">Video preview will appear here</p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="bg-black/20 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Timeline</h4>
            <div className="bg-white/10 rounded-lg h-16 p-2 overflow-hidden relative">
              <div className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] h-3 rounded mb-1 opacity-80" style={{width: "75%"}}></div>
              <div className="bg-gradient-to-r from-[--electric-blue] to-[--neon-green] h-3 rounded mb-1 opacity-60" style={{width: "60%"}}></div>
              <div className="bg-gradient-to-r from-[--bright-orange] to-[--hot-pink] h-3 rounded opacity-40" style={{width: "45%"}}></div>
              <div className="absolute top-2 left-8 w-0.5 h-12 bg-white animate-pulse"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>0:00</span>
              <span>0:30</span>
            </div>
          </div>
          
          {/* Quality Metrics */}
          <div className="space-y-3">
            <div className="bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Render Quality</span>
                <span className="text-[--hot-pink] text-sm">Ultra</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] h-1.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Processing Speed</span>
                <span className="text-[--electric-blue] text-sm">Fast</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-[--electric-blue] to-[--neon-green] h-1.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>Estimated Time: <span className="text-[--neon-green]">2m 30s</span></div>
                <div>GPU Usage: <span className="text-[--electric-blue]">78%</span></div>
                <div>File Size: <span className="text-[--hot-pink]">~450MB</span></div>
                <div>Bitrate: <span className="text-[--bright-orange]">50 Mbps</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Generated Video Output */}
      {output && (
        <div className="mt-6 glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--hot-pink] mb-4">Generated Video</h3>
          <div className="bg-black/30 rounded-xl p-6 border border-[--hot-pink]/30">
            <div className="bg-black rounded-xl aspect-video mb-4 flex items-center justify-center border border-[--hot-pink]/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[--hot-pink] to-[--bright-orange] rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <i className="fas fa-play text-white text-2xl"></i>
                </div>
                <p className="text-gray-300">Futuristic Cityscape</p>
                <p className="text-sm text-gray-400">4K • 30 seconds • 24fps</p>
              </div>
            </div>
            <div className="flex justify-center space-x-3">
              <button className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                <i className="fas fa-download mr-2"></i>Download
              </button>
              <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <i className="fas fa-edit mr-2"></i>Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
