import { useState } from "react";

interface MusicLabProps {
  onGenerate: (data: any) => void;
  output?: any;
}

export default function MusicLab({ onGenerate, output }: MusicLabProps) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Electronic Pop");
  const [bpm, setBpm] = useState(128);
  const [key, setKey] = useState("C Major");
  const [duration, setDuration] = useState("3:30 minutes");
  const [lyrics, setLyrics] = useState("");

  const handleGenerate = () => {
    onGenerate({ title, genre, bpm, key, duration, lyrics });
  };

  return (
    <div id="music-tab" className="tab-content">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Music Creation Panel */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--electric-blue] flex items-center">
              <i className="fas fa-headphones mr-3"></i>AI Music Composer
            </h2>
            <button className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
              <i className="fas fa-magic mr-2"></i>AI Melody
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Song Title</label>
                <input 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter song title..." 
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] focus:ring-2 focus:ring-[--electric-blue]/20 transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                <select 
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] text-white"
                >
                  <option>Electronic Pop</option>
                  <option>Ambient Chill</option>
                  <option>Hip-Hop</option>
                  <option>Rock</option>
                  <option>Classical</option>
                  <option>Jazz Fusion</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">BPM</label>
                <input 
                  type="range" 
                  min="60" 
                  max="180" 
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-[--electric-blue] font-bold">{bpm} BPM</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Key</label>
                <select 
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] text-white"
                >
                  <option>C Major</option>
                  <option>A Minor</option>
                  <option>G Major</option>
                  <option>E Minor</option>
                  <option>F Major</option>
                  <option>D Minor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] text-white"
                >
                  <option>3:30 minutes</option>
                  <option>4:00 minutes</option>
                  <option>5:00 minutes</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Lyrics</label>
              <textarea 
                rows={10} 
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                placeholder="Write your lyrics here...

Example:
[Verse 1]
In the digital realm where dreams collide
Binary hearts beating side by side
Through the matrix of endless code
We find our path, we find our road

[Chorus]
Electric souls in the neon night
Synthesized love burning bright
In this world of ones and zeros
We're the unlikely heroes

[Verse 2]
Data streams like rivers flow
In this cyber world we know
Artificial minds and human hearts
Creating brand new forms of art"
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] focus:ring-2 focus:ring-[--electric-blue]/20 transition-colors text-white"
              />
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleGenerate}
                className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center"
              >
                <i className="fas fa-music mr-2"></i>Generate Music
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-microphone mr-2"></i>Record Vocals
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <i className="fas fa-sliders-h mr-2"></i>Mix & Master
              </button>
            </div>
          </div>
        </div>
        
        {/* Audio Visualizer & Controls */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
            <i className="fas fa-wave-square mr-3"></i>Audio Visualizer
          </h3>
          
          {/* Audio Waveform Visualization */}
          <div className="bg-gradient-to-r from-[--electric-blue]/20 to-[--hot-pink]/20 rounded-xl p-4 mb-4 h-32 flex items-end justify-center space-x-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div 
                key={i}
                className="bg-gradient-to-t from-[--electric-blue] to-[--hot-pink] w-1 rounded-full animate-pulse" 
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          {/* Playback Controls */}
          <div className="bg-black/20 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <button className="w-10 h-10 bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fas fa-backward"></i>
              </button>
              <button className="w-12 h-12 bg-gradient-to-r from-[--neon-green] to-[--electric-blue] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fas fa-play"></i>
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fas fa-forward"></i>
              </button>
            </div>
            
            <div className="w-full bg-white/10 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full" style={{width: "35%"}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>1:24</span>
              <span>3:47</span>
            </div>
          </div>
          
          {/* Audio Effects */}
          <div className="space-y-3">
            <div className="bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Reverb</span>
                <span className="text-[--electric-blue] text-sm">45%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="45" className="w-full" />
            </div>
            
            <div className="bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Chorus</span>
                <span className="text-[--hot-pink] text-sm">30%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="30" className="w-full" />
            </div>
            
            <div className="bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Distortion</span>
                <span className="text-[--bright-orange] text-sm">15%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="15" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Generated Music Output */}
      {output && (
        <div className="mt-6 glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--electric-blue] mb-4">Generated Music Track</h3>
          <div className="bg-black/30 rounded-xl p-6 border border-[--electric-blue]/30">
            <div className="text-center mb-4">
              <i className="fas fa-music text-4xl text-[--electric-blue] mb-2"></i>
              <h4 className="text-lg font-bold text-white">"Digital Dreams"</h4>
              <p className="text-gray-400">Electronic Pop • 3:47 • 128 BPM</p>
            </div>
            {/* Simulated Audio Player */}
            <div className="bg-black/50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <button className="w-10 h-10 bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] rounded-full flex items-center justify-center">
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full" style={{width: "0%"}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0:00</span>
                <span>3:47</span>
              </div>
            </div>
            <div className="flex justify-center space-x-3">
              <button className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                <i className="fas fa-download mr-2"></i>Download
              </button>
              <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <i className="fas fa-share mr-2"></i>Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
