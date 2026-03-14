import React, { useState, useEffect } from 'react';
import { 
  User, Link2, ShoppingCart, MessageSquare, Mail, 
  Github, Twitter, Instagram, Linkedin, Youtube,
  ArrowRight, ExternalLink, ShieldCheck, Zap, 
  Globe, Sparkles, Coffee, Send, ChevronRight,
  Clock, MapPin, CheckCircle2, Copy, Share2, X, Image as ImageIcon, Layers,
  ChevronUp, CreditCard, Box, CursorClick
} from 'lucide-react';

// --- CUSTOM SLASHME LOGO COMPONENT ---
const SlashLogo = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100" height="100" rx="22" fill="currentColor"/>
    <path d="M48 25L32 75" stroke="#888888" strokeWidth="11" strokeLinecap="round"/>
    <path d="M68 25L52 75" stroke="white" strokeWidth="11" strokeLinecap="round"/>
  </svg>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [isLoaded, setIsLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); 
  const [copied, setCopied] = useState(false);
  
  // Interaction States
  const [isBottomDrawerVisible, setIsBottomDrawerVisible] = useState(false);
  const [isTopCtaVisible, setIsTopCtaVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Show onboarding drawer instantly on visit
    const timer = setTimeout(() => {
      setIsBottomDrawerVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseDrawer = () => {
    setIsBottomDrawerVisible(false);
    setIsTopCtaVisible(true);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
    document.body.removeChild(textArea);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  const tabs = [
    { id: 'bio', icon: <ImageIcon size={18} />, label: 'Gallery' },
    { id: 'links', icon: <Link2 size={18} />, label: 'Links' },
    { id: 'store', icon: <ShoppingCart size={18} />, label: 'Vault' },
    { id: 'contact', icon: <MessageSquare size={18} />, label: 'Signal' }
  ];

  return (
    <div className={`relative min-h-screen bg-[#ffffff] text-black selection:bg-black selection:text-white font-sans transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* --- MONOCHROME UTILITY STRIP (Fixed Top) --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] h-10 px-6 flex items-center bg-white border-b border-black/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform 
        ${isTopCtaVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        
        <div className="flex items-center gap-3">
          <SlashLogo size={18} className="text-black" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black tracking-tighter text-black pt-0.5">slashme.io</span>
            <div className="w-[1px] h-3 bg-black/10" />
            <a 
              href="https://slashme.io" 
              className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 hover:text-black transition-colors uppercase pt-0.5"
            >
              Get your link — Start for free
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-lg mx-auto px-6 pb-64 pt-20">
        
        {/* --- STATIC HEADER --- */}
        <header className="flex flex-col items-center mb-12 scale-100 opacity-100 transition-all duration-700 ease-out">
          <div className="relative group">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=ffffff" 
              className="w-24 h-24 rounded-full border-2 border-black bg-neutral-100 grayscale"
              alt="Avatar"
            />
          </div>
          <h1 className="mt-6 text-2xl font-black tracking-tighter text-center uppercase italic">Alex Drifter</h1>
          <p className="mt-2 text-neutral-400 text-[9px] font-black tracking-[0.5em] uppercase text-center border-t border-black/5 pt-2 w-32">
            Creative Core
          </p>
        </header>

        <div className="relative min-h-[400px]">
          
          {/* VIEW: BIO / GALLERY */}
          {activeTab === 'bio' && (
            <div className="animate-in space-y-6">
              <div className="bg-white border border-black/10 rounded-[24px] p-6 shadow-sm">
                <p className="text-lg leading-snug font-medium text-black">
                  Directing the <span className="underline decoration-1 underline-offset-4">visual future</span> through minimal systems and digital artifacts. 
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/5 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Reach</span>
                    <span className="text-sm font-black tracking-tight">120K+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Drops</span>
                    <span className="text-sm font-black tracking-tight">14</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Partners</span>
                    <span className="text-sm font-black tracking-tight">28</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden border border-black/5 relative group">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work 1" />
                </div>
                <div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden border border-black/5 relative group">
                  <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work 2" />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                 {[Twitter, Instagram, Github].map((Icon, i) => (
                   <a key={i} href="#" className="flex-1 flex justify-center py-4 bg-white border border-black/5 rounded-2xl transition-all hover:bg-black hover:text-white text-neutral-600">
                     <Icon size={16} />
                   </a>
                 ))}
                 <button onClick={handleCopyLink} className="flex-[1.5] flex items-center justify-center gap-2 bg-black text-white rounded-2xl font-black text-[10px] tracking-widest uppercase active:scale-95 transition-all">
                   <Share2 size={14} /> {copied ? 'COPIED' : 'SHARE'}
                 </button>
              </div>
            </div>
          )}

          {/* VIEW: LINKS */}
          {activeTab === 'links' && (
            <div className="animate-in space-y-3">
              {[
                { title: 'Project Archive', sub: '2018—2024 selection', icon: <Layers /> },
                { title: 'Design Resources', sub: 'Templates & Assets', icon: <Zap /> },
                { title: 'Community Discord', sub: 'The Inner Circle', icon: <MessageSquare /> }
              ].map((link, i) => (
                <a key={i} href="#" className="flex items-center gap-4 p-4 bg-white border border-black/5 rounded-2xl hover:bg-neutral-50 transition-all group shadow-sm">
                   <div className="w-12 h-12 bg-neutral-100 rounded-xl flex-shrink-0 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                      {React.cloneElement(link.icon, { size: 18 })}
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold truncate tracking-tight">{link.title}</h4>
                      <p className="text-[10px] text-neutral-400 truncate mt-0.5 uppercase tracking-wider">{link.sub}</p>
                   </div>
                   <ArrowRight size={14} className="text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          )}

          {/* VIEW: VAULT (STORE) */}
          {activeTab === 'store' && (
            <div className="animate-in space-y-6">
              <div className="relative group overflow-hidden bg-black text-white rounded-[32px] p-8 shadow-2xl">
                <div className="absolute top-0 right-0 p-6">
                  <span className="bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase tracking-[0.2em]">New Drop</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black italic tracking-tighter leading-none mb-2">OBSIDIAN UI</h3>
                  <p className="text-xs text-neutral-400 max-w-[200px] mb-8 font-medium">The definitive design system for monochrome products.</p>
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black text-[10px] tracking-widest uppercase hover:scale-105 transition-all">
                    Unlock Access — $149 <ArrowRight size={14} />
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12 group-hover:rotate-6 transition-transform duration-700">
                   <SlashLogo size={200} className="text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-black/5 rounded-[24px] p-5 hover:bg-neutral-50 transition-all cursor-pointer shadow-sm group">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all">
                    <Zap size={18} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-tight mb-1">Source Code</h4>
                  <p className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase mb-4">React + Tailwind</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black">$29</span>
                    <ShoppingCart size={14} className="text-neutral-300" />
                  </div>
                </div>
                <div className="bg-white border border-black/5 rounded-[24px] p-5 hover:bg-neutral-50 transition-all cursor-pointer shadow-sm group">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all">
                    <ImageIcon size={18} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-tight mb-1">Grain Presets</h4>
                  <p className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase mb-4">Lightroom CC</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black">$19</span>
                    <ShoppingCart size={14} className="text-neutral-300" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: SIGNAL (CONTACT) */}
          {activeTab === 'contact' && (
            <div className="animate-in space-y-6">
              <div className="bg-neutral-50 border border-black/5 rounded-[32px] p-8 text-center">
                <Mail size={24} className="mx-auto mb-4 opacity-20" />
                <h3 className="text-xl font-black italic tracking-tighter mb-2 uppercase">THE PULSE</h3>
                <p className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] uppercase mb-8">Weekly thoughts on the digital frontier.</p>
                <div className="flex flex-col gap-2 max-w-[280px] mx-auto">
                  <input type="email" placeholder="EMAIL PROTOCOL" className="w-full bg-white border border-black/10 rounded-full py-4 px-6 text-[10px] font-black tracking-widest focus:outline-none focus:border-black transition-all text-center" />
                  <button className="w-full bg-black text-white py-4 rounded-full font-black text-[10px] tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all shadow-lg">Join Transmission</button>
                </div>
              </div>

              <div className="bg-white border border-black/5 rounded-[32px] p-8 shadow-sm">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                       <h3 className="text-xs font-black uppercase tracking-[0.2em]">Direct Signal</h3>
                    </div>
                 </div>

                 {formStatus === 'success' ? (
                   <div className="py-12 text-center animate-in zoom-in">
                      <CheckCircle2 size={40} className="mx-auto mb-4 text-black" />
                      <p className="text-xs font-black uppercase tracking-widest">Signal Received</p>
                   </div>
                 ) : (
                   <form onSubmit={handleContactSubmit} className="space-y-4">
                      <input required className="w-full py-3 border-b border-black/10 focus:border-black text-xs font-medium focus:outline-none bg-transparent" placeholder="Name/Alias" />
                      <textarea required className="w-full py-3 border-b border-black/10 focus:border-black text-xs font-medium focus:outline-none bg-transparent resize-none h-24" placeholder="Message..." />
                      <button className="w-full flex items-center justify-center gap-2 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-neutral-50 border border-black/10 rounded-2xl transition-all">
                         {formStatus === 'sending' ? 'SENDING...' : 'INITIATE CONTACT'} <Send size={14} />
                      </button>
                   </form>
                 )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* --- COMPACT HORIZONTAL ONBOARDING BAR --- */}
      <div className={`fixed bottom-0 left-0 w-full z-[150] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] transform 
        ${isBottomDrawerVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Minimal backdrop (No blur) */}
        <div className={`absolute inset-0 -top-[100vh] bg-black/5 transition-opacity duration-700 pointer-events-none 
          ${isBottomDrawerVisible ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="relative bg-white border-t border-black/10 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-2.5">
              <SlashLogo size={24} className="text-black" />
              <h3 className="text-sm font-black uppercase tracking-tighter whitespace-nowrap">
                slashme<span className="text-neutral-400">.io</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://slashme.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-white px-5 py-2.5 rounded-full font-black text-[9px] tracking-[0.1em] uppercase hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                GET YOUR SLASH
              </a>
              <button 
                onClick={handleCloseDrawer}
                className="p-1.5 text-neutral-300 hover:text-black transition-colors"
                aria-label="Dismiss"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION DOCK --- */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4 transition-all duration-500 
        ${isBottomDrawerVisible ? 'bottom-24' : 'bottom-8'}`}>
          <div className="flex items-center justify-center gap-2 p-2 bg-white/80 backdrop-blur-3xl border border-black/5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-500 overflow-hidden ${activeTab === tab.id ? 'text-white flex-1' : 'text-neutral-400 hover:text-black'}`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 z-0 bg-black rounded-full animate-in fade-in" />
                )}
                <span className={`relative z-10 transition-transform duration-500 ${activeTab === tab.id ? 'scale-110' : 'scale-100'}`}>
                  {tab.icon}
                </span>
                {activeTab === tab.id && (
                  <span className="relative z-10 text-[9px] font-black uppercase tracking-wider animate-in slide-in-from-left-2 whitespace-nowrap">
                    {tab.label}
                  </span>
                )}
              </button>
            ))}
          </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-in-from-left-2 { from { transform: translateX(-6px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-in { animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both, slide-in-from-bottom-4 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes zoom-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: white; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
      `}} />
    </div>
  );
};

export default App;
