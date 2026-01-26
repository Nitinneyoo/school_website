import { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, School, Loader2 } from 'lucide-react';
import { MathQuestionService, MathQuestion } from '../../services/MathQuestionService';

interface MathGameProps {
  onBack: () => void;
}

export function MathGame({ onBack }: MathGameProps) {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [mathProblems, setMathProblems] = useState<MathQuestion[]>([]);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedClass) {
      loadQuestions(selectedClass);
    }
  }, [selectedClass]);

  const loadQuestions = async (classLevel: number) => {
    setLoading(true);
    setError(null);
    try {
      const questions = await MathQuestionService.getQuestions(classLevel);
      if (questions.length === 0) {
        throw new Error("No questions available");
      }
      setMathProblems(questions);
      setLoading(false);
    } catch {
      setError("Failed to load questions. Please try again.");
      setLoading(false);
    }
  };

  const handleClassSelect = (classLevel: number) => {
    setSelectedClass(classLevel);
    // Reset game state
    setCurrentProblem(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    // Scroll to top when class is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (answer: string | number) => {
    setSelectedAnswer(answer);
    if (!mathProblems[currentProblem]) return;
    
    // Loose comparison for string vs number matches (just in case)
    const correct = String(answer) === String(mathProblems[currentProblem].answer);
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
    }, 1500); // Gives a bit more time to read trivia answers
  };

  const restart = async () => {
    if (!selectedClass) return;

    // Logic: If score is full (100%), get new questions. 
    // If not full, reuse same questions to practice.
    const maxScore = mathProblems.length * 10;
    
    // Reset UI State first
    setCurrentProblem(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    // If perfect score, fetch NEW questions
    if (score === maxScore) {
       await loadQuestions(selectedClass);
    } else {
      // Logic for retry: Optional: shuffle the order of existing questions?
      // For now, keeping them in same order as "Play Again" usually implies retry to perfect it.
      // But clearing answers is handled by resetting states.
      // We do NOT call loadQuestions, so `mathProblems` state remains unchanged.
    }
  };

  const handleBack = () => {
    if (selectedClass) {
      setSelectedClass(null); // Go back to class selection
      setMathProblems([]);
    } else {
      onBack(); // Go back to main menu
    }
  };

  if (!selectedClass) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto p-8">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Select Your Class
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cls) => (
            <button
              key={cls}
              onClick={() => handleClassSelect(cls)}
              className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-all hover:shadow-xl border-2 border-transparent hover:border-blue-500 group"
            >
              <School className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="text-2xl font-black text-gray-700 dark:text-white">Class {cls}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {cls <= 4 ? 'Arithmetic' : cls <= 8 ? 'Intermediate' : 'Advanced'}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
       <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto p-12 text-center">
         <Loader2 className="h-12 w-12 text-blue-500 animate-spin mx-auto mb-4" />
         <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">Generating Questions...</h3>
       </div>
    );
  }

  if (error) {
     return (
       <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto p-12 text-center">
         <p className="text-red-500 font-bold mb-4">{error}</p>
         <button onClick={() => setSelectedClass(null)} className="px-6 py-2 bg-blue-500 text-white rounded-lg">Go Back</button>
       </div>
    );
  }

  const problem = mathProblems[currentProblem];
  if (!problem) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 px-8 py-6">
        <div className="flex items-center justify-between">
          <button onClick={handleBack} className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Change Class
          </button>
          <div className="text-center">
            <p className="text-sm text-white/80 font-medium">Score</p>
            <p className="text-3xl font-black text-yellow-300">{score}</p>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">
        {!gameOver ? (
          <div className="space-y-8">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold text-sm mb-4">
                Class {selectedClass} • Question {currentProblem + 1} of {mathProblems.length}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                <span dangerouslySetInnerHTML={{ __html: problem.question }} />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problem.options.map((option, idx) => (
                <button
                  key={`${option}-${idx}`}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 rounded-2xl font-bold text-xl md:text-2xl transition-all ${
                    selectedAnswer === null
                      ? 'bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg text-gray-700 dark:text-gray-200 hover:scale-[1.02]'
                      : selectedAnswer === option
                      ? isCorrect
                        ? 'bg-green-500 text-white border-green-500 scale-[1.02]'
                        : 'bg-red-500 text-white border-red-500'
                      : String(option) === String(problem.answer)
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400 border-transparent opacity-50'
                  } shadow-sm`}
                >
                   <span dangerouslySetInnerHTML={{ __html: String(option) }} />
                </button>
              ))}
            </div>

            {isCorrect !== null && (
              <div className={`text-center text-2xl font-bold animate-in fade-in slide-in-from-bottom-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '✅ Correct! Great job!' : '❌ Oops! Try the next one!'}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in zoom-in duration-300">
            <Trophy className="h-24 w-24 text-yellow-500 mx-auto animate-bounce" />
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              Quiz Complete! 🎉
            </h2>
            <div className="space-y-2">
              <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {score} / {mathProblems.length * 10}
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                You got {score / 10} out of {mathProblems.length} correct!
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                <button
                onClick={restart}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-black text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                {score === mathProblems.length * 10 ? 'Play New Questions' : 'Try Again'}
                </button>
                <button
                    onClick={() => { setSelectedClass(null); setMathProblems([]); }}
                    className="px-8 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-bold text-xl rounded-xl transition-all"
                >
                    Choose Class
                </button>
            </div>
            {score !== mathProblems.length * 10 && (
                 <p className="text-sm text-gray-500 mt-4">
                    Tip: Score 100% to unlock new questions!
                </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

