import React from 'react';
import { LogOut, Stars, Cloud } from 'lucide-react';

interface ChatInterfaceProps {
  onLogout: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col h-full w-full bg-transparent relative z-20">
      
      {/* Cute Header */}
      <header className="flex-none h-16 bg-white/60 backdrop-blur-md border-b border-white/50 flex items-center justify-between px-4 z-30 shadow-sm">
        
        {/* Branding */}
        <div className="flex items-center gap-3">
            <div className="bg-pink-100 p-2 rounded-xl text-pink-500">
                <Stars className="w-5 h-5" fill="currentColor" />
            </div>
            <h1 className="text-lg font-cute font-bold text-maiden-text tracking-wide">
                珮伊の专属 Gemini
            </h1>
        </div>

        {/* Logout */}
        <button 
            onClick={onLogout}
            className="
                group flex items-center gap-2 px-4 py-1.5 
                rounded-full bg-white border border-pink-100 
                shadow-sm hover:shadow-md hover:bg-pink-50
                transition-all duration-300
                text-sm font-medium text-pink-400 hover:text-pink-500
            "
        >
            <span className="hidden sm:inline">悄悄离开</span>
            <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden w-full flex flex-col p-2 sm:p-4">
        {/* Chat Container with cute border */}
        <div className="flex-1 w-full h-full relative bg-white/40 backdrop-blur-sm rounded-3xl border-2 border-white shadow-xl overflow-hidden">
            
            {/* Decorative cloud inside container */}
            <div className="absolute top-[-20px] left-[20px] text-white opacity-40 z-0 pointer-events-none">
                <Cloud className="w-32 h-32" fill="currentColor" />
            </div>

            <iframe
                src="https://udify.app/chatbot/3GHTKiJAdShhHyUl"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                allow="microphone"
                title="Dify Chatbot"
                className="absolute inset-0 w-full h-full z-10"
            />
        </div>
      </main>
    </div>
  );
};