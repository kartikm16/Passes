import React from 'react';
import Navbar from './components/Navbar';
import PassCard from './components/PassCard';
import Footer from './components/Footer';
import { PASSES } from './constants';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PersistentFish from './components/PersistentFish';
import InteractiveFish from './components/InteractiveFish';
import LiquidEther from './components/LiquidEther';
import LiquidEffect from './pages/LiquidEffect';


const App = () => {
  return (
   <Router> <div style={{ width: '100%', height: 600, position: 'relative' }}>

   <LiquidEther
    colors={[ '#2937ff', '#2937ff', '#c2bfd9' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />

    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Background layer 1 */}
      <div className="fixed inset-0 w-full h-full -z-30 overflow-hidden">
        
      </div>

      {/* Background layer 2 */}
      {/* <div className="atlantis-bg opacity-40"></div>
      <div className="wave-overlay"></div> */}



      {/* <PersistentFish /> */}
      {Array.from({ length: 5 }).map((_, i) => (
        <InteractiveFish key={i} id={i} />
      ))}
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[-5]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full blur-xl animate-pulse"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 5 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* <Navbar /> */}
      <Routes>
            <Route path="/liq" element={<LiquidEffect />} />
          </Routes>
      
      <main className="flex-grow pt-40 pb-20 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-32 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 blur-[150px] rounded-full -z-10"></div>

            <span className="text-cyan-400 font-orbitron text-xs tracking-[1em] uppercase block">
              Waves of Atlantis
            </span>

            <h1
  className="
    relative
    text-7xl md:text-[12rem]
    font-cinzel font-extrabold
    tracking-[0.15em]
    text-transparent bg-clip-text
    bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-700
    drop-shadow-[0_10px_40px_rgba(0,255,255,0.25)]
  "
>
  PASSES

  {/* Soft glow aura */}
  <span
    className="
      absolute inset-0
      text-cyan-400/30
      blur-2xl
      -z-10
      tracking-[0.15em]
    "
  >
    PASSES
  </span>
</h1>

          </section>

          <section className="space-y-24">
            {PASSES.map((pass) => (
              <PassCard key={pass.id} pass={pass} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
    </div>
    </Router>
  );
};

export default App;
