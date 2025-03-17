'use client';
import Image from 'next/image';

export interface ResponsiveNavBarProps {
  activeSection: 'projects' | 'about';
  setActiveSection: (section: 'projects' | 'about') => void;
}


export default function ResponsiveNavBar({ activeSection, setActiveSection } : ResponsiveNavBarProps) {
  return (
    <nav className="bg-green-800/40 backdrop-blur-sm border-b border-green-700/30">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logo Section */}
        <div className="py-2">
          <Image
            src="/images/JorgeLS.png"
            alt="Logo"
            width={300}
            height={56}
            className="object-contain"
          />
        </div>
        {/* Navigation Buttons */}
        <div className="flex space-x-8 pb-2">
          <button
            onClick={() => setActiveSection('projects')}
            className={`px-4 py-1 rounded text-center font-light text-2xl transition-all duration-300 ${
              activeSection === 'projects'
                ? 'text-green-400 border-b-2 border-green-400'
                : 'text-white hover:text-green-400 hover:border-b-2 hover:border-green-400/50'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`px-4 py-1 rounded text-center font-light text-2xl transition-all duration-300 ${
              activeSection === 'about'
                ? 'text-green-400 border-b-2 border-green-400'
                : 'text-white hover:text-green-400 hover:border-b-2 hover:border-green-400/50'
            }`}
          >
            Me
          </button>
        </div>
      </div>
    </nav>
  );
}
