import React, { useState, useEffect } from 'react';
import { 
  User, Link2, ShoppingCart, MessageSquare, Mail, 
  Github, Twitter, Instagram, Linkedin, Youtube,
  ArrowRight, ExternalLink, ShieldCheck, Zap, 
  Globe, Sparkles, Coffee, Send, ChevronRight,
  Clock, MapPin, CheckCircle2, Copy, Share2, X, Image as ImageIcon, Layers,
  ChevronUp, CreditCard, Box, CursorClick, Heart, Star
} from 'lucide-react';

// --- ORIGINAL SLASHME LOGO (Preserved Structure) ---
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
    { id: 'bio', icon: <ImageIcon size={20} />, label: 'Gallery' },
    { id: 'links', icon: <Link2 size={20} />, label: 'Links' },
    { id: 'store', icon: <ShoppingCart size={20} />, label: 'Vault' },
    { id: 'contact', icon: <MessageSquare size={20} />, label: 'Signal' }
  ];

  return (
    <div className={`relative min-h-screen bg-[#FFF9E5] text-[#333] selection:bg-[#FF85A1] selection:text-white font-bubble transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Decorative Background Stickers */}
      <div className="fixed top-20 left-10 opacity-20 animate-bounce-slow">
        <Star size={40} className="text-[#FFD93D] fill-current" />
      </div>
      <div className="fixed bottom-40 right-10 opacity-20 animate-bounce-slow delay-300">
        <Heart size={40} className="text-[#FF85A1] fill-current" />
      </div>

      {/* --- UTILITY STRIP (Fixed Top) --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] h-12 px-6 flex items-center bg-white border-b-4 border-[#333] transition-all duration-700 ease-out transform 
        ${isTopCtaVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <div className="flex items-center gap-3 max-w-lg mx-auto w-full">
          <SlashLogo size={20} className="text-black" />
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-black tracking-tight text-black pt-0.5">slashme.io</span>
            <div className="w-[2px] h-3 bg-black/10 rounded-full" />
            <a 
              href="https://slashme.io" 
              className="text-[10px] font-black text-[#A0A0A0] hover:text-[#FF85A1] transition-colors uppercase pt-0.5"
            >
              Get your link — Start for free
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-lg mx-auto px-6 pb-64 pt-20">
        
        {/* --- STICKER HEADER --- */}
        <header className="flex flex-col items-center mb-12 animate-pop-in">
          <div className="relative group">
            <div className="absolute -inset-2 bg-white rounded-full border-4 border-black rotate-3"></div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=FFD93D&radius=50" 
              className="relative w-28 h-28 rounded-full border-4 border-black bg-white transition-transform hover:scale-110"
              alt="Avatar"
            />
          </div>
          <h1 className="mt-8 text-3xl font-black tracking-tight text-center uppercase text-[#333] drop-shadow-[2px_2px_0_white]">
            Alex Drifter
          </h1>
          <div className="mt-3 bg-[#7BD3EA] px-4 py-1 border-2 border-black rounded-full shadow-[3px_3px_0_black]">
            <p className="text-white text-[10px] font-black tracking-widest uppercase">
              Creative Core
            </p>
          </div>
        </header>

        <div className="relative min-h-[400px]">
          
          {/* VIEW: GALLERY */}
          {activeTab === 'bio' && (
            <div className="animate-pop-in space-y-6">
              <div className="bg-white border-4 border-black rounded-[40px] p-8 shadow-[6px_6px_0_rgba(0,0,0,1)]">
                <p className="text-xl leading-relaxed font-black text-[#333]">
                  Making the <span className="text-[#FF85A1]">visual future</span> super fun with minimal systems and cool digital artifacts! 🎨
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t-4 border-black/5 pt-6">
                  <div className="flex flex-col text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Reach</span>
                    <span className="text-lg font-black text-[#7BD3EA]">120K+</span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Drops</span>
                    <span className="text-lg font-black text-[#FFD93D]">14</span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Partners</span>
                    <span className="text-lg font-black text-[#FF85A1]">28</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white border-4 border-black rounded-[30px] overflow-hidden shadow-[4px_4px_0_black] group">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Work 1" />
                </div>
                <div className="aspect-[4/5] bg-white border-4 border-black rounded-[30px] overflow-hidden shadow-[4px_4px_0_black] group">
                  <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Work 2" />
                </div>
              </div>

              <div className="flex justify-between gap-3">
                  {[Twitter, Instagram, Github].map((Icon, i) => (
                    <a key={i} href="#" className="flex-1 flex justify-center py-4 bg-white border-4 border-black rounded-3xl hover:bg-[#FFD93D] transition-all shadow-[4px_4px_0_black]">
                      <Icon size={20} strokeWidth={2.5} />
                    </a>
                  ))}
                  <button onClick={handleCopyLink} className="flex-[1.5] flex items-center justify-center gap-2 bg-[#FF85A1] text-white border-4 border-black rounded-3xl font-black text-[12px] uppercase shadow-[4px_4px_0_black] active:translate-y-1 active:shadow-none transition-all">
                    <Share2 size={18} /> {copied ? 'YAY!' : 'SHARE'}
                  </button>
              </div>
            </div>
          )}

          {/* VIEW: LINKS */}
          {activeTab === 'links' && (
            <div className="animate-pop-in space-y-4">
              {[
                { title: 'Project Archive', sub: 'The bestest projects!', color: '#7BD3EA', icon: <Layers /> },
                { title: 'Design Stuff', sub: 'Stickers & fun things', color: '#FFD93D', icon: <Zap /> },
                { title: 'Inner Circle', sub: 'Join the club house', color: '#FF85A1', icon: <MessageSquare /> }
              ].map((link, i) => (
                <a key={i} href="#" className="flex items-center gap-4 p-4 bg-white border-4 border-black rounded-[24px] hover:translate-x-2 transition-transform group shadow-[4px_4px_0_black]">
                    <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-white border-2 border-black shadow-[2px_2px_0_black]" style={{ backgroundColor: link.color }}>
                      {React.cloneElement(link.icon, { size: 24, strokeWidth: 3 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-black truncate tracking-tight">{link.title}</h4>
                      <p className="text-[10px] text-neutral-400 font-black uppercase tracking-wider">{link.sub}</p>
                    </div>
                    <ChevronRight size={24} className="text-[#333] transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </a>
              ))}
            </div>
          )}

          {/* VIEW: VAULT */}
          {activeTab === 'store' && (
            <div className="animate-pop-in space-y-8">
              <div className="relative group overflow-hidden bg-[#333] text-white rounded-[40px] p-10 border-4 border-black shadow-[8px_8px_0_#FFD93D]">
                <div className="absolute top-0 right-0 p-6">
                  <span className="bg-[#FF85A1] text-white text-[10px] font-black px-3 py-1 rounded-full border-2 border-white uppercase animate-pulse">Brand New!</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black italic tracking-tighter leading-none mb-3">OBSIDIAN UI</h3>
                  <p className="text-sm font-black text-neutral-300 max-w-[200px] mb-8">Cool shapes for your digital toys.</p>
                  <button className="flex items-center gap-2 bg-white text-[#333] px-8 py-4 rounded-full font-black text-[12px] uppercase hover:scale-105 border-4 border-black transition-all shadow-[4px_4px_0_white]">
                    Get Access — $149 <ArrowRight size={18} strokeWidth={3} />
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform">
                   <SlashLogo size={200} className="text-[#FF85A1]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border-4 border-black rounded-[30px] p-6 shadow-[5px_5px_0_#7BD3EA] group cursor-pointer active:translate-y-1">
                  <div className="w-12 h-12 bg-[#7BD3EA] rounded-2xl flex items-center justify-center mb-4 border-2 border-black text-white shadow-[2px_2px_0_black]">
                    <Zap size={24} strokeWidth={3} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-tight mb-1">Source Code</h4>
                  <p className="text-[9px] text-neutral-400 font-black uppercase tracking-widest mb-4">React + Tailwind</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black">$29</span>
                    <ShoppingCart size={20} className="text-[#7BD3EA]" strokeWidth={3} />
                  </div>
                </div>
                <div className="bg-white border-4 border-black rounded-[30px] p-6 shadow-[5px_5px_0_#FFD93D] group cursor-pointer active:translate-y-1">
                  <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-4 border-2 border-black text-white shadow-[2px_2px_0_black]">
                    <ImageIcon size={24} strokeWidth={3} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-tight mb-1">Grain Presets</h4>
                  <p className="text-[9px] text-neutral-400 font-black uppercase tracking-widest mb-4">Lightroom CC</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black">$19</span>
                    <ShoppingCart size={20} className="text-[#FFD93D]" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: SIGNAL */}
          {activeTab === 'contact' && (
            <div className="animate-pop-in space-y-6">
              <div className="bg-[#B5EAD7] border-4 border-black rounded-[40px] p-10 text-center shadow-[6px_6px_0_black]">
                <Mail size={32} className="mx-auto mb-4 text-[#333]" strokeWidth={3} />
                <h3 className="text-2xl font-black italic mb-2 uppercase tracking-tighter">THE PULSE</h3>
                <p className="text-[10px] text-[#333]/60 font-black uppercase tracking-widest mb-8">Weekly notes for the best kids.</p>
                <div className="flex flex-col gap-3 max-w-[280px] mx-auto">
                  <input type="email" placeholder="YOUR EMAIL" className="w-full bg-white border-4 border-black rounded-full py-4 px-6 text-[12px] font-black tracking-widest focus:outline-none focus:border-[#FF85A1] transition-all text-center placeholder:text-neutral-300" />
                  <button className="w-full bg-black text-white py-4 rounded-full font-black text-[12px] uppercase hover:bg-neutral-800 transition-all shadow-[4px_4px_0_rgba(255,255,255,0.2)]">Join Transmission</button>
                </div>
              </div>

              <div className="bg-white border-4 border-black rounded-[40px] p-10 shadow-[6px_6px_0_black]">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 bg-[#FF85A1] rounded-full animate-ping" />
                       <h3 className="text-xs font-black uppercase tracking-widest">Direct Signal</h3>
                    </div>
                 </div>

                 {formStatus === 'success' ? (
                   <div className="py-12 text-center animate-pop-in">
                      <CheckCircle2 size={48} className="mx-auto mb-4 text-[#B5EAD7]" strokeWidth={3} />
                      <p className="text-lg font-black">Got it! Yay!</p>
                   </div>
                 ) : (
                   <form onSubmit={handleContactSubmit} className="space-y-4">
                      <input required className="w-full py-3 border-b-4 border-black/5 focus:border-[#FFD93D] text-sm font-black focus:outline-none bg-transparent" placeholder="Who are you?" />
                      <textarea required className="w-full py-3 border-b-4 border-black/5 focus:border-[#FFD93D] text-sm font-black focus:outline-none bg-transparent resize-none h-24" placeholder="Say hi!..." />
                      <button className="w-full flex items-center justify-center gap-3 py-5 text-[12px] font-black uppercase bg-[#7BD3EA] text-white rounded-3xl border-4 border-black shadow-[4px_4px_0_black] active:translate-y-1 active:shadow-none transition-all">
                         {formStatus === 'sending' ? 'SENDING...' : 'SAY HELLO!'} <Send size={18} strokeWidth={3} />
                      </button>
                   </form>
                 )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* --- STATIONERY ONBOARDING BAR --- */}
      <div className={`fixed bottom-0 left-0 w-full z-[150] transition-all duration-700 ease-out transform 
        ${isBottomDrawerVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Subtle Backdrop (NO BLUR) */}
        <div className={`absolute inset-0 -top-[100vh] bg-black/5 transition-opacity duration-700 pointer-events-none 
          ${isBottomDrawerVisible ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="relative bg-white border-t-4 border-black p-5 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <SlashLogo size={28} className="text-black" />
              <div className="hidden sm:block">
                <h3 className="text-sm font-black uppercase tracking-tighter text-black">
                  slash me<span className="text-[#FF85A1]">.io</span>
                </h3>
                <p className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Official Registry</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://slashme.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-white px-6 py-3 rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-[#FF85A1] active:scale-95 transition-all shadow-[4px_4px_0_#7BD3EA]"
              >
                JOIN THE GUILD
              </a>
              <button 
                onClick={handleCloseDrawer}
                className="p-1.5 text-neutral-300 hover:text-black transition-colors"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION DOCK --- */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4 transition-all duration-500 
        ${isBottomDrawerVisible ? 'bottom-28' : 'bottom-10'}`}>
          <div className="flex items-center justify-around p-3 bg-white border-4 border-black rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group relative flex items-center gap-2 p-3 rounded-full transition-all duration-300 ${activeTab === tab.id ? 'bg-[#333] text-white px-6' : 'text-[#333] hover:bg-neutral-100'}`}
              >
                <span className={`relative z-10 ${activeTab === tab.id ? 'scale-110' : 'scale-100'}`}>
                  {tab.icon}
                </span>
                {activeTab === tab.id && (
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-wider animate-in slide-in-from-left-2 whitespace-nowrap">
                    {tab.label}
                  </span>
                )}
              </button>
            ))}
          </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Fredoka', sans-serif; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pop-in { 
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          70% { transform: scale(1.02) translateY(-2px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #FFF9E5; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; border: 2px solid #FFF9E5; }
      `}} />
    </div>
  );
};

export default App;
