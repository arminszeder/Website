import React, { useState } from 'react';
import { 
  Bot, 
  Zap, 
  LayoutDashboard, 
  FileText, 
  CheckCircle2, 
  BarChart3, 
  Database, 
  MessageSquare, 
  Users, 
  Mail, 
  ArrowRight,
  TrendingUp,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';

const tabs = [
  {
    id: 'consulting',
    title: 'AI Consulting',
    description: 'We identify exactly where you are losing time.',
    icon: FileText
  },
  {
    id: 'workflow',
    title: 'AI Automation',
    description: 'We make your apps talk to each other automatically.',
    icon: Zap
  },
  {
    id: 'apps',
    title: 'Custom Application',
    description: 'We build custom dashboards to track your growth.',
    icon: LayoutDashboard
  }
];

export const HeroTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto mt-16 relative z-20">
      {/* Bright Red Glow Underneath */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-red/30 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute -inset-[2px] bg-gradient-to-b from-brand-red/40 to-transparent opacity-30 blur-2xl rounded-[2.5rem] -z-10 pointer-events-none"></div>

      {/* Glassy Border Wrapper */}
      <div className="relative p-2.5 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_100px_-20px_rgba(216,57,57,0.3)] ring-1 ring-white/60">
        
        {/* Inner Content Container */}
        <div className="w-full bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[500px] lg:min-h-[450px] relative z-20">
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-[320px] bg-gray-50 border-r border-gray-100 p-4 md:p-6 flex flex-col gap-3 relative z-20 shrink-0">
            <div className="mb-2 lg:mb-4">
               <h3 className="text-lg font-bold text-brand-black mb-1">Your Business, Automated</h3>
               <p className="text-gray-500 text-xs">See exactly how much efficiency we unlock for you.</p>
            </div>
            
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`text-left p-3 md:p-4 rounded-xl transition-all duration-300 border relative overflow-hidden group ${
                    isActive 
                      ? 'bg-white border-brand-red/20 shadow-lg shadow-brand-red/5' 
                      : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'}`}>
                      <tab.icon size={18} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-sm mb-0.5 ${isActive ? 'text-brand-black' : 'text-gray-600'}`}>{tab.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{tab.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Window */}
          <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center p-2 md:p-3 lg:p-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

            {/* Glowing Accents - The Reference "Backlight" Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-red/10 via-transparent to-brand-red/5 blur-[80px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-brand-red/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Stronger Core Glow behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-red/30 blur-[60px] rounded-full pointer-events-none opacity-60 animate-pulse"></div>

            {/* Visual Container */}
            <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 min-h-[320px] lg:min-h-0 z-10">
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <VisualConsulting />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <VisualWorkflow />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <VisualApp />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Visual 1: Consulting Slide Deck --- */
const VisualConsulting = () => (
  <div className="w-full h-full flex items-center justify-center p-1">
    {/* Added stronger red shadow and ring for "neon" feel */}
    <div className="w-full h-full bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(216,57,57,0.3)] ring-1 ring-brand-red/10 border border-gray-100 overflow-hidden flex flex-col relative">
      {/* Slide Header */}
      <div className="h-8 md:h-10 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-3 md:px-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-green-400"></div>
        </div>
        <div className="text-[9px] md:text-xs font-medium text-gray-400 uppercase tracking-widest">redberri.ai Audit v1.0</div>
      </div>
      
      {/* Slide Content */}
      <div className="flex-1 p-3 md:p-6 flex flex-col gap-3 md:gap-4 overflow-hidden">
        <div className="flex justify-between items-start shrink-0">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-1">AI Operational Audit</h3>
            <p className="text-gray-500 text-xs md:text-sm">Client: Acme Corp | Period: Q3 2024</p>
          </div>
          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-red-50 text-brand-red rounded-full text-xs md:text-sm font-bold border border-red-100 whitespace-nowrap">
            High Impact Found
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 shrink-0">
          <div className="p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-3xl font-bold text-brand-black mb-0.5 md:mb-1">85%</div>
            <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-semibold leading-tight">Automation Score</div>
          </div>
          <div className="p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-3xl font-bold text-brand-red mb-0.5 md:mb-1">$42k</div>
            <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-semibold leading-tight">Est. Annual Savings</div>
          </div>
          <div className="p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-3xl font-bold text-brand-black mb-0.5 md:mb-1">20h</div>
            <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-semibold leading-tight">Saved Per Week</div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-3 md:p-5 flex flex-col justify-center min-h-0">
          <div className="text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 uppercase tracking-wide">Strategic Roadmap</div>
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="h-2 md:h-2.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Phase 1: Data Unification</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 animate-pulse">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="h-2 md:h-2.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Phase 2: AI Support Agent</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 opacity-50">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center">
                 <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-400 rounded-full"></div>
              </div>
              <div className="h-2 md:h-2.5 flex-1 bg-gray-200 rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Phase 3: Predictive Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* --- Visual 2: Workflow (n8n Style) --- */
const WorkflowNode = ({ icon: Icon, label, color, x, y }: any) => (
  <div 
    className="absolute flex flex-col items-center gap-2 p-2 md:p-4 bg-white rounded-xl shadow-lg border border-gray-200 z-10 w-28 md:w-40"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${color} flex items-center justify-center text-white shadow-md`}>
      <Icon className="w-5 h-5 md:w-7 md:h-7" />
    </div>
    <div className="text-[10px] md:text-xs font-bold text-gray-800 text-center leading-tight">{label}</div>
    {/* Connector Dots */}
    <div className="absolute top-1/2 -right-1.5 w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full border-2 border-white"></div>
    {label !== 'New Lead' && <div className="absolute top-1/2 -left-1.5 w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full border-2 border-white"></div>}
  </div>
);

const VisualWorkflow = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-1">
        {/* Added stronger red shadow and ring */}
        <div className="w-full h-full flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(216,57,57,0.3)] ring-1 ring-brand-red/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
            <path 
            d="M 20% 50% C 35% 50%, 35% 50%, 50% 50%" 
            stroke="#94a3b8" strokeWidth="3" fill="none" 
            className="animate-[draw-line_2s_infinite]"
            />
            <path 
            d="M 50% 50% C 65% 50%, 65% 30%, 80% 30%" 
            stroke="#94a3b8" strokeWidth="3" fill="none"
            />
            <path 
            d="M 50% 50% C 65% 50%, 65% 70%, 80% 70%" 
            stroke="#94a3b8" strokeWidth="3" fill="none"
            />
            
            {/* Moving dots */}
            <circle r="4" fill="#D83939">
            <animateMotion 
                dur="2s" 
                repeatCount="indefinite"
                path="M 20% 50% C 35% 50%, 35% 50%, 50% 50%"
            />
            </circle>
            <circle r="4" fill="#D83939">
            <animateMotion 
                dur="2s" 
                begin="1s"
                repeatCount="indefinite"
                path="M 50% 50% C 65% 50%, 65% 30%, 80% 30%"
            />
            </circle>
        </svg>

        {/* Nodes */}
        <div className="w-full h-full relative">
            <WorkflowNode icon={Mail} label="New Lead" color="bg-blue-500" x="20%" y="50%" />
            <WorkflowNode icon={Bot} label="AI Enrichment" color="bg-brand-red" x="50%" y="50%" />
            <WorkflowNode icon={MessageSquare} label="Slack Notify" color="bg-green-500" x="80%" y="30%" />
            <WorkflowNode icon={Database} label="Update CRM" color="bg-orange-500" x="80%" y="70%" />
        </div>
        
        {/* Floating Status */}
        <div className="absolute bottom-6 right-6 bg-white px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-200 shadow-md flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-green-600">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            System Active
        </div>
        </div>
    </div>
  );
};

/* --- Visual 3: App Dashboard --- */
const VisualApp = () => (
  <div className="w-full h-full flex items-center justify-center p-1">
    {/* Added stronger red shadow and ring */}
    <div className="w-full h-full bg-gray-50 rounded-xl shadow-[0_20px_60px_-15px_rgba(216,57,57,0.3)] ring-1 ring-brand-red/10 border border-gray-200 overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-16 md:w-20 bg-brand-black flex flex-col items-center py-4 md:py-6 gap-5 md:gap-8 shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-bold text-xs md:text-sm">RB</div>
        <div className="flex flex-col gap-4 md:gap-6 w-full items-center">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
            <LayoutDashboard className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-white/40 hover:bg-white/5 transition-colors cursor-pointer">
            <Users className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-white/40 hover:bg-white/5 transition-colors cursor-pointer">
            <BarChart3 className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        <div className="mt-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-12 md:h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="text-sm md:text-base font-bold text-gray-800">Dashboard</div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="px-2 py-1 md:px-3 md:py-1.5 bg-gray-100 rounded text-xs md:text-sm text-gray-500 whitespace-nowrap">Last 7 Days</div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100"></div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-4 md:p-6 bg-gray-50 grid grid-cols-2 gap-3 md:gap-6 h-full overflow-hidden">
          {/* Stats Cards */}
          <div className="col-span-2 grid grid-cols-3 gap-3 md:gap-6">
            <div className="bg-white p-3 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-[10px] md:text-xs text-gray-400 font-medium uppercase truncate">Revenue</div>
              <div className="text-base md:text-2xl font-bold text-gray-800 mt-1 md:mt-2">$24.5k</div>
              <div className="text-[10px] md:text-xs text-green-500 flex items-center gap-1 mt-1 md:mt-2"><TrendingUp size={12} /> +12%</div>
            </div>
            <div className="bg-white p-3 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-[10px] md:text-xs text-gray-400 font-medium uppercase truncate">Users</div>
              <div className="text-base md:text-2xl font-bold text-gray-800 mt-1 md:mt-2">1,240</div>
              <div className="text-[10px] md:text-xs text-green-500 flex items-center gap-1 mt-1 md:mt-2"><TrendingUp size={12} /> +5%</div>
            </div>
            <div className="bg-white p-3 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-[10px] md:text-xs text-gray-400 font-medium uppercase truncate">Churn</div>
              <div className="text-base md:text-2xl font-bold text-gray-800 mt-1 md:mt-2">0.8%</div>
              <div className="text-[10px] md:text-xs text-red-400 flex items-center gap-1 mt-1 md:mt-2"><AlertCircle size={12} /> -0.2%</div>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="col-span-2 flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-3 md:mb-6">
              <div className="text-xs md:text-sm font-bold text-gray-700">Growth Overview</div>
              <MoreHorizontal className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            </div>
            <div className="flex-1 flex items-end justify-between gap-2 md:gap-3 px-1 md:px-2">
              {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 100].map((h, i) => (
                <div key={i} className="w-full bg-brand-red/10 rounded-t-md relative group overflow-hidden" style={{height: `${h}%`}}>
                  <div className="absolute bottom-0 left-0 w-full bg-brand-red transition-all duration-500 h-0 group-hover:h-full opacity-80"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
