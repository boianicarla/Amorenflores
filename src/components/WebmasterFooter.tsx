import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

export const WebmasterFooter = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-black/[0.03] py-3 px-10 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl font-black tracking-tighter text-black">
              ARTMEDIACB
            </h2>
            <p className="text-[7px] font-medium tracking-[0.3em] text-black/30 uppercase">
              Creative Portfolio
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col pt-0.5">
            <h3 className="text-[7px] font-bold tracking-[0.2em] text-black/20 uppercase mb-1">
              CONNECT
            </h3>
            <div className="flex flex-row gap-6">
              <a 
                href="mailto:artmediacb@gmail.com" 
                className="flex items-center gap-2 text-black/50 hover:text-black transition-colors group"
                aria-label="Email ARTMEDIACB"
              >
                <Mail size={10} strokeWidth={1.5} className="text-black/30 group-hover:text-black transition-colors" />
                <span className="text-[9px] lowercase tracking-tight">artmediacb@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-2 border-t border-black/[0.05]">
          <p className="text-[7px] font-medium tracking-[0.2em] text-black/20 uppercase">
            © 2026 ARTMEDIACB. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
