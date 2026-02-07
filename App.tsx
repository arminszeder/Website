import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroTabs } from './components/HeroTabs';
import { Button } from './components/Button';
import { SectionBadge } from './components/SectionBadge';
import { LogoCarousel } from './components/LogoCarousel';
import { SERVICES, BENEFITS, PROCESS_STEPS, CASE_STUDIES } from './constants';
import { Check, ArrowRight, Star, Cpu, Briefcase, Zap, Bot, BarChart3, TrendingUp, Smartphone, MessageSquare, Shield, Globe, Database, Search, Code2, Sparkles, Play, Phone, FileText, Settings, Rocket, Users, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-brand-black">
      <Navbar />

      {/* Hero Section - Light Mode with Dark Visual */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Effects (Light Mode) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Main Top Glow */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-brand-red/5 to-transparent rounded-full blur-[100px] opacity-80"></div>
          
          {/* Secondary Bottom Glows */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] opacity-60"></div>
        </div>
        
        {/* Changed max-w-7xl to max-w-[1600px] to allow wider visuals */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-brand-red fill-current" />
            <span className="text-sm font-medium text-gray-600">More than just automation</span>
          </div>

          <div className="max-w-5xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-brand-black leading-tight mb-8 tracking-tight">
              Elevate your business <br className="hidden md:block" /> with{" "}
              <span className="text-brand-red relative inline-block">
                AI.
                {/* Decorative underline/scribble */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-red/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-3xl mx-auto font-normal">
              From answering emails to organizing data, we connect your existing software to AI apps so you can stop doing repetitive tasks and focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="!bg-brand-red !text-white hover:!bg-red-600 shadow-[0_10px_30px_-10px_rgba(216,57,57,0.4)] px-8 py-4 text-lg">
                Get in Touch
              </Button>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-sm group">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:text-brand-red transition-colors" />
              </button>
            </div>
          </div>

          {/* New Tabbed Hero Visual */}
          <HeroTabs />
        </div>
      </section>

      <LogoCarousel />

      {/* Comparison Section */}
      <section className="py-20 bg-brand-offwhite relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge label="The Difference" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Competitive Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See the difference AI integration makes in your daily operations and ability to scale.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Old Way */}
            <div className="p-8 rounded-2xl bg-gray-100 border border-gray-200 opacity-70 grayscale transition-all hover:grayscale-0">
              <h3 className="text-xl font-bold mb-6 flex items-center text-gray-500">
                <span className="mr-2">❌</span> The Manual Way
              </h3>
              <ul className="space-y-4">
                {['Endless copy-pasting and data entry', 'Customers waiting hours for a reply', 'Frequent human errors and typos', 'Hiring more staff just to handle admin', 'Burnt out teams doing boring tasks'].map((item) => (
                  <li key={item} className="flex items-center text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way - Enhanced Highlight */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-orange-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative p-8 md:py-14 rounded-2xl bg-white border border-brand-red/20 shadow-2xl overflow-hidden">
                {/* Decorative Background Shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-brand-red/10 to-orange-100 blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(216,57,57,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(216,57,57,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                
                <h3 className="text-xl font-bold mb-6 flex items-center text-brand-red relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center mr-3">
                     <Zap className="w-5 h-5 fill-brand-red text-brand-red" />
                  </div>
                  The Automated Way
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    'Data moves instantly between apps', 
                    'Instant 24/7 customer responses', 
                    '100% accuracy on every task', 
                    'Scale your revenue without hiring more', 
                    'Your team focuses on creative work'
                  ].map((item) => (
                    <li key={item} className="flex items-center text-brand-black font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                         <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - 3D Playful & Professional Bento Grid */}
      <section id="solutions" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge label="Solutions" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we specialize in</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored strategies and tools to modernize your business without any headache.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[420px]">

            {/* 1. Strategy & Roadmaps (Span 2) */}
            <div className="md:col-span-2 group relative overflow-visible rounded-[2.5rem] bg-white border border-red-100 shadow-[0_0_20px_rgba(216,57,57,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(216,57,57,0.2)] transition-all duration-500">
               {/* Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-red-50/30 rounded-[2.5rem]"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

               {/* 3D Visual Container */}
               <div className="absolute inset-0 bottom-24 flex items-center justify-center" style={{ perspective: '1000px' }}>
                  <div className="relative w-[300px] h-[200px] transition-transform duration-700 group-hover:rotate-1" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg) rotateX(5deg)' }}>
                     
                     {/* Back Layer: Strategy Doc */}
                     <div className="absolute top-[-30px] left-[-50px] w-48 h-60 bg-white rounded-xl border border-gray-100 shadow-lg p-5 transition-transform duration-500 group-hover:-translate-x-4" style={{ transform: 'rotateZ(-6deg) translateZ(-40px)' }}>
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-4"></div>
                        <div className="space-y-2.5">
                           <div className="w-full h-1.5 bg-gray-100 rounded-full"></div>
                           <div className="w-5/6 h-1.5 bg-gray-100 rounded-full"></div>
                           <div className="w-full h-1.5 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="mt-5 w-full h-24 bg-blue-50 rounded-lg flex items-end justify-between p-2 pb-0 gap-1.5">
                           <div className="w-1/4 h-[40%] bg-blue-200 rounded-t-sm"></div>
                           <div className="w-1/4 h-[70%] bg-blue-300 rounded-t-sm"></div>
                           <div className="w-1/4 h-[50%] bg-blue-200 rounded-t-sm"></div>
                           <div className="w-1/4 h-[90%] bg-blue-400 rounded-t-sm"></div>
                        </div>
                     </div>

                     {/* Middle Layer: Video Call Window */}
                     <div className="absolute top-0 right-[-30px] w-64 h-44 bg-white rounded-xl border border-gray-100 shadow-xl p-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-z-10" style={{ transform: 'rotateZ(3deg) translateZ(10px)' }}>
                        <div className="flex items-center justify-between mb-2 px-1">
                           <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                           </div>
                           <div className="w-16 h-1.5 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-[calc(100%-18px)]">
                           <div className="bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">JD</div>
                           </div>
                           <div className="bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs">AS</div>
                           </div>
                           <div className="bg-brand-black rounded-lg flex items-center justify-center relative overflow-hidden">
                               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xs">You</div>
                               <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-brand-black"></div>
                           </div>
                           <div className="bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">MK</div>
                           </div>
                        </div>
                     </div>

                     {/* Front Layer: Floating Badge */}
                     <div className="absolute bottom-[-20px] left-[30px] bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-xl flex items-center gap-3 transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-[-10px]" style={{ transform: 'rotateZ(-3deg) translateZ(40px)' }}>
                         <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center shadow-md shadow-red-200">
                             <Search className="w-5 h-5 text-white" />
                         </div>
                         <div>
                             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Audit Score</div>
                             <div className="text-lg font-bold text-brand-black leading-none">98/100</div>
                         </div>
                     </div>
                  </div>
               </div>

               {/* Content */}
               <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-white via-white to-transparent rounded-b-[2.5rem]">
                   <h3 className="text-2xl font-bold text-brand-black mb-2">{SERVICES[0].title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed max-w-md">{SERVICES[0].description}</p>
               </div>
            </div>

            {/* 2. Workflow Automation (Span 1) */}
            <div className="md:col-span-1 group relative overflow-visible rounded-[2.5rem] bg-white border border-red-100 shadow-[0_0_20px_rgba(216,57,57,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(216,57,57,0.2)] transition-all duration-500">
               {/* Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white rounded-[2.5rem]"></div>

               {/* 3D Visual */}
               <div className="absolute inset-0 bottom-24 flex items-center justify-center" style={{ perspective: '800px' }}>
                  <div className="relative transition-transform duration-700 group-hover:rotate-x-6" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateZ(-10deg)' }}>
                     {/* Connecting Pipe */}
                     <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-100 -translate-y-1/2 rounded-full -z-10 w-[120%] -ml-[10%]">
                         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 w-1/2 rounded-full animate-[shimmer_2s_infinite]"></div>
                     </div>

                     {/* Nodes */}
                     <div className="flex gap-8">
                         {/* Node 1 */}
                         <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center relative transition-transform duration-300 group-hover:-translate-y-4" style={{ transform: 'translateZ(10px)' }}>
                             <div className="w-16 h-16 absolute top-1.5 left-0 bg-gray-200 rounded-2xl -z-10"></div>
                             <Mail className="w-7 h-7 text-blue-500" />
                         </div>
                         {/* Node 2 */}
                         <div className="w-20 h-20 bg-brand-red rounded-2xl shadow-xl shadow-red-200 flex items-center justify-center relative transition-transform duration-300 group-hover:-translate-y-6 delay-75 z-10 -mt-2" style={{ transform: 'translateZ(30px)' }}>
                              <div className="w-20 h-20 absolute top-1.5 left-0 bg-red-800 rounded-2xl -z-10"></div>
                             <Zap className="w-9 h-9 text-white fill-white" />
                         </div>
                         {/* Node 3 */}
                         <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center relative transition-transform duration-300 group-hover:-translate-y-4 delay-150" style={{ transform: 'translateZ(10px)' }}>
                              <div className="w-16 h-16 absolute top-1.5 left-0 bg-gray-200 rounded-2xl -z-10"></div>
                             <Database className="w-7 h-7 text-green-500" />
                         </div>
                     </div>
                  </div>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-white via-white to-transparent rounded-b-[2.5rem]">
                   <h3 className="text-xl font-bold text-brand-black mb-2">{SERVICES[1].title}</h3>
                   <p className="text-gray-500 text-sm">{SERVICES[1].description}</p>
               </div>
            </div>

            {/* 3. Smart AI Assistants (Span 1) */}
            <div className="md:col-span-1 group relative overflow-visible rounded-[2.5rem] bg-white border border-red-100 shadow-[0_0_20px_rgba(216,57,57,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(216,57,57,0.2)] transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-white rounded-[2.5rem]"></div>

               {/* 3D Visual */}
               <div className="absolute inset-0 bottom-24 flex items-center justify-center" style={{ perspective: '800px' }}>
                   <div className="relative">
                       {/* The Bot Head */}
                       <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-red-500 rounded-[2.5rem] shadow-[0_20px_40px_rgba(249,115,22,0.3)] flex items-center justify-center relative z-10 animate-[float_4s_ease-in-out_infinite]">
                           {/* Face */}
                           <div className="w-20 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center gap-3 border border-white/30">
                              <div className="w-2.5 h-5 bg-white rounded-full animate-blink"></div>
                              <div className="w-2.5 h-5 bg-white rounded-full animate-blink delay-100"></div>
                           </div>
                           {/* Antenna */}
                           <div className="absolute -top-5 w-1.5 h-5 bg-red-400"></div>
                           <div className="absolute -top-8 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-400"></div>
                       </div>

                       {/* Floating Elements */}
                       <div className="absolute top-0 right-[-50px] bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-lg border border-gray-100 text-xs font-bold text-gray-600 animate-[float_5s_ease-in-out_infinite_1s]" style={{ transform: 'translateZ(20px)' }}>
                          Support 24/7
                       </div>
                       <div className="absolute bottom-[-10px] left-[-50px] bg-white px-4 py-2 rounded-2xl rounded-tr-none shadow-lg border border-gray-100 text-xs font-bold text-gray-600 animate-[float_6s_ease-in-out_infinite_0.5s]" style={{ transform: 'translateZ(-20px)' }}>
                          Solved!
                       </div>
                   </div>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-white via-white to-transparent rounded-b-[2.5rem]">
                   <h3 className="text-xl font-bold text-brand-black mb-2">{SERVICES[3].title}</h3>
                   <p className="text-gray-500 text-sm">{SERVICES[3].description}</p>
               </div>
            </div>

            {/* 4. Custom Internal Tools (Span 2) */}
            <div className="md:col-span-2 group relative overflow-visible rounded-[2.5rem] bg-white border border-red-100 shadow-[0_0_20px_rgba(216,57,57,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(216,57,57,0.2)] transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white rounded-[2.5rem]"></div>
               
               {/* 3D Dashboard Visual */}
               <div className="absolute inset-0 bottom-24 flex items-center justify-center overflow-visible" style={{ perspective: '1200px' }}>
                  <div className="relative w-[85%] max-w-[460px] aspect-[16/10] bg-white rounded-xl border border-gray-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out p-1.5 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:scale-105" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(-10deg) rotateZ(2deg)' }}>
                     
                     {/* Inner Dashboard */}
                     <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="h-8 bg-white border-b border-gray-100 flex items-center px-3 gap-2">
                           <div className="w-2 h-2 rounded-full bg-red-400"></div>
                           <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                           <div className="w-2 h-2 rounded-full bg-green-400"></div>
                           <div className="ml-2 w-32 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="flex-1 flex">
                           {/* Sidebar */}
                           <div className="w-14 bg-white border-r border-gray-100 flex flex-col items-center py-3 gap-3">
                              <div className="w-6 h-6 rounded-md bg-brand-red text-white flex items-center justify-center shadow-md shadow-red-200"><Code2 size={14} /></div>
                              <div className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"></div>
                              <div className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"></div>
                              <div className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"></div>
                           </div>
                           {/* Main Area */}
                           <div className="flex-1 p-4 flex flex-col gap-3">
                              {/* Top Stats */}
                              <div className="flex gap-3">
                                 <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-10 h-1.5 bg-gray-100 rounded-full mb-2"></div>
                                    <div className="w-16 h-4 bg-purple-500 rounded-md"></div>
                                 </div>
                                 <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-10 h-1.5 bg-gray-100 rounded-full mb-2"></div>
                                    <div className="w-16 h-4 bg-blue-500 rounded-md"></div>
                                 </div>
                                 <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-10 h-1.5 bg-gray-100 rounded-full mb-2"></div>
                                    <div className="w-16 h-4 bg-green-500 rounded-md"></div>
                                 </div>
                              </div>
                              {/* Big Chart */}
                              <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-end gap-1.5 relative group-hover:shadow-md transition-shadow overflow-hidden">
                                  {/* Bars */}
                                  {[35, 55, 45, 75, 55, 85, 65, 95, 80, 100].map((h, i) => (
                                      <div key={i} className="flex-1 bg-purple-50 rounded-t-md relative group/bar" style={{height: `${h}%`}}>
                                          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-600 to-blue-500 h-0 group-hover:h-full transition-all duration-1000 ease-out" style={{ transitionDelay: `${i * 60}ms` }}></div>
                                      </div>
                                  ))}
                                  
                                  {/* Floating "Live" Badge - Pops out in 3D */}
                                  <div className="absolute top-3 right-3 bg-brand-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xl transition-transform duration-500 group-hover:translate-z-[30px] group-hover:-translate-y-2" style={{ transform: 'translateZ(10px)' }}>
                                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                      Live Data
                                  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-white via-white to-transparent rounded-b-[2.5rem]">
                   <h3 className="text-2xl font-bold text-brand-black mb-2">{SERVICES[2].title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed max-w-md">{SERVICES[2].description}</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <SectionBadge label="Process" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path to Automation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to transform your business.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-24 -translate-y-1/2 pointer-events-none z-0">
               <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                   <path d="M 180 50 C 350 50, 450 10, 600 50 C 750 90, 850 50, 1020 50" stroke="#D83939" strokeWidth="2" fill="none" strokeDasharray="8 8" className="opacity-20" />
               </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
               {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                     {/* 3D Icon Card */}
                     <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                        {/* Colorful Back Glow */}
                        <div className={`absolute -inset-6 rounded-full blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${
                            idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-amber-500' : 'bg-brand-red'
                        }`}></div>

                        {/* Main 3D Card Surface */}
                        <div className="relative w-full h-full bg-white rounded-[2rem] border border-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center overflow-hidden">
                            {/* Inner Gradient Background - subtle tint */}
                            <div className={`absolute inset-0 opacity-30 ${
                                idx === 0 ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 
                                idx === 1 ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 
                                'bg-gradient-to-br from-red-50 to-rose-50'
                            }`}></div>

                            {/* 3D Icon Container - Floating in center */}
                            <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border border-white/20 ${
                                idx === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 
                                idx === 1 ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 
                                'bg-gradient-to-br from-brand-red to-rose-600'
                            }`}>
                                {/* Glossy overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                                
                                {/* Icon */}
                                <div className="relative text-white drop-shadow-md">
                                    {idx === 0 && <Phone className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />}
                                    {idx === 1 && <FileText className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />}
                                    {idx === 2 && <Rocket className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />}
                                </div>
                            </div>
                        </div>

                        {/* Number Badge - elevated 3D */}
                        <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-[3px] border-brand-offwhite shadow-lg z-10 text-white ${
                            idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-amber-500' : 'bg-brand-red'
                        }`}>
                            {step.number}
                        </div>
                     </div>
                     
                     <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4">{step.title}</h3>
                     <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Changed background to white */}
      <section id="casestudies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <SectionBadge label="Case Studies" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">See how we've helped businesses scale with intelligent automation.</p>
            </div>

            <div className="space-y-12">
                {CASE_STUDIES.map((study, idx) => (
                    /* The Card */
                    <div key={idx} className="bg-brand-offwhite rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="grid lg:grid-cols-12 min-h-[500px]">
                            {/* Left Side (Visual + Context) - 7 cols */}
                            <div className={`lg:col-span-7 p-8 md:p-12 ${study.imagePlaceholderColor} bg-opacity-20 relative flex flex-col justify-between`}>
                                {/* Grid Pattern Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(#00000005_1px,transparent_1px),linear-gradient(90deg(#00000005_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-xl font-bold text-brand-black">Client Use Case:</h3>
                                            <span className="text-xl font-medium text-gray-600">{study.title}</span>
                                        </div>
                                        {/* Mock Logo */}
                                        <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">
                                            {study.title[0]}
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-3xl md:text-4xl font-bold leading-tight max-w-md mb-8">
                                        {study.benefit}
                                    </h4>
                                </div>

                                {/* Abstract Visual Collage Area */}
                                <div className="relative z-10 mt-8 h-64 w-full">
                                    {/* Simulating the collage from reference */}
                                    <div className="absolute bottom-0 left-0 w-3/4 h-5/6 bg-white rounded-t-xl border border-gray-200 shadow-xl p-4 transform -rotate-2 origin-bottom-left transition-transform group-hover:rotate-0">
                                        {/* Mock UI Content */}
                                        <div className="flex items-center space-x-3 mb-4 border-b border-gray-100 pb-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                                            <div className="h-2 w-24 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-gray-50 rounded"></div>
                                            <div className="h-2 w-5/6 bg-gray-50 rounded"></div>
                                            <div className="h-20 w-full bg-gray-50 rounded mt-4"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-4 right-0 w-1/2 h-40 bg-brand-black text-white rounded-xl shadow-2xl p-4 transform rotate-3 translate-x-4 transition-transform group-hover:translate-x-0">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-xs text-gray-400">Efficiency</div>
                                            <TrendingUp className="w-4 h-4 text-green-400" />
                                        </div>
                                        <div className="text-3xl font-bold mb-1">+145%</div>
                                        <div className="text-xs text-gray-500">Growth trajectory</div>
                                        <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-green-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (Stats) - 5 cols */}
                            <div className="lg:col-span-5 p-8 md:p-12 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                                <div className="space-y-10">
                                    {/* Stat 1 */}
                                    <div>
                                        <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
                                            {idx === 0 ? '75%' : idx === 1 ? '20%' : '20hrs'}
                                        </div>
                                        <div className="text-gray-500 font-medium">
                                            {idx === 0 ? 'Reduction in support tickets' : idx === 1 ? 'Increase in user retention' : 'Saved per week in admin'}
                                        </div>
                                    </div>
                                    
                                    {/* Stat 2 */}
                                    <div>
                                        <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
                                            {idx === 0 ? '< 1min' : idx === 1 ? '4.9/5' : '100%'}
                                        </div>
                                        <div className="text-gray-500 font-medium">
                                            {idx === 0 ? 'Average response time' : idx === 1 ? 'App Store Rating' : 'Automated call coverage'}
                                        </div>
                                    </div>

                                    {/* Stat 3 */}
                                    <div>
                                        <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
                                            {idx === 0 ? '24/7' : idx === 1 ? '15k+' : '$0'}
                                        </div>
                                        <div className="text-gray-500 font-medium">
                                            {idx === 0 ? 'Support availability' : idx === 1 ? 'Daily active users' : 'Missed lead cost'}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 my-10"></div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {study.tools.map((tool) => (
                                        <span key={tool} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-black hover:text-brand-black transition-colors cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                    <span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600">
                                        {study.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contact" className="bg-brand-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to future-proof your business?</h2>
              <p className="text-gray-400 text-lg mb-8">
                Schedule a free discovery call to explore how AI can streamline your operations and boost profitability.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="primary" className="!text-lg !px-8 !py-4">Book Discovery Call</Button>
                <a href="mailto:hello@redberri.ai" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-gray-700 hover:bg-gray-800 transition-all text-white">
                  Email Us
                </a>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
               <h3 className="font-semibold text-xl mb-4">Contact Information</h3>
               <div className="space-y-4">
                  <div className="flex items-start">
                     <div className="w-6 h-6 rounded bg-brand-red/20 text-brand-red flex items-center justify-center mr-3 mt-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     </div>
                     <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-medium">hello@redberri.ai</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <div className="w-6 h-6 rounded bg-brand-red/20 text-brand-red flex items-center justify-center mr-3 mt-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                     <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-medium">San Francisco, CA</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} redberri.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;