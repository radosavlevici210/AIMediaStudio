import { useState } from "react";

export default function RoyaltyWallet() {
  const [walletAddress] = useState("0xE8aF3c1A40A3420C43bb61994069507Ec4195405");
  const [earnings] = useState({
    total: 2847.52,
    monthly: 412.18,
    pending: 156.34
  });

  return (
    <div className="glass-card rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--bright-orange] flex items-center">
          <i className="fas fa-wallet mr-3"></i>Royalty Wallet
        </h2>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-[--neon-green] rounded-full animate-pulse"></div>
          <span className="text-[--neon-green]">Connected</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-black/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[--neon-green]">${earnings.total}</div>
          <div className="text-sm text-gray-400">Total Earnings</div>
        </div>
        <div className="bg-black/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[--electric-blue]">${earnings.monthly}</div>
          <div className="text-sm text-gray-400">This Month</div>
        </div>
        <div className="bg-black/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[--bright-orange]">${earnings.pending}</div>
          <div className="text-sm text-gray-400">Pending</div>
        </div>
      </div>

      <div className="bg-black/30 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Wallet Address</span>
          <button className="text-[--neon-green] hover:text-[--neon-green]/80 text-sm">
            <i className="fas fa-copy mr-1"></i>Copy
          </button>
        </div>
        <div className="font-mono text-sm bg-black/50 rounded-lg p-3 break-all">
          {walletAddress}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button className="bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
          <i className="fas fa-sync-alt mr-2"></i>Sync Earnings
        </button>
        <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
          <i className="fas fa-history mr-2"></i>Transaction History
        </button>
      </div>
    </div>
  );
}