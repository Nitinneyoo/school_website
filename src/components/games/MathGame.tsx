import { useState } from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { mathProblemsPool, shuffleArray } from './gameData';

interface MathGameProps {
  onBack: () => void;
}

export function MathGame({ onBack }: MathGameProps) {
  const [mathProblems, setMathProblems] = useState(() => shuffleArray(mathProblemsPool).slice(0, 10));
  const [currentProblem, setCurrentProblem] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const problem = mathProblems[currentProblem];

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    const correct = answer === problem.answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      if (currentProblem < mathProblems.length - 1) {
        setCurrentProblem(currentProblem + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const restart = () => {
    // Get new random set of problems
    const newProblems = shuffleArray(mathProblemsPool).slice(0, 10);
    setMathProblems(newProblems);
    setCurrentProblem(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 px-8 py-6">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Games
          </button>
          <div className="text-center">
            <p className="text-sm text-white/80 font-medium">Score</p>
            <p className="text-3xl font-black text-yellow-300">{score}</p>
          </div>
        </div>
      </div>

      <div className="p-12">
        {!gameOver ? (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Question {currentProblem + 1} of {mathProblems.length}
              </p>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-8">
                {problem.question}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {problem.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 rounded-2xl font-black text-3xl transition-all ${
                    selectedAnswer === null
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105'
                      : selectedAnswer === option
                      ? isCorrect
                        ? 'bg-green-500 text-white scale-105'
                        : 'bg-red-500 text-white'
                      : option === problem.answer
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  } shadow-lg`}
                >
                  {option}
                </button>
              ))}
            </div>

            {isCorrect !== null && (
              <div className={`text-center text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '✅ Correct! Great job!' : '❌ Oops! Try the next one!'}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6">
            <Trophy className="h-24 w-24 text-yellow-500 mx-auto animate-bounce" />
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              Quiz Complete! 🎉
            </h2>
            <p className="text-3xl font-bold text-blue-600">
              Final Score: {score} / {mathProblems.length * 10}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You got {score / 10} out of {mathProblems.length} correct!
            </p>
            <button
              onClick={restart}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-black text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
