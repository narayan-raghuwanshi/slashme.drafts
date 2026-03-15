import React, { useState, useEffect } from 'react';
import { 
  User, Link2, ShoppingCart, MessageSquare, Mail, 
  Github, Twitter, Instagram, Linkedin, Youtube,
  ArrowRight, ExternalLink, ShieldCheck, Zap, 
  Globe, Sparkles, Coffee, Send, ChevronRight,
  Clock, MapPin, CheckCircle2, Copy, Share2, X, Image as ImageIcon, Layers,
  ChevronUp, CreditCard, Box, CursorClick
} from 'lucide-react';

// --- VINTAGE SEAL LOGO COMPONENT ---
const SlashLogo = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="48" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M45 25L32 75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
    <path d="M68 25L55 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
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
    // Show onboarding drawer after a short delay
    const timer = setTimeout(() => {
      setIsBottomDrawerVisible(true);
    }, 800);

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
    { id: 'bio', icon: <ImageIcon size={18} />, label: 'Journal' },
    { id: 'links', icon: <Link2 size={18} />, label: 'Index' },
    { id: 'store', icon: <ShoppingCart size={18} />, label: 'Archive' },
    { id: 'contact', icon: <MessageSquare size={18} />, label: 'Dispatch' }
  ];

  return (
    <div className={`relative min-h-screen bg-[#f4f1ea] text-[#2c2c2c] selection:bg-[#8b4513] selection:text-white font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[200] contrast-150 grayscale" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}></div>

      {/* --- TELEGRAM STRIP (Fixed Top) --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] h-12 px-6 flex items-center bg-[#f4f1ea]/90 backdrop-blur-sm border-b border-[#2c2c2c]/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform 
        ${isTopCtaVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        
        <div className="flex items-center gap-3 w-full max-w-lg mx-auto">
          <SlashLogo size={20} className="text-[#2c2c2c]" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-tight font-mono text-[#2c2c2c]">CATALOG_NO. 882</span>
            <div className="w-[1px] h-3 bg-[#2c2c2c]/20" />
            <a 
              href="https://slashme.io" 
              className="text-[9px] font-bold tracking-widest text-stone-500 hover:text-[#8b4513] transition-colors uppercase pt-0.5"
            >
              Reserve your stationery — EST. 2024
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-lg mx-auto px-6 pb-64 pt-24">
        
        {/* --- PORTRAIT HEADER --- */}
        <header className="flex flex-col items-center mb-12 animate-in">
          <div className="relative p-1.5 bg-white border border-stone-300 shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=f4f1ea&mouth=serious&eyes=default" 
              className="w-28 h-28 grayscale contrast-125 sepia-[0.3]"
              alt="Portrait"
            />
            <div className="absolute inset-0 bg-[#8b4513]/5 pointer-events-none"></div>
          </div>
          <h1 className="mt-8 text-3xl font-normal tracking-tight text-center italic font-serif">Alex Drifter</h1>
          <div className="mt-3 flex items-center gap-3 w-full justify-center">
            <div className="h-[1px] flex-1 bg-stone-300 max-w-[40px]"></div>
            <p className="text-[#8b4513] text-[10px] font-bold tracking-[0.4em] uppercase text-center font-mono">
              Curator of Form
            </p>
            <div className="h-[1px] flex-1 bg-stone-300 max-w-[40px]"></div>
          </div>
        </header>

        <div className="relative min-h-[400px]">
          
          {/* VIEW: JOURNAL / GALLERY */}
          {activeTab === 'bio' && (
            <div className="animate-in space-y-8">
              <div className="relative bg-white/50 border border-stone-300 rounded-lg p-8 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-stone-400 opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-stone-400 opacity-40"></div>
                
                <p className="text-xl leading-relaxed font-serif text-[#2c2c2c] italic first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:mt-1">
                  Documenting the quiet intersection of <span className="underline decoration-stone-400 underline-offset-8 decoration-dashed">traditional craft</span> and digital ephemera.
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">Circulation</span>
                    <span className="text-lg font-serif italic">120k</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">Folios</span>
                    <span className="text-lg font-serif italic">14</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">Guilds</span>
                    <span className="text-lg font-serif italic">28</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white p-2 border border-stone-300 shadow-sm relative group">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale sepia-[0.4] brightness-90 group-hover:sepia-0 transition-all duration-700" alt="Work 1" />
                </div>
                <div className="aspect-[4/5] bg-white p-2 border border-stone-300 shadow-sm relative group">
                  <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale sepia-[0.4] brightness-90 group-hover:sepia-0 transition-all duration-700" alt="Work 2" />
                </div>
              </div>

              <div className="flex justify-between gap-3">
                  {[Twitter, Instagram, Github].map((Icon, i) => (
                    <a key={i} href="#" className="flex-1 flex justify-center py-4 bg-white/40 border border-stone-300 rounded-lg transition-all hover:bg-[#2c2c2c] hover:text-white text-stone-600 shadow-inner">
                      <Icon size={16} strokeWidth={1.5} />
                    </a>
                  ))}
                  <button onClick={handleCopyLink} className="flex-[1.5] flex items-center justify-center gap-2 bg-[#2c2c2c] text-[#f4f1ea] rounded-lg font-mono text-[10px] tracking-widest uppercase active:scale-95 transition-all shadow-md">
                    <Share2 size={14} /> {copied ? 'REGISTERED' : 'DISPATCH'}
                  </button>
              </div>
            </div>
          )}

          {/* VIEW: INDEX (LINKS) */}
          {activeTab === 'links' && (
            <div className="animate-in space-y-4">
              {[
                { title: 'The Archives', sub: 'A collection of visual works', icon: <Layers /> },
                { title: 'Printing House', sub: 'Resources for the modern guild', icon: <Zap /> },
                { title: 'Public Notice', sub: 'Join the community circle', icon: <MessageSquare /> }
              ].map((link, i) => (
                <a key={i} href="#" className="flex items-center gap-5 p-5 bg-white border border-stone-300 rounded-lg hover:border-stone-500 transition-all group shadow-sm">
                    <div className="w-12 h-12 border border-stone-200 rounded-full flex-shrink-0 flex items-center justify-center text-stone-400 group-hover:bg-[#2c2c2c] group-hover:text-white transition-all">
                      {React.cloneElement(link.icon, { size: 18, strokeWidth: 1 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-serif italic truncate tracking-tight">{link.title}</h4>
                      <p className="text-[10px] text-stone-400 truncate mt-0.5 uppercase tracking-widest font-mono">{link.sub}</p>
                    </div>
                    <ArrowRight size={14} className="text-stone-300 group-hover:text-[#2c2c2c] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          )}

          {/* VIEW: ARCHIVE (STORE) */}
          {activeTab === 'store' && (
            <div className="animate-in space-y-8">
              <div className="relative group overflow-hidden bg-[#2c2c2c] text-[#f4f1ea] rounded-lg p-10 shadow-xl border-4 border-double border-white/20">
                <div className="absolute top-0 right-0 p-6">
                  <span className="bg-[#8b4513] text-white text-[8px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-[0.2em] font-mono">New Folio</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif italic tracking-tighter leading-none mb-3">OBSIDIAN UI</h3>
                  <p className="text-sm text-stone-400 max-w-[220px] mb-8 font-serif italic opacity-80">A definitive design system for the digital renaissance.</p>
                  <button className="flex items-center gap-3 bg-[#f4f1ea] text-[#2c2c2c] px-8 py-3 rounded-sm font-mono text-[10px] tracking-widest uppercase hover:scale-105 transition-all shadow-lg">
                    Purchase — $149 <ArrowRight size={14} />
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 transform rotate-12 group-hover:rotate-3 transition-transform duration-1000">
                   <SlashLogo size={240} className="text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white border border-stone-300 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#2c2c2c] group-hover:text-white transition-all">
                    <Zap size={18} strokeWidth={1} />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1 font-mono">Source Script</h4>
                  <p className="text-[9px] text-stone-400 font-bold tracking-widest uppercase mb-6">Type: React/Tailwind</p>
                  <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-sm font-serif italic">$29</span>
                    <ShoppingCart size={14} className="text-stone-300 group-hover:text-[#2c2c2c]" />
                  </div>
                </div>
                <div className="bg-white border border-stone-300 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#2c2c2c] group-hover:text-white transition-all">
                    <ImageIcon size={18} strokeWidth={1} />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1 font-mono">Grain Texture</h4>
                  <p className="text-[9px] text-stone-400 font-bold tracking-widest uppercase mb-6">Type: Devotion Series</p>
                  <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-sm font-serif italic">$19</span>
                    <ShoppingCart size={14} className="text-stone-300 group-hover:text-[#2c2c2c]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: DISPATCH (CONTACT) */}
          {activeTab === 'contact' && (
            <div className="animate-in space-y-8">
              <div className="bg-white/40 border border-stone-300 rounded-lg p-10 text-center shadow-inner relative">
                <div className="absolute inset-0 border-[10px] border-white/30 pointer-events-none"></div>
                <Mail size={24} className="mx-auto mb-6 text-stone-300" strokeWidth={1} />
                <h3 className="text-2xl font-serif italic tracking-tighter mb-2 uppercase">The Gazette</h3>
                <p className="text-[10px] text-stone-500 font-bold tracking-[0.3em] uppercase mb-10 font-mono">Weekly dispatches to your station.</p>
                <div className="flex flex-col gap-3 max-w-[300px] mx-auto relative z-10">
                  <input type="email" placeholder="ADDRESS_PROTOCOL" className="w-full bg-white border border-stone-300 rounded-sm py-4 px-6 text-[10px] font-mono tracking-widest focus:outline-none focus:border-[#2c2c2c] transition-all text-center" />
                  <button className="w-full bg-[#2c2c2c] text-[#f4f1ea] py-4 rounded-sm font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-black transition-all shadow-md">Subscribe</button>
                </div>
              </div>

              <div className="bg-white border border-stone-300 rounded-lg p-8 shadow-sm">
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-[#8b4513] rounded-full shadow-[0_0_8px_rgba(139,69,19,0.5)]" />
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Signal Station</h3>
                    </div>
                 </div>

                 {formStatus === 'success' ? (
                   <div className="py-12 text-center animate-in zoom-in">
                      <CheckCircle2 size={40} className="mx-auto mb-6 text-[#2c2c2c]" strokeWidth={1} />
                      <p className="text-sm font-serif italic tracking-wide text-stone-600">Transmission received. Standing by.</p>
                   </div>
                 ) : (
                   <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-stone-400 font-mono">Sender Name</label>
                        <input required className="w-full py-2 border-b border-stone-200 focus:border-[#2c2c2c] text-sm font-serif italic focus:outline-none bg-transparent" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-stone-400 font-mono">Message Data</label>
                        <textarea required className="w-full py-2 border-b border-stone-200 focus:border-[#2c2c2c] text-sm font-serif italic focus:outline-none bg-transparent resize-none h-24" placeholder="Requesting collaboration..." />
                      </div>
                      <button className="w-full flex items-center justify-center gap-3 py-5 text-[10px] font-mono font-bold uppercase tracking-[0.4em] hover:bg-[#2c2c2c] hover:text-white border border-[#2c2c2c] rounded-sm transition-all shadow-sm">
                         {formStatus === 'sending' ? 'TRANSMITTING...' : 'SEND SIGNAL'} <Send size={14} />
                      </button>
                   </form>
                 )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* --- STATIONERY ONBOARDING BAR --- */}
      <div className={`fixed bottom-0 left-0 w-full z-[150] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] transform 
        ${isBottomDrawerVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Parchment backdrop overlay (BLUR REMOVED) */}
        <div className={`absolute inset-0 -top-[100vh] bg-stone-900/5 transition-opacity duration-1000 pointer-events-none 
          ${isBottomDrawerVisible ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="relative bg-[#f4f1ea] border-t border-stone-300 p-5 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale contrast-150" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/pinstripe.png')` }}></div>
          
          <div className="max-w-lg mx-auto flex items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-3">
              <SlashLogo size={28} className="text-[#2c2c2c]" />
              <div className="flex flex-col">
                <h3 className="text-xs font-bold uppercase tracking-tight font-mono text-[#2c2c2c]">
                  SLASH ME STATIONERY
                </h3>
                <span className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Official Registry</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://slashme.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#2c2c2c] text-[#f4f1ea] px-6 py-3 rounded-sm font-mono font-bold text-[9px] tracking-[0.2em] uppercase hover:bg-black active:scale-95 transition-all shadow-md"
              >
                JOIN THE GUILD
              </a>
              <button 
                onClick={handleCloseDrawer}
                className="p-2 text-stone-400 hover:text-[#2c2c2c] transition-colors"
                aria-label="Dismiss"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING NAVIGATION DOCK --- */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[340px] px-4 transition-all duration-700 
        ${isBottomDrawerVisible ? 'bottom-28' : 'bottom-10'}`}>
          <div className="flex items-center justify-between p-2.5 bg-white/70 backdrop-blur-xl border border-stone-300 rounded-full shadow-[0_15px_45px_rgba(44,44,44,0.12)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex items-center gap-2 px-5 py-3.5 rounded-full transition-all duration-700 overflow-hidden ${activeTab === tab.id ? 'text-[#f4f1ea] flex-1' : 'text-stone-400 hover:text-[#2c2c2c]'}`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 z-0 bg-[#2c2c2c] rounded-full animate-in fade-in" />
                )}
                <span className={`relative z-10 transition-all duration-700 ${activeTab === tab.id ? 'scale-110' : 'scale-100 opacity-60'}`}>
                  {tab.icon}
                </span>
                {activeTab === tab.id && (
                  <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] font-mono animate-in slide-in-from-left-3 whitespace-nowrap">
                    {tab.label}
                  </span>
                )}
              </button>
            ))}
          </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        html { 
          scroll-behavior: smooth; 
          background-color: #f4f1ea;
        }
        
        body {
          font-family: 'Playfair Display', serif;
        }

        .font-mono {
          font-family: 'IBM Plex Mono', monospace;
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-6 { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-in-from-left-3 { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        
        .animate-in { 
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) both, 
                     slide-in-from-bottom-6 1s cubic-bezier(0.16, 1, 0.3, 1) both; 
        }

        main::after {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.05;
          pointer-events: none;
          z-index: 999;
          background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f4f1ea; }
        ::-webkit-scrollbar-thumb { background: #dcd4c1; border-radius: 0; border: 1px solid #f4f1ea; }
        ::-webkit-scrollbar-thumb:hover { background: #2c2c2c; }
      `}} />
    </div>
  );
};

export default App;
