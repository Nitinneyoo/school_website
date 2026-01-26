import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, useCallback } from 'react';
import { FileText, Download, Trash2, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { getResultsByTeacher, deleteResult } from '../../services/resultsService';
import { logActivity } from '../../services/userService';
import type { Result } from '../../types';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/teacher/my-uploads')({
  component: MyUploadsPage,
});

function MyUploadsPage() {
  const { user, userProfile } = useAuth();
  const [uploads, setUploads] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState<number | ''>('');
  const [filterSubject, setFilterSubject] = useState('');

  const fetchUploads = useCallback(async () => {
    if (user) {
      setLoading(true);
      const data = await getResultsByTeacher(user.uid);
      setUploads(data);
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads]);

  const handleDelete = async (result: Result) => {
    if (confirm(`Are you sure you want to delete "${result.fileName}"?`)) {
      const deleted = await deleteResult(result.id, result.fileURL);
      if (deleted.success) {
        if (user && userProfile) {
          await logActivity(
            user.uid,
            userProfile.name,
            'delete',
            `Deleted ${result.fileName} for Class ${result.class} - ${result.subject}`
          );
        }
        fetchUploads();
      } else {
        alert(deleted.error || 'Failed to delete file');
      }
    }
  };

  // Filter uploads
  const filteredUploads = uploads.filter((upload) => {
    const matchesSearch =
      upload.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      upload.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === '' || upload.class === filterClass;
    const matchesSubject = filterSubject === '' || upload.subject === filterSubject;
    return matchesSearch && matchesClass && matchesSubject;
  });

  // Get unique classes and subjects
  const uniqueClasses = Array.from(new Set(uploads.map((u) => u.class))).sort((a, b) => a - b);
  const uniqueSubjects = Array.from(new Set(uploads.map((u) => u.subject))).sort();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <BackButton to="/teacher" label="Back to Dashboard" />
        
        <div className="flex items-center gap-4 mt-8">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-3 rounded-2xl bg-teal-500/20 border border-teal-500/30"
          >
            <FileText className="h-8 w-8 text-teal-400" />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl font-black text-white tracking-tight"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Uploads</span>
            </motion.h1>
            <p className="text-gray-400 mt-1">Manage your uploaded results and files</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Class Filter */}
            <div className="relative">
               <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value ? Number(e.target.value) : '')}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">All Classes</option>
                {uniqueClasses.map((cls) => (
                  <option key={cls} value={cls} className="bg-gray-900">
                    Class {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">All Subjects</option>
                {uniqueSubjects.map((subject) => (
                  <option key={subject} value={subject} className="bg-gray-900">
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Uploads List */}
        {loading ? (
          <div className="glass-card p-12 text-center">
            <div className="w-16 h-16 border-4 border-teal-500/30 border-t-teal-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading uploads...</p>
          </div>
        ) : filteredUploads.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-300 text-lg font-medium">
              {uploads.length === 0 ? 'No uploads yet' : 'No uploads match your filters'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredUploads.map((upload, index) => (
                <motion.div
                  key={upload.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6 group hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-xl flex-shrink-0 text-teal-400 group-hover:bg-teal-500/30 transition-colors">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white truncate text-lg" title={upload.fileName}>
                        {upload.fileName}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs rounded-lg font-medium">
                          Class {upload.class}
                        </span>
                        <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs rounded-lg font-medium">
                          {upload.subject}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 font-mono">
                        Uploaded on {upload.uploadedAt?.toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-white/5">
                    <a
                      href={upload.fileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-xl hover:bg-teal-500/30 transition-all font-bold text-sm"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                    <button
                      onClick={() => handleDelete(upload)}
                      className="p-2.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl hover:bg-red-500/30 transition-all"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
