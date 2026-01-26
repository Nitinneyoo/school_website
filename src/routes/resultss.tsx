import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect, useCallback } from 'react';
import { FileText, Download, Eye, Sparkles, Trophy, Gamepad2, ArrowLeft, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getResultsByClass } from '../services/resultsService';
import type { Result } from '../types';

export const Route = createFileRoute('/resultss')({
  component: ResultsPage,
});

function ResultsPage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = useCallback(async () => {
    if (!selectedClass) return;
    setLoading(true);
    const data = await getResultsByClass(selectedClass);
    setResults(data);
    setLoading(false);
  }, [selectedClass]);

  useEffect(() => {
    if (selectedClass) {
      fetchResults();
    }
  }, [selectedClass, fetchResults]);

  // Group results by subject
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.subject]) {
      acc[result.subject] = [];
    }
    acc[result.subject].push(result);
    return acc;
  }, {} as Record<string, Result[]>);

  // Enhanced Class Data for styling
  const classesData = [
    { num: 1, color: "from-blue-500 to-cyan-500", icon: "🚀" },
    { num: 2, color: "from-purple-500 to-pink-500", icon: "🎨" },
    { num: 3, color: "from-green-500 to-emerald-500", icon: "🌱" },
    { num: 4, color: "from-orange-500 to-yellow-500", icon: "⭐" },
    { num: 5, color: "from-red-500 to-rose-500", icon: "🔥" },
    { num: 6, color: "from-indigo-500 to-violet-500", icon: "🔮" },
    { num: 7, color: "from-teal-500 to-green-500", icon: "🌍" },
    { num: 8, color: "from-cyan-500 to-blue-500", icon: "🧬" },
    { num: 9, color: "from-fuchsia-500 to-purple-500", icon: "⚛️" },
    { num: 10, color: "from-amber-500 to-orange-500", icon: "🎓" },
  ];



  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* Header */}
      {!selectedClass && (
        <div className="text-center space-y-6 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold tracking-widest uppercase mb-4"
          >
            <Trophy className="w-4 h-4" />
            <span>Student Success</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]"
          >
            RESULTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">Hub</span>
          </motion.h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            View academic performance and download report cards.
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedClass ? (
            <motion.div
                key="class-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {classesData.map((cls, index) => (
                  <motion.button
                    key={cls.num}
                    onClick={() => setSelectedClass(cls.num)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative h-64 rounded-[2rem] overflow-hidden backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-xl"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center relative z-10 p-6">
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {cls.icon}
                      </div>
                      
                      <div className="text-center">
                        <span className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Class</span>
                        <span className="block text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {cls.num}
                        </span>
                      </div>

                      <div className="mt-6 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <span>View Results</span>
                        <ArrowLeft className="w-3 h-3 rotate-180" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                 <Link
                    to="/games"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors backdrop-blur-md group"
                 >
                    <Gamepad2 className="w-5 h-5 text-purple-400 group-hover:animate-bounce" />
                    <span className="font-bold tracking-wide">Take a Study Break</span>
                 </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
                key="results-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
            >
              {/* Header with Back Button */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 glass-card p-6 rounded-3xl border-pink-500/20">
                <div className="flex items-center gap-6">
                   <button
                    onClick={() => setSelectedClass(null)}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                   >
                    <ArrowLeft className="w-6 h-6" />
                   </button>
                   <div>
                      <h2 className="text-3xl font-bold text-white">
                        Class {selectedClass} Results
                      </h2>
                      <p className="text-gray-400 mt-1">
                        {results.length} document{results.length !== 1 ? 's' : ''} found
                      </p>
                   </div>
                </div>
                
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl text-gray-400 border border-white/5">
                   <Search className="w-4 h-4" />
                   <span className="text-sm">Search by student name...</span>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-400 font-medium animate-pulse">Fetching academic records...</p>
                </div>
              ) : results.length === 0 ? (
                <div className="glass-card rounded-[2.5rem] p-20 text-center border-white/5">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                     <FileText className="h-10 w-10 text-gray-500" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">
                    No results uploaded yet
                  </p>
                  <p className="text-gray-400">
                    Results for Class {selectedClass} will be published here soon.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8">
                  {Object.entries(groupedResults).map(([subject, subjectResults], idx) => (
                    <motion.div
                      key={subject}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card rounded-3xl overflow-hidden border-white/10"
                    >
                      <div className="bg-white/5 px-8 py-6 border-b border-white/5 flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                          {subject}
                        </h3>
                      </div>
                      
                      <div className="p-4 space-y-2">
                        {subjectResults.map((result) => (
                          <div
                            key={result.id}
                            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                                <FileText className="h-6 w-6 text-pink-400" />
                              </div>
                              <div>
                                <p className="font-bold text-white text-lg group-hover:text-pink-300 transition-colors">
                                  {result.fileName}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Uploaded by {result.uploadedByName} • {result.uploadedAt?.toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              {result.fileURL.endsWith('.pdf') && (
                                <a
                                  href={result.fileURL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                                  title="View PDF"
                                >
                                  <Eye className="h-5 w-5" />
                                </a>
                              )}
                              <a
                                href={result.fileURL}
                                download
                                className="p-3 rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white transition-all transform hover:scale-105"
                                title="Download"
                              >
                                <Download className="h-5 w-5" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}