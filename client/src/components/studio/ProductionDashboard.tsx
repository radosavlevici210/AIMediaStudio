import { useState } from "react";

export default function ProductionDashboard() {
  const [activeMetric, setActiveMetric] = useState("overview");

  const productionStats = {
    overview: {
      totalProjects: 247,
      activeUsers: 1834,
      contentGenerated: "15.7TB",
      uptime: "99.98%"
    },
    performance: {
      avgGenerationTime: "3.2s",
      apiResponseTime: "145ms",
      successRate: "99.7%",
      errorRate: "0.3%"
    },
    usage: {
      scriptsGenerated: 892,
      tracksComposed: 1456,
      videosRendered: 634,
      deploymentsActive: 89
    }
  };

  const recentActivity = [
    { id: 1, action: "Video Generated", user: "Producer_Alex", time: "2 minutes ago", status: "completed" },
    { id: 2, action: "Script Created", user: "Director_Sam", time: "5 minutes ago", status: "completed" },
    { id: 3, action: "Music Composed", user: "Composer_Lin", time: "8 minutes ago", status: "completed" },
    { id: 4, action: "Project Deployed", user: "Studio_Pro", time: "12 minutes ago", status: "live" },
    { id: 5, action: "Audio Mixed", user: "Engineer_Jay", time: "15 minutes ago", status: "processing" }
  ];

  return (
    <div className="space-y-6">
      {/* Production Status Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-[--neon-green] flex items-center">
              <i className="fas fa-tachometer-alt mr-3"></i>Production Dashboard
            </h2>
            <p className="text-gray-300 mt-2">AI Studio Pro+ Live Monitoring & Analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[--neon-green] rounded-full animate-pulse"></div>
              <span className="text-[--neon-green] font-semibold">LIVE</span>
            </div>
            <span className="text-sm text-gray-400">Build: PROD-2025.01.12</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[--neon-green]/20 to-[--electric-blue]/20 rounded-xl p-4 border border-[--neon-green]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-project-diagram text-[--neon-green] text-xl"></i>
              <span className="text-xs text-gray-400">PROJECTS</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.totalProjects}</div>
            <div className="text-xs text-[--neon-green]">Total Active</div>
          </div>

          <div className="bg-gradient-to-br from-[--electric-blue]/20 to-[--hot-pink]/20 rounded-xl p-4 border border-[--electric-blue]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-users text-[--electric-blue] text-xl"></i>
              <span className="text-xs text-gray-400">USERS</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.activeUsers}</div>
            <div className="text-xs text-[--electric-blue]">Online Now</div>
          </div>

          <div className="bg-gradient-to-br from-[--hot-pink]/20 to-[--bright-orange]/20 rounded-xl p-4 border border-[--hot-pink]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-database text-[--hot-pink] text-xl"></i>
              <span className="text-xs text-gray-400">CONTENT</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.contentGenerated}</div>
            <div className="text-xs text-[--hot-pink]">Generated</div>
          </div>

          <div className="bg-gradient-to-br from-[--bright-orange]/20 to-[--neon-green]/20 rounded-xl p-4 border border-[--bright-orange]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-heartbeat text-[--bright-orange] text-xl"></i>
              <span className="text-xs text-gray-400">UPTIME</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.uptime}</div>
            <div className="text-xs text-[--bright-orange]">Last 30 days</div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
          <i className="fas fa-chart-line mr-3"></i>Performance Metrics
        </h3>
        
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Generation Speed</span>
              <span className="text-[--neon-green] font-semibold">{productionStats.performance.avgGenerationTime}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full" style={{width: "85%"}}></div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">API Response</span>
              <span className="text-[--electric-blue] font-semibold">{productionStats.performance.apiResponseTime}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full" style={{width: "92%"}}></div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Success Rate</span>
              <span className="text-[--hot-pink] font-semibold">{productionStats.performance.successRate}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-[--hot-pink] to-[--bright-orange] h-2 rounded-full" style={{width: "98%"}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--electric-blue] mb-4 flex items-center">
          <i className="fas fa-chart-bar mr-3"></i>Usage Statistics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[--neon-green]">{productionStats.usage.scriptsGenerated}</div>
            <div className="text-sm text-gray-400">Scripts Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[--electric-blue]">{productionStats.usage.tracksComposed}</div>
            <div className="text-sm text-gray-400">Tracks Composed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[--hot-pink]">{productionStats.usage.videosRendered}</div>
            <div className="text-sm text-gray-400">Videos Rendered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[--bright-orange]">{productionStats.usage.deploymentsActive}</div>
            <div className="text-sm text-gray-400">Active Deployments</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--bright-orange] mb-4 flex items-center">
          <i className="fas fa-clock mr-3"></i>Recent Activity
        </h3>
        
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-[--neon-green]' :
                  activity.status === 'live' ? 'bg-[--electric-blue]' :
                  'bg-[--bright-orange]'
                } animate-pulse`}></div>
                <span className="text-white">{activity.action}</span>
                <span className="text-gray-400">by {activity.user}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* System Health */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
          <i className="fas fa-shield-alt mr-3"></i>System Health
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">CPU Usage</span>
              <span className="text-[--neon-green]">23%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[--neon-green] h-2 rounded-full" style={{width: "23%"}}></div>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Memory</span>
              <span className="text-[--electric-blue]">67%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[--electric-blue] h-2 rounded-full" style={{width: "67%"}}></div>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Storage</span>
              <span className="text-[--hot-pink]">45%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[--hot-pink] h-2 rounded-full" style={{width: "45%"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="space-y-6">
      {/* Production Status Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-[--neon-green] flex items-center">
              <i className="fas fa-tachometer-alt mr-3"></i>Production Dashboard
            </h2>
            <p className="text-gray-300 mt-2">AI Studio Pro+ Live Monitoring & Analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[--neon-green] rounded-full animate-pulse"></div>
              <span className="text-[--neon-green] font-semibold">LIVE</span>
            </div>
            <span className="text-sm text-gray-400">Build: PROD-2025.01.12</span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[--electric-blue]/20 to-[--hot-pink]/20 rounded-xl p-4 border border-[--electric-blue]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-project-diagram text-[--electric-blue] text-xl"></i>
              <span className="text-xs text-gray-400">PROJECTS</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.totalProjects}</div>
            <div className="text-xs text-[--electric-blue]">+23 this week</div>
          </div>

          <div className="bg-gradient-to-br from-[--neon-green]/20 to-[--electric-blue]/20 rounded-xl p-4 border border-[--neon-green]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-users text-[--neon-green] text-xl"></i>
              <span className="text-xs text-gray-400">USERS</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.activeUsers}</div>
            <div className="text-xs text-[--neon-green]">+156 today</div>
          </div>

          <div className="bg-gradient-to-br from-[--hot-pink]/20 to-[--bright-orange]/20 rounded-xl p-4 border border-[--hot-pink]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-database text-[--hot-pink] text-xl"></i>
              <span className="text-xs text-gray-400">CONTENT</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.contentGenerated}</div>
            <div className="text-xs text-[--hot-pink]">Generated</div>
          </div>

          <div className="bg-gradient-to-br from-[--bright-orange]/20 to-[--neon-green]/20 rounded-xl p-4 border border-[--bright-orange]/30">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-heartbeat text-[--bright-orange] text-xl"></i>
              <span className="text-xs text-gray-400">UPTIME</span>
            </div>
            <div className="text-2xl font-bold text-white">{productionStats.overview.uptime}</div>
            <div className="text-xs text-[--bright-orange]">Last 30 days</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Real-time Activity Feed */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--electric-blue] mb-4 flex items-center">
            <i className="fas fa-stream mr-3"></i>Live Activity Feed
          </h3>
          
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between bg-black/20 rounded-xl p-3 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'completed' ? 'bg-[--neon-green]' :
                    activity.status === 'live' ? 'bg-[--electric-blue] animate-pulse' :
                    'bg-[--bright-orange] animate-spin'
                  }`}></div>
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-400">by {activity.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{activity.time}</p>
                  <p className={`text-xs font-semibold ${
                    activity.status === 'completed' ? 'text-[--neon-green]' :
                    activity.status === 'live' ? 'text-[--electric-blue]' :
                    'text-[--bright-orange]'
                  }`}>{activity.status.toUpperCase()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[--hot-pink] mb-4 flex items-center">
            <i className="fas fa-chart-line mr-3"></i>Performance Metrics
          </h3>
          
          <div className="space-y-4">
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Generation Speed</span>
                <span className="text-[--neon-green] font-semibold">{productionStats.performance.avgGenerationTime}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">API Response</span>
                <span className="text-[--electric-blue] font-semibold">{productionStats.performance.apiResponseTime}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--electric-blue] to-[--hot-pink] h-2 rounded-full" style={{width: "92%"}}></div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Success Rate</span>
                <span className="text-[--neon-green] font-semibold">{productionStats.performance.successRate}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[--neon-green] to-[--bright-orange] h-2 rounded-full" style={{width: "99.7%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[--bright-orange] mb-4 flex items-center">
          <i className="fas fa-server mr-3"></i>System Status & Health
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-xl p-4 border border-[--neon-green]/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300">AI Engine</span>
              <span className="px-2 py-1 bg-[--neon-green]/20 text-[--neon-green] rounded-full text-xs">OPTIMAL</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>CPU Usage:</span>
                <span className="text-[--neon-green]">34%</span>
              </div>
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className="text-[--electric-blue]">2.1GB</span>
              </div>
              <div className="flex justify-between">
                <span>GPU Util:</span>
                <span className="text-[--hot-pink]">67%</span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4 border border-[--electric-blue]/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300">Database</span>
              <span className="px-2 py-1 bg-[--electric-blue]/20 text-[--electric-blue] rounded-full text-xs">HEALTHY</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Connections:</span>
                <span className="text-[--electric-blue]">247/500</span>
              </div>
              <div className="flex justify-between">
                <span>Storage:</span>
                <span className="text-[--neon-green]">3.2TB</span>
              </div>
              <div className="flex justify-between">
                <span>Queries/sec:</span>
                <span className="text-[--hot-pink]">1,234</span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4 border border-[--hot-pink]/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300">CDN & Storage</span>
              <span className="px-2 py-1 bg-[--hot-pink]/20 text-[--hot-pink] rounded-full text-xs">ACTIVE</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Bandwidth:</span>
                <span className="text-[--bright-orange]">47.2 Mbps</span>
              </div>
              <div className="flex justify-between">
                <span>Cache Hit:</span>
                <span className="text-[--neon-green]">94.6%</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-[--electric-blue]">23ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}