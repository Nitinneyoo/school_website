import { Link, useLocation } from '@tanstack/react-router';
import { Gamepad2, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingGameButton() {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Hide on protected routes (admin and teacher)
  const isProtectedRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/teacher');

  // Hide on games page itself
  const isGamesPage = location.pathname === '/games';

  if (isProtectedRoute || isGamesPage || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
        title="Hide game button"
      >
        <X className="h-3 w-3" />
      </button>

      {/* Game button */}
      <Link
        to="/games"
        className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
        
        <div className="relative flex items-center gap-3">
          <Gamepad2 className="h-6 w-6 animate-pulse" />
          <span className="font-black text-lg whitespace-nowrap">
            Play Games! 🎮
          </span>
        </div>
      </Link>
    </div>
  );
}
