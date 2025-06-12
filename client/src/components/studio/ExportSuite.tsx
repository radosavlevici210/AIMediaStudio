import DeploymentCenter from "@/components/studio/DeploymentCenter";

interface ExportSuiteProps {
  onStartExport: () => void;
  exportProgress?: any;
}

export default function ExportSuite({ onStartExport, exportProgress }: ExportSuiteProps) {
  return (
    <div id="export-tab" className="tab-content">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Export Settings */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-[--bright-orange] mb-6 flex items-center">
            <i className="fas fa-download mr-3"></i>Export Configuration
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[--neon-green]">Output Formats</h3>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" defaultChecked className="text-[--neon-green]" />
                  <span>MP4 (Video)</span>
                </label>
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" defaultChecked className="text-[--electric-blue]" />
                  <span>MP3 (Audio)</span>
                </label>
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" className="text-[--hot-pink]" />
                  <span>WAV (Lossless)</span>
                </label>
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" className="text-[--bright-orange]" />
                  <span>MOV (Apple)</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[--electric-blue]">Quality Settings</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Video Quality</label>
                  <select className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white">
                    <option>8K Ultra HD (7680x4320)</option>
                    <option selected>4K Ultra HD (3840x2160)</option>
                    <option>1080p Full HD (1920x1080)</option>
                    <option>720p HD (1280x720)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Audio Quality</label>
                  <select className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white">
                    <option>320 kbps (Premium)</option>
                    <option selected>256 kbps (High)</option>
                    <option>192 kbps (Medium)</option>
                    <option>128 kbps (Standard)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[--hot-pink]">Distribution</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" className="text-[--neon-green]" />
                  <i className="fab fa-youtube text-red-500"></i>
                  <span>Upload to YouTube</span>
                </label>
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" className="text-[--electric-blue]" />
                  <i className="fab fa-spotify text-green-500"></i>
                  <span>Distribute to Spotify</span>
                </label>
                <label className="flex items-center space-x-3 bg-black/20 p-3 rounded-xl cursor-pointer hover:bg-black/30 transition-colors">
                  <input type="checkbox" className="text-[--hot-pink]" />
                  <i className="fab fa-soundcloud text-orange-500"></i>
                  <span>Upload to SoundCloud</span>
                </label>
              </div>
            </div>
            
            <button 
              onClick={onStartExport}
              className="w-full bg-gradient-to-r from-[--neon-green] via-[--electric-blue] to-[--hot-pink] text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              <i className="fas fa-rocket mr-2"></i>Start Export Process
            </button>
          </div>
        </div>
        
        {/* Export Progress & Files */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--neon-green] mb-4 flex items-center">
            <i className="fas fa-tasks mr-3"></i>Export Progress
          </h3>
          
          {/* Progress Indicators */}
          {exportProgress && (
            <div className="space-y-4 mb-6">
              <div className="bg-black/20 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Video Rendering</span>
                  <span className="text-[--neon-green] text-sm">{exportProgress.video}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full transition-all duration-300" 
                    style={{width: `${exportProgress.video}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Audio Processing</span>
                  <span className="text-[--electric-blue] text-sm">{exportProgress.audio}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full transition-all duration-300" 
                    style={{width: `${exportProgress.audio}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Final Compression</span>
                  <span className="text-[--hot-pink] text-sm">{exportProgress.compression}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] h-2 rounded-full transition-all duration-300" 
                    style={{width: `${exportProgress.compression}%`}}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Export Queue */}
          <div>
            <h4 className="font-semibold mb-3 text-[--electric-blue]">Export Queue</h4>
            <div className="space-y-3">
              <div className="bg-black/20 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-film text-[--neon-green]"></i>
                  <div>
                    <div className="font-medium">AI_Movie_Project.mp4</div>
                    <div className="text-sm text-gray-400">4K • 2.3 GB</div>
                  </div>
                </div>
                <span className="text-xs bg-[--neon-green]/20 text-[--neon-green] px-2 py-1 rounded">Ready</span>
              </div>
              
              <div className="bg-black/20 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-music text-[--electric-blue]"></i>
                  <div>
                    <div className="font-medium">AI_Track_Master.mp3</div>
                    <div className="text-sm text-gray-400">320kbps • 8.4 MB</div>
                  </div>
                </div>
                <span className="text-xs bg-[--electric-blue]/20 text-[--electric-blue] px-2 py-1 rounded">Processing</span>
              </div>
              
              <div className="bg-black/20 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-video text-[--hot-pink]"></i>
                  <div>
                    <div className="font-medium">AI_Generated_Scene.mov</div>
                    <div className="text-sm text-gray-400">8K • 5.7 GB</div>
                  </div>
                </div>
                <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">Queued</span>
              </div>
            </div>
          </div>
          
          {/* Download Section */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="font-semibold mb-3 text-[--bright-orange]">Recent Downloads</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Previous_Project.mp4</span>
                <button className="text-[--neon-green] hover:text-[--neon-green]/80">
                  <i className="fas fa-download"></i>
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Demo_Track.mp3</span>
                <button className="text-[--electric-blue] hover:text-[--electric-blue]/80">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DeploymentCenter />
    </div>
  );
}
