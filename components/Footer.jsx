import React from 'react';
import { FOOTER_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950/80 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-cyan-400 font-bold mb-6">
            Here's how you can reach us
          </h3>
          <p className="text-white/60 text-sm">
            Contact: <a href="mailto:alegria@mes.ac.in">alegria@mes.ac.in</a>
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-cyan-400 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-right">
          <div className="text-3xl font-bold text-cyan-300">ALEGRIA</div>
          <p className="text-xs text-white/30">EST. 2013</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
