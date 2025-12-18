import React from 'react';

const PassCard = ({ pass }) => {
  const isCombo = pass.type === 'combo';

  return (
    <div className="relative group w-full max-w-5xl  mx-auto mb-16">
      {/* Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Scanner */}
        {/* <div className="scanner-effect"></div> */}
<div className="relative bg-[#010c14]/90 rounded-2xl overflow-hidden 
                flex flex-col md:flex-row h-[300px] shadow-2xl 
                card-3d card-border">

        {/* LEFT: FULL IMAGE SECTION */}
        <div className="relative flex-[3] h-80 md:h-auto overflow-hidden">
          <img
            src={pass.image}
            alt={pass.title}
            className="absolute inset-0 w-full h-full object-cover 
                       grayscale brightness-75
                       group-hover:grayscale-0 group-hover:brightness-100
                       group-hover:scale-105 transition-all duration-700"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Title overlay */}
          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
              {pass.title}
            </h2>
          </div>
        </div>

        {/* RIGHT: ACTION SECTION */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center">
          <p className="text-xs uppercase text-white/30 mb-4">
            Digital Pass
          </p>

          <p className="text-2xl font-orbitron font-bold text-cyan-400 text-center">
            {isCombo ? 'DUAL-PHASE ACCESS' : 'TIER-1 ADMIT'}
          </p>

          <button className="mt-6 px-8 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition">
            GET ACCESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassCard;
