import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Star } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

interface SnakeGameProps {
  onBack: () => void;
}

export function SnakeGame({ onBack }: SnakeGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snakeHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const directionRef = useRef(direction);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current !== 'DOWN') {
            setDirection('UP');
            directionRef.current = 'UP';
          }
          break;
        case 'ArrowDown':
          if (directionRef.current !== 'UP') {
            setDirection('DOWN');
            directionRef.current = 'DOWN';
          }
          break;
        case 'ArrowLeft':
          if (directionRef.current !== 'RIGHT') {
            setDirection('LEFT');
            directionRef.current = 'LEFT';
          }
          break;
        case 'ArrowRight':
          if (directionRef.current !== 'LEFT') {
            setDirection('RIGHT');
            directionRef.current = 'RIGHT';
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };
        switch (directionRef.current) {
          case 'UP': head.y -= 1; break;
          case 'DOWN': head.y += 1; break;
          case 'LEFT': head.x -= 1; break;
          case 'RIGHT': head.x += 1; break;
        }
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }
        if (prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }
        const newSnake = [head, ...prevSnake];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => {
            const newScore = s + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('snakeHighScore', newScore.toString());
            }
            return newScore;
          });
          generateFood();
          setSpeed((s) => Math.max(50, s - 2));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, speed);
    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, food, generateFood, speed, highScore]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setFood({ x: 15, y: 15 });
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    setSpeed(INITIAL_SPEED);
  };

  const handleDirectionClick = (dir: Direction) => {
    if (!gameStarted || gameOver) return;
    switch (dir) {
      case 'UP':
        if (directionRef.current !== 'DOWN') { setDirection('UP'); directionRef.current = 'UP'; }
        break;
      case 'DOWN':
        if (directionRef.current !== 'UP') { setDirection('DOWN'); directionRef.current = 'DOWN'; }
        break;
      case 'LEFT':
        if (directionRef.current !== 'RIGHT') { setDirection('LEFT'); directionRef.current = 'LEFT'; }
        break;
      case 'RIGHT':
        if (directionRef.current !== 'LEFT') { setDirection('RIGHT'); directionRef.current = 'RIGHT'; }
        break;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-8 py-6">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Games
          </button>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-sm text-white/80 font-medium">Score</p>
              <p className="text-3xl font-black text-yellow-300">{score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/80 font-medium">High Score</p>
              <p className="text-3xl font-black text-yellow-300">{highScore}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col items-center gap-6">
          <div
            className="relative bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-inner p-4"
            style={{ width: GRID_SIZE * CELL_SIZE + 32, height: GRID_SIZE * CELL_SIZE + 32 }}
          >
            {gameOver && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl backdrop-blur-sm z-10">
                <div className="text-center space-y-4">
                  <p className="text-5xl font-black text-red-400">GAME OVER!</p>
                  <p className="text-2xl font-bold text-white">Score: {score}</p>
                  {score === highScore && score > 0 && (
                    <p className="text-xl font-bold text-yellow-400 animate-bounce">🎉 NEW HIGH SCORE! 🎉</p>
                  )}
                  <button
                    onClick={startGame}
                    className="mt-4 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}

            {!gameStarted && !gameOver && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-500/90 flex items-center justify-center rounded-2xl backdrop-blur-sm z-10">
                <div className="text-center space-y-6 p-8">
                  <Star className="h-20 w-20 text-yellow-300 mx-auto animate-spin slow" />
                  <p className="text-4xl font-black text-white">Ready to Play?</p>
                  <p className="text-xl text-white/90">Use arrow keys to control the snake!</p>
                  <button
                    onClick={startGame}
                    className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black text-2xl rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-110 animate-pulse"
                  >
                    START GAME 🚀
                  </button>
                </div>
              </div>
            )}

            <div
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
            >
              {snake.map((segment, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-75"
                  style={{
                    left: segment.x * CELL_SIZE,
                    top: segment.y * CELL_SIZE,
                    width: CELL_SIZE - 2,
                    height: CELL_SIZE - 2,
                    backgroundColor: index === 0 ? '#10b981' : '#34d399',
                    borderRadius: '4px',
                    boxShadow: index === 0 ? '0 0 10px rgba(16, 185, 129, 0.5)' : 'none',
                  }}
                />
              ))}
              <div
                className="absolute animate-pulse"
                style={{
                  left: food.x * CELL_SIZE,
                  top: food.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(239, 68, 68, 0.8)',
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button onClick={() => handleDirectionClick('UP')} className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg active:scale-95 transition-all">
              <ArrowUp className="h-8 w-8" />
            </button>
            <div className="flex gap-2">
              <button onClick={() => handleDirectionClick('LEFT')} className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg active:scale-95 transition-all">
                <ArrowLeft className="h-8 w-8" />
              </button>
              <button onClick={() => handleDirectionClick('DOWN')} className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg active:scale-95 transition-all">
                <ArrowDown className="h-8 w-8" />
              </button>
              <button onClick={() => handleDirectionClick('RIGHT')} className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg active:scale-95 transition-all">
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
