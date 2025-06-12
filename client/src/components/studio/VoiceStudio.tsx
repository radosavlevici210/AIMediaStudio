
import { useState } from "react";

export default function VoiceStudio() {
  const [voiceInput, setVoiceInput] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);

  const voiceOptions = [
    { id: "professional", name: "Professional Male", description: "Deep, authoritative voice" },
    { id: "female-warm", name: "Warm Female", description: "Friendly and approachable" },
    { id: "narrator", name: "Documentary Narrator", description: "Clear and engaging" },
    { id: "dramatic", name: "Dramatic Actor", description: "Expressive and powerful" },
    { id: "child", name: "Child Voice", description: "Young and playful" },
    { id: "elderly", name: "Elderly Narrator", description: "Wise and experienced" }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI voice generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-[--electric-blue] mb-6 flex items-center">
          <i className="fas fa-microphone mr-3"></i>AI Voice Studio
        </h2>

        {/* Voice Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-300 mb-2">
              Voice Script
            </label>
            <textarea
              value={voiceInput}
              onChange={(e) => setVoiceInput(e.target.value)}
              className="w-full h-40 p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[--electric-blue]/50"
              placeholder="Enter the text you want to convert to speech..."
            />
          </div>

          {/* Voice Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-300 mb-4">
              Select Voice Style
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {voiceOptions.map((voice) => (
                <div
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedVoice === voice.id
                      ? 'border-[--electric-blue] bg-[--electric-blue]/20'
                      : 'border-white/20 bg-black/20 hover:border-[--electric-blue]/50'
                  }`}
                >
                  <h3 className="font-semibold text-white mb-2">{voice.name}</h3>
                  <p className="text-sm text-gray-400">{voice.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Speed</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                defaultValue="1"
                className="w-full accent-[--electric-blue]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Pitch</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                defaultValue="1"
                className="w-full accent-[--hot-pink]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Volume</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="0.8"
                className="w-full accent-[--neon-green]"
              />
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!voiceInput.trim() || isGenerating}
            className="w-full py-4 bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] rounded-xl font-semibold text-white hover:from-[--hot-pink] hover:to-[--electric-blue] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-spinner animate-spin mr-2"></i>
                Generating Voice...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <i className="fas fa-microphone mr-2"></i>
                Generate Voice
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Output Section */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--neon-green] mb-4 flex items-center">
          <i className="fas fa-volume-up mr-3"></i>Generated Audio
        </h3>
        
        <div className="bg-black/30 rounded-xl p-6 text-center">
          <i className="fas fa-headphones text-4xl text-gray-500 mb-4"></i>
          <p className="text-gray-400">Your generated voice audio will appear here</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-[--neon-green]/20 border border-[--neon-green]/50 rounded-lg text-[--neon-green] hover:bg-[--neon-green]/30 transition-colors">
              <i className="fas fa-play mr-2"></i>Play
            </button>
            <button className="px-4 py-2 bg-[--electric-blue]/20 border border-[--electric-blue]/50 rounded-lg text-[--electric-blue] hover:bg-[--electric-blue]/30 transition-colors">
              <i className="fas fa-download mr-2"></i>Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
