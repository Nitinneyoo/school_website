import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flag } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RepublicDayBannerProps {
  variant?: 'hero' | 'minimal';
}

export function RepublicDayBanner({ variant = 'hero' }: RepublicDayBannerProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Check if today is Republic Day (January 26)
  const isRepublicDay = () => {
    const today = new Date();
    const month = today.getMonth(); // 0-indexed (0 = January)
    const date = today.getDate();
    
    // Show on January 26th
    return month === 0 && date === 26;
    // return true;
  };

  useEffect(() => {
    if (isRepublicDay()) {
      // Trigger confetti animation after mount
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, []);

  // Don't render if it's not Republic Day
  if (!isRepublicDay()) {
    return null;
  }

  if (variant === 'minimal') {
    return (
      <>
        {/* Animated background pattern */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Floating paint splashes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-20 w-32 h-32 opacity-10"
            style={{
              backgroundImage: 'url(/tricolor_splash.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 left-20 w-40 h-40 opacity-10"
            style={{
              backgroundImage: 'url(/tricolor_splash.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </>
    );
  }

  // Hero variant - MAXIMUM JOSH! 🔥
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          type: "spring",
          bounce: 0.4 
        }}
        className="relative px-4 pt-32 pb-12 mb-16 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating tricolor particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i % 3 === 0 ? '#FF9933' : i % 3 === 1 ? '#FFFFFF' : '#138808',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Top Badge with Animation */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500/30 via-white/30 to-green-500/30 border-2 border-white/30 backdrop-blur-xl shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Flag className="w-6 h-6 text-orange-400" />
              </motion.div>
              <span className="text-lg font-black tracking-widest uppercase bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                🇮🇳 Happy Republic Day 2026 🇮🇳
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Graffiti Blast Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: JAI HIND Blast */}
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ 
                delay: 0.5, 
                type: "spring",
                bounce: 0.6,
                duration: 1.5
              }}
              className="relative group"
            >
              {/* Glowing effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-white to-green-500 blur-3xl opacity-50"
              />
              
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/republic_day_blast.png"
                  alt="JAI HIND - Republic Day Celebration"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating hearts */}
              <motion.div
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-5 -right-5"
              >
                <Heart className="w-10 h-10 text-red-500 fill-red-500" />
              </motion.div>
            </motion.div>

            {/* Right: 26 JANUARY */}
            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ 
                delay: 0.7, 
                type: "spring",
                bounce: 0.6,
                duration: 1.5
              }}
              className="relative group"
            >
              {/* Glowing effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -inset-4 bg-gradient-to-r from-green-500 via-white to-orange-500 blur-3xl opacity-50"
              />
              
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/republic_day_26_jan.png"
                  alt="26 January - Republic Day"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Message with Pulse Animation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="text-center mt-12 space-y-4"
          >
            <motion.h2
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl md:text-6xl font-black"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500">
                Celebrating 77 Years
              </span>
              <br />
              <span className="text-white">of Democracy & Freedom</span>
            </motion.h2>
            
            <motion.p
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto"
            >
              Honoring the spirit of our Constitution and the values that make India great! 🇮🇳
            </motion.p>

            {/* Patriotic Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="pt-6 border-t border-white/10 max-w-2xl mx-auto"
            >
              <p className="text-lg text-orange-300 font-semibold italic">
                "We are Indians, firstly and lastly."
              </p>
              <p className="text-sm text-gray-400 mt-2">- Dr. B.R. Ambedkar</p>
            </motion.div>
          </motion.div>

          {/* Animated Confetti Effect */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  className="absolute w-2 h-2"
                  style={{
                    background: i % 3 === 0 ? '#FF9933' : i % 3 === 1 ? '#FFFFFF' : '#138808',
                    left: `${Math.random() * 100}%`,
                    top: '-10%',
                  }}
                  animate={{
                    y: ['0vh', '110vh'],
                    x: [0, Math.random() * 100 - 50],
                    rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Decorative paint splashes in corners */}
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url(/tricolor_splash.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <motion.div
          animate={{
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url(/tricolor_splash.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleX(-1)',
          }}
        />
      </motion.section>
    </AnimatePresence>
  );
}
