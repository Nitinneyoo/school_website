import { createFileRoute, Link } from '@tanstack/react-router';
import { Upload, FileText, LayoutDashboard, ArrowRight, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { getResultsByTeacher } from '../../services/resultsService';
import type { Result } from '../../types';

export const Route = createFileRoute('/teacher/')({
  component: TeacherDashboard,
});

function TeacherDashboard() {
  const { user, userProfile } = useAuth();
  const [uploads, setUploads] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUploads = async () => {
      if (user) {
        const data = await getResultsByTeacher(user.uid);
        setUploads(data);
      }
      setLoading(false);
    };

    fetchUploads();
  }, [user]);

  const recentUploads = uploads.slice(0, 5);

  // Group uploads by class
  const uploadsByClass = uploads.reduce((acc, upload) => {
    acc[upload.class] = (acc[upload.class] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 rounded-2xl bg-green-500/20 border border-green-500/30"
          >
            <BookOpen className="h-8 w-8 text-green-400" />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              Teacher <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Dashboard</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mt-2 text-lg"
            >
              Welcome back, {userProfile?.name || 'Faculty Member'}
            </motion.p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 border-l-4 border-l-green-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Total Uploads</p>
                <p className="text-4xl font-black text-white">
                  {loading ? '...' : uploads.length}
                </p>
              </div>
              <div className="bg-green-500/10 p-4 rounded-xl">
                <FileText className="h-8 w-8 text-green-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 border-l-4 border-l-teal-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Classes Covered</p>
                <p className="text-4xl font-black text-white">
                  {loading ? '...' : Object.keys(uploadsByClass).length}
                </p>
              </div>
              <div className="bg-teal-500/10 p-4 rounded-xl">
                <Upload className="h-8 w-8 text-teal-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 border-l-4 border-l-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Subjects</p>
                <p className="text-4xl font-black text-white">
                  {userProfile?.subjects?.length || 0}
                </p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-xl">
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-green-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/teacher/upload"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                    <Upload className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Upload Results</h3>
                <p className="text-sm text-gray-400">Publish new results for your classes and subjects.</p>
              </Link>

              <Link
                to="/teacher/my-uploads"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-teal-500/20 text-teal-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">My Uploads</h3>
                <p className="text-sm text-gray-400">View history, delete incorrect files, or manage records.</p>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Recent Uploads */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 h-fit"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Upload className="w-5 h-5 text-green-400" />
            Recent Uploads
          </h2>
          {loading ? (
             <div className="animate-pulse space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-white/5 rounded-xl" />
              ))}
            </div>
          ) : recentUploads.length === 0 ? (
            <div className="text-center py-8">
              <Upload className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">No uploads yet</p>
              <Link
                to="/teacher/upload"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-bold text-sm"
              >
                Upload First Result
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentUploads.map((upload) => (
                <div
                  key={upload.id}
                  className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white truncate">{upload.fileName}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">Cl {upload.class}</span>
                        <span>•</span>
                        <span>{upload.subject}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-2 text-right font-mono">
                    {upload.uploadedAt?.toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
