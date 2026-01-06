import React from 'react';

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-br from-[#f0f9ff] via-[#fff1f2] to-[#fdf4ff]">
      
      {/* Floating Circles/Blur blobs */}
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-[40%] left-[50%] w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft"></div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
            backgroundImage: `radial-gradient(#fda4af 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
        }}
      ></div>

      {/* CSS Shapes (Clouds/Stars) */}
      <style>{`
        .cloud-shape {
          background: white;
          border-radius: 50px;
          position: absolute;
          opacity: 0.6;
        }
        .cloud-shape::after, .cloud-shape::before {
          content: '';
          position: absolute;
          background: inherit;
          border-radius: 50%;
        }
      `}</style>

      {/* Cloud 1 */}
      <div className="absolute top-[15%] left-[5%] opacity-40 animate-float" style={{ animationDuration: '8s' }}>
         <svg width="100" height="60" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
             <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M19,16.5 c0-2.48-2.02-4.5-4.5-4.5c-0.29,0-0.57,0.03-0.84,0.09C13.29,9.98,11.23,8,8.5,8c-3.03,0-5.5,2.47-5.5,5.5c0,0.11,0,0.22,0.01,0.33 C1.25,14.41,0,16.05,0,18c0,2.76,2.24,5,5,5h12.5c2.48,0,4.5-2.02,4.5-4.5S19.98,14.5,19,16.5z"/>
         </svg>
      </div>

      {/* Cloud 2 */}
      <div className="absolute bottom-[25%] right-[5%] opacity-30 animate-float-delayed" style={{ animationDuration: '10s' }}>
         <svg width="120" height="80" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
             <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M19,16.5 c0-2.48-2.02-4.5-4.5-4.5c-0.29,0-0.57,0.03-0.84,0.09C13.29,9.98,11.23,8,8.5,8c-3.03,0-5.5,2.47-5.5,5.5c0,0.11,0,0.22,0.01,0.33 C1.25,14.41,0,16.05,0,18c0,2.76,2.24,5,5,5h12.5c2.48,0,4.5-2.02,4.5-4.5S19.98,14.5,19,16.5z"/>
         </svg>
      </div>

    </div>
  );
};