import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      <div className="hidden md:flex gap-8 text-xs uppercase">
        <a href="#">Artists</a>
        <a href="#">Events</a>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-cyan-300">ALEGRIA</div>
        <div className="text-[8px] tracking-widest text-cyan-500">
          THREADS OF TIME
        </div>
      </div>

      <div className="flex gap-8 text-xs uppercase">
        <a href="#">About Us</a>
        <a href="#">More</a>
      </div>
    </nav>
  );
};

export default Navbar;
