
import { useState, useEffect } from "react";

interface QueueItem {
  id: string;
  type: 'movie' | 'music' | 'animation' | 'voice';
  title: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  estimatedTime: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Date;
  duration?: number;
  quality?: string;
}

export default function ProductionQueue() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    // Initialize with some demo items
    setQueue([
      {
        id: '1',
        type: 'movie',
        title: 'AI Revolution Epic',
        status: 'processing',
        progress: 65,
        estimatedTime: 18,
        priority: 'high',
        createdAt: new Date(),
        duration: 120,
        quality: '4K'
      },
      {
        id: '2',
        type: 'music',
        title: 'Digital Dreams Album',
        status: 'pending',
        progress: 0,
        estimatedTime: 12,
        priority: 'medium',
        createdAt: new Date(),
        duration: 45
      },
      {
        id: '3',
        type: 'animation',
        title: 'Character Showcase',
        status: 'completed',
        progress: 100,
        estimatedTime: 0,
        priority: 'low',
        createdAt: new Date(),
        duration: 15
      }
    ]);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return '#ffaa00';
      case 'processing': return '#0099ff';
      case 'completed': return '#00ff88';
      case 'failed': return '#ff6b6b';
      default: return '#666';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return '#ff0080';
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffaa00';
      case 'low': return '#00ff88';
      default: return '#666';
    }
  };

  const startProcessing = () => {
    setIsProcessing(true);
    // Simulate processing
    const interval = setInterval(() => {
      setQueue(prev => prev.map(item => {
        if (item.status === 'processing' && item.progress < 100) {
          return { ...item, progress: Math.min(100, item.progress + Math.random() * 5) };
        }
        return item;
      }));
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsProcessing(false);
    }, 10000);
  };

  const reorderQueue = (fromIndex: number, toIndex: number) => {
    const newQueue = [...queue];
    const [removed] = newQueue.splice(fromIndex, 1);
    newQueue.splice(toIndex, 0, removed);
    setQueue(newQueue);
  };

  return (
    <div className="space-y-6">
      {/* Queue Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[--neon-green] flex items-center">
            <i className="fas fa-tasks mr-3"></i>Production Queue
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={startProcessing}
              disabled={isProcessing}
              className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>Processing...
                </>
              ) : (
                <>
                  <i className="fas fa-play mr-2"></i>Start Queue
                </>
              )}
            </button>
            <div className="text-sm text-gray-400">
              {queue.filter(item => item.status === 'processing').length} processing
            </div>
          </div>
        </div>

        {/* Queue Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[--electric-blue]/20 to-[--hot-pink]/20 rounded-xl p-4 border border-[--electric-blue]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-clock text-[--electric-blue] text-xl"></i>
              <span className="text-xs text-gray-400">TOTAL QUEUE</span>
            </div>
            <div className="text-2xl font-bold text-white">{queue.length}</div>
            <div className="text-xs text-[--electric-blue]">items</div>
          </div>

          <div className="bg-gradient-to-br from-[--neon-green]/20 to-[--electric-blue]/20 rounded-xl p-4 border border-[--neon-green]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-spinner text-[--neon-green] text-xl"></i>
              <span className="text-xs text-gray-400">PROCESSING</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {queue.filter(item => item.status === 'processing').length}
            </div>
            <div className="text-xs text-[--neon-green]">active</div>
          </div>

          <div className="bg-gradient-to-br from-[--hot-pink]/20 to-[--bright-orange]/20 rounded-xl p-4 border border-[--hot-pink]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-check-circle text-[--hot-pink] text-xl"></i>
              <span className="text-xs text-gray-400">COMPLETED</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {queue.filter(item => item.status === 'completed').length}
            </div>
            <div className="text-xs text-[--hot-pink]">finished</div>
          </div>

          <div className="bg-gradient-to-br from-[--bright-orange]/20 to-[--neon-green]/20 rounded-xl p-4 border border-[--bright-orange]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-hourglass-half text-[--bright-orange] text-xl"></i>
              <span className="text-xs text-gray-400">EST. TIME</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {queue.reduce((sum, item) => sum + item.estimatedTime, 0)}m
            </div>
            <div className="text-xs text-[--bright-orange]">remaining</div>
          </div>
        </div>
      </div>

      {/* Queue Items */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--electric-blue] mb-4 flex items-center">
          <i className="fas fa-list mr-3"></i>Queue Items
        </h3>

        <div className="space-y-4">
          {queue.map((item, index) => (
            <div
              key={item.id}
              className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-[--neon-green]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <i
                      className={`fas ${
                        item.type === 'movie' ? 'fa-film' :
                        item.type === 'music' ? 'fa-music' :
                        item.type === 'animation' ? 'fa-magic' :
                        'fa-microphone'
                      } text-[--neon-green]`}
                    ></i>
                    <span className="font-semibold text-white">{item.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: `${getPriorityColor(item.priority)}20`,
                        color: getPriorityColor(item.priority),
                        border: `1px solid ${getPriorityColor(item.priority)}50`
                      }}
                    >
                      {item.priority}
                    </span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: `${getStatusColor(item.status)}20`,
                        color: getStatusColor(item.status),
                        border: `1px solid ${getStatusColor(item.status)}50`
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    {item.duration && `${item.duration}min`}
                    {item.quality && ` • ${item.quality}`}
                  </div>
                  <div className="text-xs text-gray-500">
                    ETA: {item.estimatedTime}min
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${item.progress}%`,
                    background: `linear-gradient(90deg, ${getStatusColor(item.status)}, ${getStatusColor(item.status)}80)`
                  }}
                ></div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  Created: {item.createdAt.toLocaleTimeString()}
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-[--electric-blue]/20 text-[--electric-blue] rounded text-xs hover:bg-[--electric-blue]/30 transition-colors">
                    <i className="fas fa-eye mr-1"></i>View
                  </button>
                  <button className="px-3 py-1 bg-[--hot-pink]/20 text-[--hot-pink] rounded text-xs hover:bg-[--hot-pink]/30 transition-colors">
                    <i className="fas fa-edit mr-1"></i>Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30 transition-colors">
                    <i className="fas fa-trash mr-1"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {queue.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-inbox text-gray-400 text-4xl mb-4"></i>
            <p className="text-gray-400">No items in production queue</p>
            <p className="text-sm text-gray-500 mt-2">
              Create content to see it appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
