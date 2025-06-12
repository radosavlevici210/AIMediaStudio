import { useState } from "react";

interface ScriptStudioProps {
  onGenerate: (data: any) => void;
  output?: any;
}

export default function ScriptStudio({ onGenerate, output }: ScriptStudioProps) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Sci-Fi Thriller");
  const [duration, setDuration] = useState("120 minutes (Full Movie)");
  const [script, setScript] = useState("");

  const handleGenerate = () => {
    onGenerate({ title, genre, duration, script });
  };

  return (
    <div id="script-tab" className="tab-content">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Script Input Panel */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--neon-green] flex items-center">
              <i className="fas fa-pen-fancy mr-3"></i>AI Script Generator
            </h2>
            <button className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
              <i className="fas fa-magic mr-2"></i>AI Assist
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your movie title..." 
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--neon-green] focus:ring-2 focus:ring-[--neon-green]/20 transition-colors text-white"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                <select 
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--neon-green] text-white"
                >
                  <option>Sci-Fi Thriller</option>
                  <option>Action Adventure</option>
                  <option>Drama</option>
                  <option>Comedy</option>
                  <option>Horror</option>
                  <option>Documentary</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--neon-green] text-white"
                >
                  <option>15 minutes (Short)</option>
                  <option>30 minutes (Medium)</option>
                  <option>90 minutes (Feature)</option>
                  <option>120 minutes (Full Movie)</option>
                  <option>Custom Length</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Script Content</label>
              <textarea 
                rows={12} 
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Write your script here or use AI generation...

Example:
FADE IN:

EXT. FUTURISTIC CITYSCAPE - NIGHT

Neon lights pierce through the darkness as autonomous vehicles glide silently through the air. The year is 2045.

SARAH (30s), a brilliant AI researcher, stands on her apartment balcony overlooking the sprawling metropolis.

SARAH
(to her AI assistant)
ARIA, run diagnostics on Project Genesis.

ARIA (V.O.)
(synthesized voice)
All systems operational, Dr. Chen. Neural networks are showing unprecedented adaptation rates.

Sarah's expression shifts from confidence to concern.

SARAH
That's what worries me.

FADE TO BLACK."
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--neon-green] focus:ring-2 focus:ring-[--neon-green]/20 transition-colors font-mono text-sm text-white"
              />
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleGenerate}
                className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center"
              >
                <i className="fas fa-wand-magic-sparkles mr-2"></i>Generate Script
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-search mr-2"></i>Analyze
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-save mr-2"></i>Save Draft
              </button>
            </div>
          </div>
        </div>
        
        {/* Script Analysis Panel */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--electric-blue] mb-4 flex items-center">
            <i className="fas fa-chart-line mr-3"></i>Script Analysis
          </h3>
          
          <div className="space-y-4">
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">Story Structure</span>
                <span className="text-[--neon-green]">92%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full" style={{width: "92%"}}></div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">Character Development</span>
                <span className="text-[--electric-blue]">87%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full" style={{width: "87%"}}></div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">Dialogue Quality</span>
                <span className="text-[--hot-pink]">94%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] h-2 rounded-full" style={{width: "94%"}}></div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-[--bright-orange]">AI Suggestions</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Add more emotional depth to Act 2</li>
                <li>• Consider subplot with supporting character</li>
                <li>• Enhance visual descriptions for cinematography</li>
                <li>• Strengthen climax resolution</li>
              </ul>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-[--neon-green]">Production Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Runtime: <span className="text-white">~120 min</span></div>
                <div>Scenes: <span className="text-white">42</span></div>
                <div>Characters: <span className="text-white">8</span></div>
                <div>Locations: <span className="text-white">12</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Script Output Preview */}
      {output && (
        <div className="mt-6 glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--neon-green] mb-4">Generated Script Preview</h3>
          <div className="bg-black/30 rounded-xl p-6 border border-[--neon-green]/30">
            <div className="space-y-4 text-left">
              <div className="border-l-4 border-[--neon-green] pl-4">
                <h4 className="font-bold text-lg text-[--neon-green]">FADE IN:</h4>
                <p className="text-gray-300 mt-2">EXT. NEON CITY - NIGHT</p>
                <p className="text-gray-400 text-sm mt-1">A sprawling cyberpunk metropolis illuminated by holographic advertisements and flying vehicles.</p>
              </div>
              <div className="border-l-4 border-[--electric-blue] pl-4">
                <p className="text-white">ALEX (late 20s, confident hacker) stands on a rooftop overlooking the digital cityscape.</p>
                <div className="mt-2">
                  <span className="text-[--electric-blue] font-semibold">ALEX</span>
                  <p className="text-gray-300">(into comm device)</p>
                  <p className="text-white italic">"The neural networks are more advanced than we thought. We need to move fast."</p>
                </div>
              </div>
              <div className="text-center py-4">
                <button className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                  <i className="fas fa-eye mr-2"></i>View Full Script
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
