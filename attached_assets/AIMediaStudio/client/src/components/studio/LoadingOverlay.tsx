interface LoadingOverlayProps {
  isVisible: boolean;
  text: string;
  progress: number;
}

export default function LoadingOverlay({ isVisible, text, progress }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card rounded-2xl p-8 text-center max-w-md">
        <div className="animate-spin w-16 h-16 border-4 border-[--neon-green] border-t-transparent rounded-full mx-auto mb-4"></div>
        <h3 className="text-xl font-bold text-[--neon-green] mb-2">AI Processing</h3>
        <p className="text-gray-300">{text}</p>
        <div className="w-full bg-white/10 rounded-full h-2 mt-4">
          <div 
            className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full transition-all duration-300" 
            style={{width: `${progress}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
}
