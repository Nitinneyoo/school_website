import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Gamepad2,  Calculator, BookOpen, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SnakeGame } from '@/components/games/SnakeGame';
import { MathGame } from '@/components/games/MathGame';
import { WordGame } from '@/components/games/WordGame';

export const Route = createFileRoute('/games')({
  component: GamesPage,
});

function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<'snake' | 'math' | 'words' | null>(null);

  // If a game is selected, show the game view with a back button
  if (selectedGame) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <button 
          onClick={() => setSelectedGame(null)}
          className="mb-8 flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Arcade
        </button>
        
        <div className="glass-card rounded-3xl p-8 min-h-[600px] border-white/10 shadow-2xl relative overflow-hidden">
           {selectedGame === 'snake' && <SnakeGame onBack={() => setSelectedGame(null)} />}
           {selectedGame === 'math' && <MathGame onBack={() => setSelectedGame(null)} />}
           {selectedGame === 'words' && <WordGame onBack={() => setSelectedGame(null)} />}
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* Hero Header */}
      <div className="text-center space-y-6 mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold tracking-widest uppercase mb-4"
        >
          <Gamepad2 className="w-4 h-4" />
          <span>Student Arcade</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">ZONE</span>
        </motion.h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Level up your skills. Select a challenge to begin.
        </p>
      </div>

      {/* Game Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Snake Card */}
        <GameCard 
          title="Neon Snake"
          desc="Reflexes & Strategy"
          icon={<Gamepad2 className="w-12 h-12 text-green-400" />}
          gradient="group-hover:from-green-500/20 group-hover:to-emerald-500/20"
          borderColor="group-hover:border-green-500/50"
          onClick={() => setSelectedGame('snake')}
        />

        {/* Math Card */}
        <GameCard 
          title="Cyber Math"
          desc="Logic & Calculation"
          icon={<Calculator className="w-12 h-12 text-blue-400" />}
          gradient="group-hover:from-blue-500/20 group-hover:to-cyan-500/20"
          borderColor="group-hover:border-blue-500/50"
          onClick={() => setSelectedGame('math')}
        />

        {/* Word Card */}
        <GameCard 
          title="Word Matrix"
          desc="Vocabulary & Speed"
          icon={<BookOpen className="w-12 h-12 text-pink-400" />}
          gradient="group-hover:from-pink-500/20 group-hover:to-rose-500/20"
          borderColor="group-hover:border-pink-500/50"
          onClick={() => setSelectedGame('words')}
        />

      </div>
      
      {/* High Scores Link */}
      {/* <div className="text-center mt-16">
         <Link 
            to="/resultss"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors backdrop-blur-md group"
         >
            <Trophy className="w-5 h-5 text-yellow-500 group-hover:animate-bounce" />
            <span className="font-bold tracking-wide">View Leaderboards</span>
         </Link>
      </div> */}

    </div>
  );
}

function GameCard({ title, desc, icon, gradient, borderColor, onClick }: any) {
  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group w-full text-left p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-colors ${borderColor}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10 space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <div>
           <h3 className="text-3xl font-black text-white mb-2">{title}</h3>
           <p className="text-gray-400 font-medium">{desc}</p>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
           <span>Play Now</span>
           <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </motion.button>
  )
}
