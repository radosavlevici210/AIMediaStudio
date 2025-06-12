import { useState } from "react";

export function useStudio() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scriptOutput, setScriptOutput] = useState(null);
  const [musicOutput, setMusicOutput] = useState(null);
  const [videoOutput, setVideoOutput] = useState(null);
  const [exportProgress, setExportProgress] = useState(null);

  const showLoading = (messages: string[]) => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    let messageIndex = 0;
    
    const interval = setInterval(() => {
      if (messageIndex < messages.length) {
        setLoadingText(messages[messageIndex]);
        setLoadingProgress((messageIndex + 1) * (100 / messages.length));
        messageIndex++;
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 1500);
  };

  const generateScript = (data: any) => {
    const messages = [
      'Analyzing story structure...',
      'Generating character dialogue...',
      'Optimizing scene transitions...',
      'Finalizing script format...'
    ];
    
    showLoading(messages);
    
    setTimeout(() => {
      setScriptOutput(data);
    }, 6000);
  };

  const generateMusic = (data: any) => {
    const messages = [
      'Analyzing lyrical patterns...',
      'Composing melodic structure...',
      'Arranging instrumental layers...',
      'Mastering audio quality...'
    ];
    
    showLoading(messages);
    
    setTimeout(() => {
      setMusicOutput(data);
    }, 6000);
  };

  const generateVideo = (data: any) => {
    const messages = [
      'Interpreting visual prompt...',
      'Rendering 3D environments...',
      'Applying lighting effects...',
      'Encoding final video...'
    ];
    
    showLoading(messages);
    
    setTimeout(() => {
      setVideoOutput(data);
    }, 6000);
  };

  const startExport = () => {
    setExportProgress({ video: 0, audio: 0, compression: 0 });
    
    const interval = setInterval(() => {
      setExportProgress((prev: any) => {
        if (!prev) return null;
        
        const newProgress = {
          video: Math.min(prev.video + Math.random() * 15, 100),
          audio: Math.min(prev.audio + Math.random() * 15, 100),
          compression: Math.min(prev.compression + Math.random() * 15, 100)
        };
        
        if (newProgress.video >= 100 && newProgress.audio >= 100 && newProgress.compression >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            alert('Export completed successfully! Files are ready for download.');
          }, 1000);
        }
        
        return newProgress;
      });
    }, 500);
  };

  return {
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
  };
}
