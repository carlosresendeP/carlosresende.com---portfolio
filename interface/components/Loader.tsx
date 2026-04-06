import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-void flex flex-col items-center justify-center font-mono"
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-8">
        <div className="flex justify-between w-full mb-2 text-[10px] text-accent">
          <span>INICIANDO_SISTEMA...</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-accent"
            initial={{ x: '-100%' }}
            animate={{ x: `${progress - 100}%` }}
          />
        </div>
        <div className="mt-4 text-[8px] text-muted tracking-widest uppercase text-center">
          Carlos.Resende // Arquiteto_Fullstack
        </div>
      </div>
    </motion.div>
  );
};
