import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { FileText, Download, Eye, GraduationCap, Sparkles, Trophy, Gamepad2, BookOpen } from 'lucide-react';
import { getResultsByClass } from '../services/resultsService';
import type { Result } from '../types';

export const Route = createFileRoute('/resultss')({
  component: ResultsPage,
});

function ResultsPage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedClass) {
      fetchResults();
    }
  }, [selectedClass]);

  const fetchResults = async () => {
    if (!selectedClass) return;
    setLoading(true);
    const data = await getResultsByClass(selectedClass);
    setResults(data);
    setLoading(false);
  };

  // Group results by subject
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.subject]) {
      acc[result.subject] = [];
    }
    acc[result.subject].push(result);
    return acc;
  }, {} as Record<string, Result[]>);

  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Animated Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 animate-bounce" />
              <GraduationCap className="h-12 w-12" />
              <Sparkles className="h-8 w-8 animate-bounce delay-150" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Student Results
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              View your academic achievements! 📚✨
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/games"
                className="group flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all hover:scale-105 font-semibold"
              >
                <Gamepad2 className="h-5 w-5 group-hover:animate-bounce" />
                Play Games 🎮
              </Link>
              <a
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all hover:scale-105 font-semibold"
              >
                <BookOpen className="h-5 w-5" />
                Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedClass ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Select Your Class
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Choose your class to view results
              </p>
            </div>

            {/* Modern Class Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {classes.map((classNum) => (
                <button
                  key={classNum}
                  onClick={() => setSelectedClass(classNum)}
                  className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl font-black mb-2">{classNum}</div>
                    <div className="text-sm font-medium opacity-90">Class {classNum}</div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Trophy className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:animate-bounce" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Class {selectedClass} Results
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {results.length} result{results.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <button
                onClick={() => setSelectedClass(null)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                ← Change Class
              </button>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Loading results...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  No results uploaded yet for Class {selectedClass}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Check back later! ✨
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedResults).map(([subject, subjectResults]) => (
                  <div
                    key={subject}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Sparkles className="h-6 w-6" />
                        {subject}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-4">
                        {subjectResults.map((result) => (
                          <div
                            key={result.id}
                            className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                <FileText className="h-6 w-6 text-purple-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {result.fileName}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
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
                                  className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors group-hover:scale-110"
                                  title="View PDF"
                                >
                                  <Eye className="h-5 w-5" />
                                </a>
                              )}
                              <a
                                href={result.fileURL}
                                download
                                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors group-hover:scale-110"
                                title="Download"
                              >
                                <Download className="h-5 w-5" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}