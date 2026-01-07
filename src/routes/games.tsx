import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Gamepad2, Trophy, Zap, Home, Brain, Calculator, BookOpen } from 'lucide-react';
import { SnakeGame } from '@/components/games/SnakeGame';
import { MathGame } from '@/components/games/MathGame';
import { WordGame } from '@/components/games/WordGame';

export const Route = createFileRoute('/games')({
  component: GamesPage,
});

function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<'snake' | 'math' | 'words' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
      {/* Energetic Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-3 mb-4">
              <Zap className="h-10 w-10 animate-bounce text-yellow-300" />
              <Gamepad2 className="h-16 w-16 animate-pulse" />
              <Zap className="h-10 w-10 animate-bounce delay-150 text-yellow-300" />
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight drop-shadow-lg">
              🎮 GAME ZONE 🎮
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-yellow-100">
              Learn & Play - Have Fun While Learning! ⚡
            </p>
            
            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/resultss"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all hover:scale-105 font-bold"
              >
                <Trophy className="h-5 w-5" />
                View Results
              </Link>
              <a
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all hover:scale-105 font-bold"
              >
                <Home className="h-5 w-5" />
                Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Game Selection or Game Play */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedGame ? (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Choose Your Game! 🎯
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Pick a game and start learning while having fun!
              </p>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Snake Game */}
              <button
                onClick={() => setSelectedGame('snake')}
                className="group bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-left"
              >
                <Gamepad2 className="h-16 w-16 text-white mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-black text-white mb-2">Snake Game</h3>
                <p className="text-green-100 mb-4">Classic snake game for hand-eye coordination!</p>
                <div className="flex items-center gap-2 text-yellow-300 font-bold">
                  <Trophy className="h-5 w-5" />
                  <span>Fun & Focus</span>
                </div>
              </button>

              {/* Math Quiz */}
              <button
                onClick={() => setSelectedGame('math')}
                className="group bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-left"
              >
                <Calculator className="h-16 w-16 text-white mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-black text-white mb-2">Math Challenge</h3>
                <p className="text-blue-100 mb-4">Solve math problems and improve your skills!</p>
                <div className="flex items-center gap-2 text-yellow-300 font-bold">
                  <Brain className="h-5 w-5" />
                  <span>Learn Math</span>
                </div>
              </button>

              {/* Word Scramble */}
              <button
                onClick={() => setSelectedGame('words')}
                className="group bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-left"
              >
                <BookOpen className="h-16 w-16 text-white mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-black text-white mb-2">Word Scramble</h3>
                <p className="text-pink-100 mb-4">Unscramble words and boost vocabulary!</p>
                <div className="flex items-center gap-2 text-yellow-300 font-bold">
                  <Zap className="h-5 w-5" />
                  <span>Learn Words</span>
                </div>
              </button>
            </div>
          </div>
        ) : selectedGame === 'snake' ? (
          <SnakeGame onBack={() => setSelectedGame(null)} />
        ) : selectedGame === 'math' ? (
          <MathGame onBack={() => setSelectedGame(null)} />
        ) : (
          <WordGame onBack={() => setSelectedGame(null)} />
        )}
      </div>
    </div>
  );
}
