import { useState } from "react";
import MainHeader from "@/components/studio/MainHeader";
import NavigationTabs from "@/components/studio/NavigationTabs";
import ScriptStudio from "@/components/studio/ScriptStudio";
import MusicLab from "@/components/studio/MusicLab";
import VideoGenerator from "@/components/studio/VideoGenerator";
import YouTubeLearning from "@/components/studio/YouTubeLearning";
import MediaLibrary from "@/components/studio/MediaLibrary";
import RoyaltyWallet from "@/components/studio/RoyaltyWallet";
import ProductionDashboard from "@/components/studio/ProductionDashboard";
import ExportSuite from "@/components/studio/ExportSuite";
import LoadingOverlay from "@/components/studio/LoadingOverlay";
import CopyrightFooter from "@/components/studio/CopyrightFooter";
import { useStudio } from "@/hooks/useStudio";
import DeploymentCenter from "../components/studio/DeploymentCenter";
import ProductionQueue from "../components/studio/ProductionQueue";
import LiveStreaming from "../components/studio/LiveStreaming";
import AIModelManager from "../components/studio/AIModelManager";

export default function Studio() {
  const [activeTab, setActiveTab] = useState("script");
  const {
    isLoading,
    loadingText,
    loadingProgress,
    scriptOutput,
    musicOutput,
    videoOutput,
    exportProgress,
    generateScript,
    generateMusic,
    generateVideo,
    startExport
  } = useStudio();

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'script', label: 'Script Studio', icon: 'fas fa-file-alt' },
    { id: 'video', label: 'Video Generator', icon: 'fas fa-video' },
    { id: 'music', label: 'Music Lab', icon: 'fas fa-music' },
    { id: 'voice', label: 'Voice Studio', icon: 'fas fa-microphone' },
    { id: 'learning', label: 'YouTube Learning', icon: 'fas fa-graduation-cap' },
    { id: 'media', label: 'Media Library', icon: 'fas fa-folder' },
    { id: 'queue', label: 'Production Queue', icon: 'fas fa-tasks' },
    { id: 'streaming', label: 'Live Streaming', icon: 'fas fa-broadcast-tower' },
    { id: 'models', label: 'AI Models', icon: 'fas fa-brain' },
    { id: 'wallet', label: 'Royalty Wallet', icon: 'fas fa-wallet' },
    { id: 'export', label: 'Export Suite', icon: 'fas fa-download' },
    { id: 'deploy', label: 'Deploy', icon: 'fas fa-rocket' }
  ];

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[--neon-green] via-[--electric-blue] to-[--hot-pink] p-4 text-center text-black font-bold text-lg animate-neon-flicker">
        <i className="fas fa-crown"></i> AI PRODUCTION STUDIO PRO+ - ENHANCED PROFESSIONAL PLATFORM | OWNER: ERVIN REMUS RADOSAVLEVICI <i className="fas fa-shield-alt"></i>
      </div>

      {/* Status Bar */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[--neon-green] rounded-full animate-pulse"></div>
              <span>AI Engine: Online</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[--electric-blue] rounded-full animate-pulse"></div>
              <span>GPU Acceleration: Active</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[--bright-orange] rounded-full animate-pulse"></div>
              <span>Cloud Storage: Synced</span>
            </span>
          </div>
          <div className="text-[--neon-green]">Production Mode: Professional</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <MainHeader />
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "dashboard" && <ProductionDashboard />}

        {activeTab === "script" && (
          <ScriptStudio 
            onGenerate={generateScript}
            output={scriptOutput}
          />
        )}

        {activeTab === "music" && (
          <MusicLab 
            onGenerate={generateMusic}
            output={musicOutput}
          />
        )}

        {activeTab === "video" && (
          <VideoGenerator 
            onGenerate={generateVideo}
            output={videoOutput}
          />
        )}

        {activeTab === "learning" && <YouTubeLearning />}

        {activeTab === "media" && <MediaLibrary />}
        {activeTab === 'queue' && <ProductionQueue />}
        {activeTab === 'streaming' && <LiveStreaming />}
        {activeTab === 'models' && <AIModelManager />}
        {activeTab === "wallet" && <RoyaltyWallet />}
        {activeTab === "export" && (
          <ExportSuite 
            onStartExport={startExport}
            exportProgress={exportProgress}
          />
        )}
        {activeTab === "deploy" && <DeploymentCenter />}
      </div>

      <CopyrightFooter />

      <LoadingOverlay 
        isVisible={isLoading}
        text={loadingText}
        progress={loadingProgress}
      />
    </div>
  );
}