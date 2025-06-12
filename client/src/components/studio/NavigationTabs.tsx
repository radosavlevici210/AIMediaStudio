interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const tabs = [
    { id: "script", label: "Script Studio", icon: "fas fa-film" },
    { id: "music", label: "Music Lab", icon: "fas fa-music" },
    { id: "video", label: "Video Generator", icon: "fas fa-video" },
    { id: "export", label: "Export Suite", icon: "fas fa-download" }
  ];

  return (
    <div className="flex space-x-2 mb-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:scale-105 transition-transform ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-[--neon-green] to-[--electric-blue] text-black"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          <i className={tab.icon}></i>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
