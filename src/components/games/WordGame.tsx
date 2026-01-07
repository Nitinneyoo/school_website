import { useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { wordsPool, shuffleArray } from './gameData';

interface WordGameProps {
  onBack: () => void;
}

export function WordGame({ onBack }: WordGameProps) {
  const [words, setWords] = useState(() => shuffleArray(wordsPool).slice(0, 8));
  const [currentWord, setCurrentWord] = useState(0);
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const word = words[currentWord];

  const handleSubmit = () => {
    if (guess.toUpperCase() === word.word) {
      setScore(score + 10);
      setShowAnswer(true);
      setTimeout(() => {
        if (currentWord < words.length - 1) {
          setCurrentWord(currentWord + 1);
          setGuess('');
          setShowAnswer(false);
        } else {
          setGameOver(true);
        }
      }, 1500);
    } else {
      setShowAnswer(true);
      setTimeout(() => {
        if (currentWord < words.length - 1) {
          setCurrentWord(currentWord + 1);
          setGuess('');
          setShowAnswer(false);
        } else {
          setGameOver(true);
        }
      }, 2000);
    }
  };

  const restart = () => {
    // Get new random set of words
    setWords(shuffleArray(wordsPool).slice(0, 8));
    setCurrentWord(0);
    setScore(0);
    setGameOver(false);
    setGuess('');
    setShowAnswer(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 px-8 py-6">
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
                Word {currentWord + 1} of {words.length}
              </p>
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                Unscramble this word:
              </h2>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 tracking-wider mb-8">
                {word.scrambled}
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                disabled={showAnswer}
                className="w-full px-6 py-4 text-3xl font-bold text-center rounded-2xl border-4 border-pink-500 focus:border-rose-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white uppercase"
                placeholder="TYPE YOUR ANSWER"
              />

              <button
                onClick={handleSubmit}
                disabled={!guess || showAnswer}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </div>

            {showAnswer && (
              <div className={`text-center text-2xl font-bold p-4 rounded-xl ${
                guess.toUpperCase() === word.word
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {guess.toUpperCase() === word.word
                  ? `✅ Correct! The word is ${word.word}!`
                  : `❌ The correct answer was: ${word.word}`}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6">
            <BookOpen className="h-24 w-24 text-pink-500 mx-auto animate-bounce" />
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              Amazing Work! 🎉
            </h2>
            <p className="text-3xl font-bold text-pink-600">
              Final Score: {score} / {words.length * 10}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You got {score / 10} out of {words.length} words correct!
            </p>
            <button
              onClick={restart}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
