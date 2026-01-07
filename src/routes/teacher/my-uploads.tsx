import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, useCallback } from 'react';
import { FileText, Download, Trash2, Search } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <BackButton to="/teacher" label="Back to Dashboard" />
          <div className="flex items-center gap-3 mt-4">
            <FileText className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Uploads</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Class Filter */}
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value ? Number(e.target.value) : '')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Classes</option>
              {uniqueClasses.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>

            {/* Subject Filter */}
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Subjects</option>
              {uniqueSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Uploads List */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading uploads...</p>
          </div>
        ) : filteredUploads.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {uploads.length === 0 ? 'No uploads yet' : 'No uploads match your filters'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUploads.map((upload) => (
              <div
                key={upload.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                    <FileText className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate" title={upload.fileName}>
                      {upload.fileName}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        Class {upload.class}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                        {upload.subject}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      {upload.uploadedAt?.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <a
                    href={upload.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                  <button
                    onClick={() => handleDelete(upload)}
                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
