
import { useState, useEffect } from "react";

interface AIModel {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'voice' | 'image' | 'text';
  version: string;
  accuracy: number;
  size: string;
  trainingData: number;
  lastUpdated: Date;
  isActive: boolean;
  performance: {
    speed: number;
    quality: number;
    efficiency: number;
  };
}

interface TrainingJob {
  id: string;
  modelId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  estimatedTime: number;
  datasetSize: number;
  epochs: number;
  learningRate: number;
}

export default function AIModelManager() {
  const [models, setModels] = useState<AIModel[]>([]);
  const [trainingJobs, setTrainingJobs] = useState<TrainingJob[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [showTrainingDialog, setShowTrainingDialog] = useState(false);

  useEffect(() => {
    // Initialize with demo models
    setModels([
      {
        id: '1',
        name: 'CinematicPro V3.2',
        type: 'video',
        version: '3.2.1',
        accuracy: 94.7,
        size: '2.3 GB',
        trainingData: 1500000,
        lastUpdated: new Date(),
        isActive: true,
        performance: { speed: 89, quality: 96, efficiency: 92 }
      },
      {
        id: '2',
        name: 'AudioMaster Pro',
        type: 'audio',
        version: '2.8.4',
        accuracy: 91.3,
        size: '1.8 GB',
        trainingData: 850000,
        lastUpdated: new Date(),
        isActive: true,
        performance: { speed: 94, quality: 89, efficiency: 88 }
      },
      {
        id: '3',
        name: 'VoiceClone Advanced',
        type: 'voice',
        version: '4.1.0',
        accuracy: 97.2,
        size: '3.1 GB',
        trainingData: 2200000,
        lastUpdated: new Date(),
        isActive: false,
        performance: { speed: 76, quality: 98, efficiency: 85 }
      },
      {
        id: '4',
        name: 'VisualFX Engine',
        type: 'image',
        version: '1.5.2',
        accuracy: 88.9,
        size: '4.2 GB',
        trainingData: 980000,
        lastUpdated: new Date(),
        isActive: true,
        performance: { speed: 82, quality: 91, efficiency: 79 }
      }
    ]);

    setTrainingJobs([
      {
        id: '1',
        modelId: '3',
        status: 'running',
        progress: 67,
        estimatedTime: 45,
        datasetSize: 500000,
        epochs: 100,
        learningRate: 0.001
      }
    ]);
  }, []);

  const getModelTypeColor = (type: string) => {
    switch (type) {
      case 'video': return '#0099ff';
      case 'audio': return '#00ff88';
      case 'voice': return '#ff0080';
      case 'image': return '#ffaa00';
      case 'text': return '#8000ff';
      default: return '#666';
    }
  };

  const getModelTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return 'fa-video';
      case 'audio': return 'fa-music';
      case 'voice': return 'fa-microphone';
      case 'image': return 'fa-image';
      case 'text': return 'fa-font';
      default: return 'fa-brain';
    }
  };

  const toggleModelStatus = (modelId: string) => {
    setModels(prev => prev.map(model => 
      model.id === modelId 
        ? { ...model, isActive: !model.isActive }
        : model
    ));
  };

  const startTraining = (modelId: string) => {
    const newJob: TrainingJob = {
      id: Date.now().toString(),
      modelId,
      status: 'running',
      progress: 0,
      estimatedTime: 120,
      datasetSize: 1000000,
      epochs: 50,
      learningRate: 0.001
    };
    
    setTrainingJobs(prev => [...prev, newJob]);
    setShowTrainingDialog(false);

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingJobs(prev => prev.map(job => 
        job.id === newJob.id && job.progress < 100
          ? { 
              ...job, 
              progress: Math.min(100, job.progress + Math.random() * 5),
              estimatedTime: Math.max(0, job.estimatedTime - 2)
            }
          : job
      ));
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
      setTrainingJobs(prev => prev.map(job => 
        job.id === newJob.id
          ? { ...job, status: 'completed' as const, progress: 100, estimatedTime: 0 }
          : job
      ));
    }, 20000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[--neon-green] flex items-center">
            <i className="fas fa-brain mr-3"></i>AI Model Manager
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowTrainingDialog(true)}
              className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <i className="fas fa-plus mr-2"></i>Train New Model
            </button>
            <div className="text-sm text-gray-400">
              {models.filter(m => m.isActive).length} active models
            </div>
          </div>
        </div>

        {/* Model Overview Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[--electric-blue]/20 to-[--hot-pink]/20 rounded-xl p-4 border border-[--electric-blue]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-brain text-[--electric-blue] text-xl"></i>
              <span className="text-xs text-gray-400">TOTAL MODELS</span>
            </div>
            <div className="text-2xl font-bold text-white">{models.length}</div>
            <div className="text-xs text-[--electric-blue]">deployed</div>
          </div>

          <div className="bg-gradient-to-br from-[--neon-green]/20 to-[--electric-blue]/20 rounded-xl p-4 border border-[--neon-green]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-check-circle text-[--neon-green] text-xl"></i>
              <span className="text-xs text-gray-400">ACTIVE</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {models.filter(m => m.isActive).length}
            </div>
            <div className="text-xs text-[--neon-green]">running</div>
          </div>

          <div className="bg-gradient-to-br from-[--hot-pink]/20 to-[--bright-orange]/20 rounded-xl p-4 border border-[--hot-pink]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-graduation-cap text-[--hot-pink] text-xl"></i>
              <span className="text-xs text-gray-400">TRAINING</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {trainingJobs.filter(j => j.status === 'running').length}
            </div>
            <div className="text-xs text-[--hot-pink]">in progress</div>
          </div>

          <div className="bg-gradient-to-br from-[--bright-orange]/20 to-[--neon-green]/20 rounded-xl p-4 border border-[--bright-orange]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-chart-line text-[--bright-orange] text-xl"></i>
              <span className="text-xs text-gray-400">AVG ACCURACY</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {(models.reduce((sum, m) => sum + m.accuracy, 0) / models.length).toFixed(1)}%
            </div>
            <div className="text-xs text-[--bright-orange]">performance</div>
          </div>
        </div>
      </div>

      {/* Active Training Jobs */}
      {trainingJobs.filter(job => job.status === 'running').length > 0 && (
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
            <i className="fas fa-graduation-cap mr-3"></i>Active Training Jobs
          </h3>
          
          <div className="space-y-4">
            {trainingJobs.filter(job => job.status === 'running').map(job => {
              const model = models.find(m => m.id === job.modelId);
              return (
                <div key={job.id} className="bg-black/20 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <i className={`fas ${getModelTypeIcon(model?.type || 'text')} text-[--neon-green]`}></i>
                      <span className="font-semibold text-white">{model?.name || 'Unknown Model'}</span>
                      <span className="px-2 py-1 bg-[--hot-pink]/20 text-[--hot-pink] rounded-full text-xs">
                        Training
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{job.progress.toFixed(1)}%</div>
                      <div className="text-xs text-gray-400">ETA: {job.estimatedTime}min</div>
                    </div>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[--hot-pink] to-[--electric-blue] transition-all"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-xs text-gray-400">
                    <div>Dataset: {(job.datasetSize / 1000000).toFixed(1)}M samples</div>
                    <div>Epochs: {job.epochs}</div>
                    <div>Learning Rate: {job.learningRate}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Model Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {models.map(model => (
          <div key={model.id} className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${getModelTypeColor(model.type)}20` }}
                >
                  <i 
                    className={`fas ${getModelTypeIcon(model.type)}`}
                    style={{ color: getModelTypeColor(model.type) }}
                  ></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{model.name}</h3>
                  <p className="text-sm text-gray-400">v{model.version} • {model.size}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={model.isActive}
                    onChange={() => toggleModelStatus(model.id)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--neon-green]"></div>
                </label>
              </div>
            </div>

            {/* Model Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[--neon-green]">{model.accuracy}%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[--electric-blue]">{(model.trainingData / 1000000).toFixed(1)}M</div>
                <div className="text-xs text-gray-400">Training Data</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[--hot-pink]">{model.isActive ? 'LIVE' : 'OFF'}</div>
                <div className="text-xs text-gray-400">Status</div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Speed</span>
                  <span className="text-white">{model.performance.speed}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[--neon-green]"
                    style={{ width: `${model.performance.speed}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Quality</span>
                  <span className="text-white">{model.performance.quality}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[--electric-blue]"
                    style={{ width: `${model.performance.quality}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-white">{model.performance.efficiency}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[--hot-pink]"
                    style={{ width: `${model.performance.efficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setSelectedModel(model.id);
                  setShowTrainingDialog(true);
                }}
                className="flex-1 bg-[--electric-blue]/20 text-[--electric-blue] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[--electric-blue]/30 transition-colors"
              >
                <i className="fas fa-graduation-cap mr-2"></i>Retrain
              </button>
              <button className="flex-1 bg-[--hot-pink]/20 text-[--hot-pink] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[--hot-pink]/30 transition-colors">
                <i className="fas fa-download mr-2"></i>Export
              </button>
              <button className="bg-red-500/20 text-red-400 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-500/30 transition-colors">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Training Dialog */}
      {showTrainingDialog && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="glass-card rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-[--neon-green] mb-6">Start Training</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                >
                  <option value="">Select a model</option>
                  {models.map(model => (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Epochs</label>
                  <input
                    type="number"
                    defaultValue={50}
                    className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Learning Rate</label>
                  <input
                    type="number"
                    step="0.001"
                    defaultValue={0.001}
                    className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Dataset Size</label>
                <select className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:border-[--neon-green] focus:outline-none">
                  <option value="500000">500K samples</option>
                  <option value="1000000">1M samples</option>
                  <option value="2000000">2M samples</option>
                  <option value="5000000">5M samples</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowTrainingDialog(false)}
                className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => selectedModel && startTraining(selectedModel)}
                disabled={!selectedModel}
                className="flex-1 bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
              >
                Start Training
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
