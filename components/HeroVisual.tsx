import React from 'react';
import { Mail, Zap, Database, MessageSquare, Globe, Users, FileText, Check, Sparkles, Sliders } from 'lucide-react';

const FloatingNode = ({ 
  icon: Icon, 
  label, 
  subLabel, 
  color, 
  position, 
  delay,
  rotation = '0deg'
}: any) => (
  <div 
    className="absolute z-20 hidden md:flex flex-col items-center gap-2 select-none pointer-events-none"
    style={{ 
      ...position, 
      animation: `float 6s ease-in-out infinite ${delay}`,
    }}
  >
    <div 
      className={`relative p-3 bg-white rounded-xl shadow-[0_10px_25px_rgba(216,57,57,0.15)] border border-red-50 flex items-center gap-3 backdrop-blur-sm transform transition-transform hover:scale-105 duration-300`}
      style={{ transform: `perspective(1000px) rotateY(${rotation}) rotateX(5deg)` }}
    >
        <div className={`p-2.5 rounded-lg ${color} text-white shadow-md shadow-red-500/20`}>
            <Icon size={20} strokeWidth={2.5} />
        </div>
        <div className="text-left min-w-[100px]">
            <div className="text-xs font-bold text-gray-800 leading-tight">{label}</div>
            <div className="text-[9px] text-gray-500 font-medium mt-0.5">{subLabel}</div>
        </div>
        
        {/* Connection Point Halo */}
        <div className="absolute inset-0 rounded-xl ring-2 ring-brand-red/5"></div>
    </div>
  </div>
);

export const HeroVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
        <style>
            {`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            @keyframes flow-line {
                0% { stroke-dashoffset: 2000; }
                100% { stroke-dashoffset: 0; }
            }
            @keyframes pulse-glow {
                0%, 100% { filter: drop-shadow(0 0 5px rgba(216, 57, 57, 0.6)); opacity: 0.8; }
                50% { filter: drop-shadow(0 0 15px rgba(216, 57, 57, 0.9)); opacity: 1; }
            }
            `}
        </style>

        {/* 3D Perspective Container */}
        <div className="w-full h-full relative" style={{ perspective: '1200px' }}>
            
            {/* SVG Connecting Lines - Active Workflow Style */}
            <svg className="absolute inset-0 w-full h-full z-10 overflow-visible">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D83939" stopOpacity="0.2" />
                        <stop offset="20%" stopColor="#D83939" stopOpacity="1" />
                        <stop offset="80%" stopColor="#D83939" stopOpacity="1" />
                        <stop offset="100%" stopColor="#D83939" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="neon-glow" height="300%" width="300%" x="-75%" y="-75%">
                        <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
                        <feGaussianBlur in="thicken" stdDeviation="6" result="blurred" />
                        <feFlood floodColor="#D83939" result="glowColor" />
                        <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
                        <feMerge>
                            <feMergeNode in="softGlow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* 
                   Continuous Workflow Line (Left to Right, dipping under content)
                   Points correspond to node positions below.
                */}
                <path 
                    d="M 12% 72% 
                       C 18% 72%, 25% 82%, 32% 82% 
                       C 40% 82%, 42% 88%, 52% 88% 
                       C 62% 88%, 64% 82%, 72% 82% 
                       C 79% 82%, 86% 72%, 92% 72%" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeDasharray="10 6"
                    className="opacity-40"
                />

                <path 
                    d="M 12% 72% 
                       C 18% 72%, 25% 82%, 32% 82% 
                       C 40% 82%, 42% 88%, 52% 88% 
                       C 62% 88%, 64% 82%, 72% 82% 
                       C 79% 82%, 86% 72%, 92% 72%" 
                    stroke="#D83939" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeDasharray="2000"
                    strokeDashoffset="2000"
                    filter="url(#neon-glow)"
                    style={{ 
                        animation: 'flow-line 3s linear infinite',
                    }}
                />
            </svg>

            {/* Nodes - Positioned in a U/Smile shape below the main content area */}
            
            {/* 1. Start: Left (Trigger) */}
            <FloatingNode 
                icon={Mail} 
                label="New Inquiry" 
                subLabel="Gmail Trigger"
                color="bg-blue-500"
                position={{ left: '8%', top: '68%' }}
                delay="0s"
                rotation="15deg"
            />

            {/* 2. Step: Mid-Left (Filter) */}
            <FloatingNode 
                icon={Sliders} 
                label="Filter Lead" 
                subLabel="Data Enrichment"
                color="bg-purple-500"
                position={{ left: '28%', top: '78%' }}
                delay="1s"
                rotation="8deg"
            />

            {/* 3. Brain: Center Bottom (AI) - The anchor */}
            <FloatingNode 
                icon={Sparkles} 
                label="AI Reasoning" 
                subLabel="GPT-4o Model"
                color="bg-brand-red"
                position={{ left: '46%', top: '85%' }} // Centered visually
                delay="2s"
                rotation="0deg"
            />
            
            {/* 4. Data: Mid-Right (CRM) */}
            <FloatingNode 
                icon={Database} 
                label="Update CRM" 
                subLabel="PostgreSQL"
                color="bg-orange-500"
                position={{ left: '68%', top: '78%' }}
                delay="1.5s"
                rotation="-8deg"
            />

            {/* 5. End: Right (Notify) */}
            <FloatingNode 
                icon={MessageSquare} 
                label="Notify Team" 
                subLabel="Slack Channel"
                color="bg-green-500"
                position={{ left: '88%', top: '68%' }} 
                delay="0.5s"
                rotation="-15deg"
            />

            {/* Mobile Fallback */}
            <div className="md:hidden absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                 <Sparkles size={100} className="text-brand-red" />
            </div>
        </div>
    </div>
  );
};