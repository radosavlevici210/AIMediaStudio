
import { useState, useEffect, useRef } from "react";

interface StreamSettings {
  platform: 'youtube' | 'twitch' | 'facebook' | 'custom';
  quality: '720p' | '1080p' | '4K';
  bitrate: number;
  fps: number;
  enableChat: boolean;
  enableDonations: boolean;
  streamKey: string;
  rtmpUrl: string;
}

export default function LiveStreaming() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamSettings, setStreamSettings] = useState<StreamSettings>({
    platform: 'youtube',
    quality: '1080p',
    bitrate: 2500,
    fps: 30,
    enableChat: true,
    enableDonations: true,
    streamKey: '',
    rtmpUrl: ''
  });
  const [viewerCount, setViewerCount] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, user: string, message: string, timestamp: Date}>>([]);
  const [streamStats, setStreamStats] = useState({
    duration: 0,
    bitrate: 0,
    fps: 0,
    droppedFrames: 0,
    cpuUsage: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simulate viewer count updates
    if (isStreaming) {
      const interval = setInterval(() => {
        setViewerCount(prev => Math.max(0, prev + Math.floor(Math.random() * 10) - 4));
        setStreamStats(prev => ({
          duration: prev.duration + 1,
          bitrate: streamSettings.bitrate + Math.floor(Math.random() * 500) - 250,
          fps: streamSettings.fps + Math.floor(Math.random() * 5) - 2,
          droppedFrames: prev.droppedFrames + Math.floor(Math.random() * 3),
          cpuUsage: Math.min(100, Math.max(0, prev.cpuUsage + Math.floor(Math.random() * 20) - 10))
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStreaming, streamSettings]);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1920, height: 1080 }, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsStreaming(true);
      setViewerCount(Math.floor(Math.random() * 50) + 10);
      
      // Add initial chat message
      setChatMessages([{
        id: 1,
        user: 'StreamBot',
        message: 'Welcome to the AI Studio Live Stream! 🎬',
        timestamp: new Date()
      }]);

    } catch (error) {
      console.error('Error starting stream:', error);
      alert('Failed to start stream. Please check camera/microphone permissions.');
    }
  };

  const stopStream = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    setIsStreaming(false);
    setViewerCount(0);
    setStreamStats({
      duration: 0,
      bitrate: 0,
      fps: 0,
      droppedFrames: 0,
      cpuUsage: 0
    });
  };

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Stream Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[--electric-blue] flex items-center">
            <i className="fas fa-broadcast-tower mr-3"></i>Live Streaming Studio
          </h2>
          <div className="flex items-center space-x-4">
            {isStreaming && (
              <div className="flex items-center space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-500 font-semibold">LIVE</span>
              </div>
            )}
            <div className="text-sm text-gray-400">
              Viewers: <span className="text-[--neon-green] font-semibold">{viewerCount}</span>
            </div>
          </div>
        </div>

        {/* Stream Controls */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Video Preview */}
          <div className="space-y-4">
            <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
              {!isStreaming && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                  <div className="text-center">
                    <i className="fas fa-video text-gray-400 text-4xl mb-4"></i>
                    <p className="text-gray-400">Stream Preview</p>
                    <p className="text-sm text-gray-500">Start streaming to see preview</p>
                  </div>
                </div>
              )}
              
              {/* Stream Overlay */}
              {isStreaming && (
                <div className="absolute top-4 left-4 bg-black/80 rounded-lg p-3">
                  <div className="text-[--neon-green] text-sm font-semibold">AI STUDIO LIVE</div>
                  <div className="text-xs text-gray-300">Powered by Ervin Radosavlevici</div>
                </div>
              )}
            </div>

            {/* Stream Actions */}
            <div className="flex space-x-3">
              {!isStreaming ? (
                <button
                  onClick={startStream}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  <i className="fas fa-broadcast-tower mr-2"></i>Start Stream
                </button>
              ) : (
                <button
                  onClick={stopStream}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  <i className="fas fa-stop mr-2"></i>Stop Stream
                </button>
              )}
              
              <button className="bg-[--electric-blue]/20 text-[--electric-blue] py-3 px-6 rounded-xl font-semibold hover:bg-[--electric-blue]/30 transition-colors">
                <i className="fas fa-cog mr-2"></i>Settings
              </button>
              
              <button className="bg-[--hot-pink]/20 text-[--hot-pink] py-3 px-6 rounded-xl font-semibold hover:bg-[--hot-pink]/30 transition-colors">
                <i className="fas fa-record-vinyl mr-2"></i>Record
              </button>
            </div>
          </div>

          {/* Stream Settings */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[--neon-green]">Stream Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
                <select
                  value={streamSettings.platform}
                  onChange={(e) => setStreamSettings(prev => ({ ...prev, platform: e.target.value as any }))}
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                >
                  <option value="youtube">YouTube Live</option>
                  <option value="twitch">Twitch</option>
                  <option value="facebook">Facebook Live</option>
                  <option value="custom">Custom RTMP</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
                  <select
                    value={streamSettings.quality}
                    onChange={(e) => setStreamSettings(prev => ({ ...prev, quality: e.target.value as any }))}
                    className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                  >
                    <option value="720p">720p HD</option>
                    <option value="1080p">1080p Full HD</option>
                    <option value="4K">4K Ultra HD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">FPS</label>
                  <select
                    value={streamSettings.fps}
                    onChange={(e) => setStreamSettings(prev => ({ ...prev, fps: parseInt(e.target.value) }))}
                    className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                  >
                    <option value={24}>24 FPS</option>
                    <option value={30}>30 FPS</option>
                    <option value={60}>60 FPS</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bitrate: {streamSettings.bitrate} kbps
                </label>
                <input
                  type="range"
                  min="1000"
                  max="8000"
                  value={streamSettings.bitrate}
                  onChange={(e) => setStreamSettings(prev => ({ ...prev, bitrate: parseInt(e.target.value) }))}
                  className="w-full accent-[--neon-green]"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={streamSettings.enableChat}
                    onChange={(e) => setStreamSettings(prev => ({ ...prev, enableChat: e.target.checked }))}
                    className="w-4 h-4 accent-[--neon-green]"
                  />
                  <span className="text-gray-300">Enable Live Chat</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={streamSettings.enableDonations}
                    onChange={(e) => setStreamSettings(prev => ({ ...prev, enableDonations: e.target.checked }))}
                    className="w-4 h-4 accent-[--neon-green]"
                  />
                  <span className="text-gray-300">Enable Donations</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Stats and Chat */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Stream Statistics */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
            <i className="fas fa-chart-line mr-3"></i>Stream Statistics
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-[--neon-green]">
                  {formatDuration(streamStats.duration)}
                </div>
                <div className="text-sm text-gray-400">Stream Duration</div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-[--electric-blue]">
                  {streamStats.bitrate}
                </div>
                <div className="text-sm text-gray-400">Bitrate (kbps)</div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-[--hot-pink]">
                  {streamStats.fps}
                </div>
                <div className="text-sm text-gray-400">Current FPS</div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-[--bright-orange]">
                  {streamStats.cpuUsage}%
                </div>
                <div className="text-sm text-gray-400">CPU Usage</div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Dropped Frames</span>
                <span className="text-red-400 font-semibold">{streamStats.droppedFrames}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-red-400 h-2 rounded-full transition-all"
                  style={{ width: `${Math.min(100, (streamStats.droppedFrames / 100) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--electric-blue] mb-4 flex items-center">
            <i className="fas fa-comments mr-3"></i>Live Chat
          </h3>
          
          <div className="space-y-4">
            <div className="bg-black/20 rounded-xl p-4 h-64 overflow-y-auto">
              {chatMessages.length > 0 ? (
                <div className="space-y-3">
                  {chatMessages.map(message => (
                    <div key={message.id} className="flex flex-col">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-[--neon-green]">{message.user}</span>
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 h-full flex items-center justify-center">
                  <div>
                    <i className="fas fa-comments text-3xl mb-2"></i>
                    <p>No chat messages yet</p>
                    <p className="text-xs text-gray-500">Start streaming to see live chat</p>
                  </div>
                </div>
              )}
            </div>

            {streamSettings.enableChat && (
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                />
                <button className="bg-[--neon-green] text-black px-4 py-3 rounded-lg font-semibold hover:bg-[--neon-green]/80 transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
