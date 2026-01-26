import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { uploadResult } from '../../services/resultsService';
import { logActivity } from '../../services/userService';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/teacher/upload')({
  component: UploadPage,
});

const CLASSES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SUBJECTS = ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science', 'Physical Education', 'Art'];

function UploadPage() {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [selectedClass, setSelectedClass] = useState<number | ''>('');
  const [subject, setSubject] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !selectedClass || !subject || !user || !userProfile) {
      setError('Please fill in all fields and select a file');
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      const result = await uploadResult(
        file,
        Number(selectedClass),
        subject,
        user.uid,
        userProfile.name,
        (prog) => setProgress(prog)
      );

      if (result.success) {
        await logActivity(
          user.uid,
          userProfile.name,
          'upload',
          `Uploaded ${file.name} for Class ${selectedClass} - ${subject}`
        );
        setSuccess(true);
        setTimeout(() => {
          navigate({ to: '/teacher/my-uploads' });
        }, 2000);
      } else {
        setError(result.error || 'Upload failed');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <BackButton to="/teacher" label="Back to Dashboard" />
          <div className="flex items-center gap-4 mt-8">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-3 rounded-2xl bg-green-500/20 border border-green-500/30"
            >
              <Upload className="h-8 w-8 text-green-400" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl font-black text-white tracking-tight"
              >
                Upload <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Results</span>
              </motion.h1>
              <p className="text-gray-400 mt-1">Publish new exam results or study materials</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8"
        >
          {success ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">Upload Successful!</h2>
              <p className="text-gray-400">Redirecting to your uploads...</p>
            </div>
          ) : (
            <form onSubmit={handleUpload} className="space-y-8">
              {/* Class & Subject Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 ml-1">Class</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-900">Select Class</option>
                    {CLASSES.map((cls) => (
                      <option key={cls} value={cls} className="bg-gray-900">
                        Class {cls}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 ml-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-900">Select Subject</option>
                    {SUBJECTS.map((sub) => (
                      <option key={sub} value={sub} className="bg-gray-900">
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* File Dropzone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                  file
                    ? 'border-green-500/50 bg-green-500/10'
                    : 'border-white/10 hover:border-green-500/30 hover:bg-white/5'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                />
                
                <AnimatePresence mode="wait">
                  {file ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4 text-green-400">
                        <FileText className="h-8 w-8" />
                      </div>
                      <p className="text-lg font-bold text-white mb-1">{file.name}</p>
                      <p className="text-sm text-gray-400">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="mt-4 px-4 py-2 bg-red-500/20 text-red-400 text-sm font-bold rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        Remove File
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-gray-400 group-hover:text-green-400 transition-colors">
                        <Upload className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Drag & drop file here
                      </h3>
                      <p className="text-gray-400 mb-6">or click to browse</p>
                      <p className="text-xs text-gray-500">
                        Supports PDF, Excel, Word (Max 10MB)
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              {uploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uploading...</span>
                    <span className="text-green-400 font-bold">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="font-medium">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={uploading || !file}
                className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all ${
                  uploading || !file
                    ? 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-1'
                }`}
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    Upload Result
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
