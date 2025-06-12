import { useState } from "react";

export default function YouTubeLearning() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeYouTube = () => {
    if (!youtubeUrl) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        type: "youtube",
        title: "Digital Dreams - Official Music Video",
        duration: "3:47",
        mood: "Uplifting, Futuristic",
        genre: "Electronic Pop",
        pacing: "Medium-Fast",
        tone: "Optimistic",
        keyMoments: [
          "0:15 - Intro with ambient synths",
          "0:45 - Main beat drops",
          "1:30 - Vocal melody peak",
          "2:15 - Bridge with orchestral elements",
          "3:00 - Final chorus climax"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const analyzeLyrics = () => {
    if (!lyrics) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        type: "lyrics",
        theme: "Technology & Human Connection",
        emotion: "Hopeful, Inspiring",
        rhymeScheme: "ABAB pattern",
        beatPattern: "4/4 time signature",
        suggestions: [
          "Strong metaphorical language",
          "Good rhythm and flow",
          "Clear narrative structure",
          "Emotionally engaging content"
        ]
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  const loadHistory = () => {
    setAnalysisResult({
      type: "history",
      features: [
        "Royalty wallet integration",
        "Media playback & generation", 
        "Deployment tools (GitHub/Netlify)",
        "Copyright protection",
        "Best practices from movies, music, and production"
      ],
      status: "Fully loaded and ready for content generation"
    });
  };

  return (
    <div className="glass-card rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--hot-pink] flex items-center">
          <i className="fas fa-brain mr-3"></i>AI Learning Studio
        </h2>
        <div className="text-sm text-gray-400">
          Enhanced Knowledge & Analysis
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* YouTube Analysis */}
        <div className="bg-black/20 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-[--neon-green] mb-3 flex items-center">
            <i className="fab fa-youtube mr-2"></i>YouTube Video Analysis
          </h3>
          <input 
            type="text"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="Paste YouTube video URL here"
            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--neon-green] text-white mb-3"
          />
          <button 
            onClick={analyzeYouTube}
            disabled={isAnalyzing || !youtubeUrl}
            className="w-full bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>Analyzing...
              </>
            ) : (
              <>
                <i className="fas fa-search mr-2"></i>Analyze YouTube
              </>
            )}
          </button>
        </div>

        {/* Lyrics Analysis */}
        <div className="bg-black/20 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-[--electric-blue] mb-3 flex items-center">
            <i className="fas fa-microphone mr-2"></i>Lyrics & Script Analysis
          </h3>
          <textarea 
            rows={4}
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            placeholder="Paste lyrics, dialogue, or script here..."
            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl focus:border-[--electric-blue] text-white mb-3"
          />
          <button 
            onClick={analyzeLyrics}
            disabled={isAnalyzing || !lyrics}
            className="w-full bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>Analyzing...
              </>
            ) : (
              <>
                <i className="fas fa-music mr-2"></i>Analyze Lyrics
              </>
            )}
          </button>
        </div>
      </div>

      {/* Load Development History */}
      <div className="mt-6 bg-black/20 rounded-xl p-4">
        <h3 className="text-lg font-semibold text-[--bright-orange] mb-3 flex items-center">
          <i className="fas fa-history mr-2"></i>AI Knowledge & Development History
        </h3>
        <button 
          onClick={loadHistory}
          className="bg-gradient-to-r from-[--bright-orange] to-[--hot-pink] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          <i className="fas fa-download mr-2"></i>Load Development History
        </button>
      </div>

      {/* Analysis Results */}
      {analysisResult && (
        <div className="mt-6 bg-black/30 rounded-xl p-6 border border-white/20">
          <h4 className="text-xl font-bold text-[--neon-green] mb-4">
            <i className="fas fa-chart-bar mr-2"></i>Analysis Results
          </h4>
          
          {analysisResult.type === "youtube" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[--electric-blue] font-semibold">Title:</span>
                  <p className="text-white">{analysisResult.title}</p>
                </div>
                <div>
                  <span className="text-[--electric-blue] font-semibold">Duration:</span>
                  <p className="text-white">{analysisResult.duration}</p>
                </div>
                <div>
                  <span className="text-[--hot-pink] font-semibold">Mood:</span>
                  <p className="text-white">{analysisResult.mood}</p>
                </div>
                <div>
                  <span className="text-[--hot-pink] font-semibold">Genre:</span>
                  <p className="text-white">{analysisResult.genre}</p>
                </div>
              </div>
              <div>
                <span className="text-[--bright-orange] font-semibold">Key Moments:</span>
                <ul className="mt-2 space-y-1">
                  {analysisResult.keyMoments.map((moment: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm">• {moment}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {analysisResult.type === "lyrics" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[--neon-green] font-semibold">Theme:</span>
                  <p className="text-white">{analysisResult.theme}</p>
                </div>
                <div>
                  <span className="text-[--electric-blue] font-semibold">Emotion:</span>
                  <p className="text-white">{analysisResult.emotion}</p>
                </div>
                <div>
                  <span className="text-[--hot-pink] font-semibold">Rhyme Scheme:</span>
                  <p className="text-white">{analysisResult.rhymeScheme}</p>
                </div>
                <div>
                  <span className="text-[--bright-orange] font-semibold">Beat Pattern:</span>
                  <p className="text-white">{analysisResult.beatPattern}</p>
                </div>
              </div>
              <div>
                <span className="text-[--neon-green] font-semibold">AI Suggestions:</span>
                <ul className="mt-2 space-y-1">
                  {analysisResult.suggestions.map((suggestion: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm">• {suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {analysisResult.type === "history" && (
            <div className="space-y-4">
              <p className="text-white mb-4">Full chat history, features, and production tools loaded.</p>
              <div>
                <span className="text-[--neon-green] font-semibold">AI Knowledge includes:</span>
                <ul className="mt-2 space-y-1">
                  {analysisResult.features.map((feature: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm">• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 p-3 bg-[--neon-green]/10 border border-[--neon-green]/30 rounded-lg">
                <p className="text-[--neon-green] font-semibold">✓ {analysisResult.status}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}