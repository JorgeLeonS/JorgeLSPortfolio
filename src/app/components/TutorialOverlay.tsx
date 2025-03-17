'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

export default function TutorialOverlay() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Check if the user has seen the tutorial before
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
      // Mark tutorial as seen
      localStorage.setItem('hasSeenTutorial', 'true');
    }
  }, []);

  const handleClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setShowTutorial(false);
    }
  };

  return (
    <AnimatePresence>
      {showTutorial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleClick}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="swipe"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-green-900/40 backdrop-blur-sm p-6 rounded-lg border border-green-700/30">
                    <p className="text-green-200 text-xl font-medium mb-4">Swipe to see more projects</p>
                    <ArrowsRightLeftIcon className="w-12 h-12 mx-auto text-green-400 animate-pulse" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="touch"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-green-900/40 backdrop-blur-sm p-6 rounded-lg border border-green-700/30">
                    <p className="text-green-200 text-xl font-medium mb-4">Touch to see project details</p>
                    <div className="w-12 h-12 mx-auto border-2 border-green-400 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 