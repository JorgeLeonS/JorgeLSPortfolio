'use client';
import Image from 'next/image';

export interface ResponsiveNavBarProps {
  activeSection: 'projects' | 'about';
  setActiveSection: (section: 'projects' | 'about') => void;
}


export default function ResponsiveNavBar({ activeSection, setActiveSection } : ResponsiveNavBarProps) {
  return (
    <nav className="bg-darkest-green text-green-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logo Section */}
        <div className="py-4">
          <Image
            src="/images/JorgeLS.png"
            alt="Logo"
            width={400}
            height={75}
            className="object-contain"
          />
        </div>
        {/* Navigation Buttons */}
        <div className="flex space-x-8 pb-4">
          <button
            onClick={() => setActiveSection('projects')}
            className={`px-4 py-2 rounded text-center font-light text-3xl transition-all duration-300 ${
              activeSection === 'projects'
                ? 'border-b-4 border-green-700'
                : 'hover:border-b-4 hover:border-green-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`px-4 py-2 rounded text-center font-light text-3xl transition-all duration-300 ${
              activeSection === 'about'
                ? 'border-b-4 border-green-700'
                : 'hover:border-b-4 hover:border-green-700'
            }`}
          >
            Me
          </button>
        </div>
      </div>
    </nav>
  );
}
