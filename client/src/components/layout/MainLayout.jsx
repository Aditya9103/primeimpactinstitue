import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalBackground from './GlobalBackground';
import DotCursor from './DotCursor';
import { Phone } from 'lucide-react';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#030303] text-text-primary selection:bg-brand-yellow/30 selection:text-brand-yellow overflow-x-hidden font-sans relative">
      <DotCursor />
      <GlobalBackground />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center text-white hover:scale-110 transition-transform z-50">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
