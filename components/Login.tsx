import React, { useState } from 'react';
import { Sparkles, Heart, KeyRound, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: (password: string) => boolean;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Start unlock animation
    setIsUnlocking(true);
    
    // Tiny delay to show animation
    setTimeout(() => {
        const success = onLogin(input);
        if (!success) {
          setError(true);
          setIsUnlocking(false);
          setInput(''); 
        }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 font-sans relative z-20">
      
      {/* Cute Card Container */}
      <div className={`
        relative w-full max-w-sm 
        bg-white/70 backdrop-blur-md 
        border-2 border-white 
        rounded-[2.5rem] 
        shadow-[0_20px_60px_-15px_rgba(255,182,193,0.5)] 
        p-8 
        animate-fade-in-up
        transition-all duration-700 ease-in-out
        ${isUnlocking ? 'scale-110 opacity-0 translate-y-[-50px] rotate-3' : 'opacity-100'}
      `}>
        
        {/* Floating Icons */}
        <div className="absolute -top-8 -left-8 text-maiden-blue animate-float">
            <Sparkles className="w-14 h-14 opacity-80" fill="#e0f2fe" />
        </div>
        <div className="absolute -bottom-6 -right-6 text-maiden-dark-pink animate-float-delayed">
            <Heart className="w-12 h-12 opacity-80" fill="#fda4af" />
        </div>

        {/* Header */}
        <div className="text-center mb-8 relative">
            <div className="inline-block p-4 rounded-full bg-gradient-to-tr from-white to-pink-50 shadow-inner mb-4 ring-4 ring-white">
                <div className="bg-gradient-to-tr from-pink-300 to-rose-300 p-3 rounded-full shadow-lg text-white">
                    <Heart className="w-8 h-8 animate-pulse-soft" fill="currentColor" />
                </div>
            </div>
            <h1 className="text-2xl font-bold text-maiden-text tracking-wider mb-2 font-cute">
                珮伊の专属 Gemini
            </h1>
            <p className="text-sm text-pink-300/80 font-medium tracking-widest uppercase">
                Magic Diary
            </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <KeyRound className={`w-5 h-5 transition-colors duration-300 ${error ? 'text-red-400' : 'text-pink-300 group-focus-within:text-pink-500'}`} />
                </div>
                <input
                    type="password"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setError(false);
                    }}
                    className={`
                        w-full bg-white/90 border-2 rounded-2xl py-3.5 pl-12 pr-4
                        text-maiden-text placeholder-pink-200
                        outline-none transition-all duration-300
                        shadow-sm
                        ${error 
                          ? 'border-red-200 bg-red-50/50 shake-animation' 
                          : 'border-pink-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100/50'}
                    `}
                    placeholder="请输入专属口令..."
                    autoFocus
                />
            </div>

            {error && (
                <div className="text-center text-xs text-red-400 font-bold animate-bounce">
                    (qcq) 哎呀，口令不对哦~
                </div>
            )}

            <button
                type="submit"
                disabled={!input}
                className={`
                    w-full mt-2
                    bg-gradient-to-r from-pink-400 to-rose-400 
                    text-white font-bold py-4 px-4 
                    rounded-2xl 
                    shadow-lg shadow-pink-200 
                    transform transition-all duration-300 
                    flex items-center justify-center gap-2
                    border-b-4 border-pink-500/20 active:border-b-0 active:translate-y-1
                    ${!input ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:-translate-y-1 hover:shadow-xl cursor-pointer'}
                `}
            >
                <span>开启旅程</span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </form>

        <div className="mt-8 text-center">
            <p className="text-[10px] text-pink-200">
               Design for Peiyi · 2026
            </p>
        </div>
      </div>
    </div>
  );
};