import { createFileRoute, Link } from '@tanstack/react-router';
import { Upload, FileText, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-12 w-12" />
            <div>
              <h1 className="text-4xl font-bold">Teacher Dashboard</h1>
              <p className="text-green-100 mt-2">
                Welcome back, {userProfile?.name || 'Teacher'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Uploads</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {loading ? '...' : uploads.length}
                </p>
              </div>
              <div className="bg-green-500 p-4 rounded-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Classes Covered</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {loading ? '...' : Object.keys(uploadsByClass).length}
                </p>
              </div>
              <div className="bg-teal-500 p-4 rounded-lg">
                <Upload className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Subjects</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {userProfile?.subjects?.length || 0}
                </p>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/teacher/upload"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <Upload className="h-6 w-6 text-gray-600 group-hover:text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Upload Results</h3>
                <p className="text-sm text-gray-600">Upload new result files for students</p>
              </div>
            </Link>

            <Link
              to="/teacher/my-uploads"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group"
            >
              <FileText className="h-6 w-6 text-gray-600 group-hover:text-teal-600" />
              <div>
                <h3 className="font-semibold text-gray-900">My Uploads</h3>
                <p className="text-sm text-gray-600">View and manage your uploaded files</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Uploads</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : recentUploads.length === 0 ? (
            <div className="text-center py-8">
              <Upload className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No uploads yet</p>
              <Link
                to="/teacher/upload"
                className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Upload Your First Result
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentUploads.map((upload) => (
                <div
                  key={upload.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{upload.fileName}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>Class {upload.class}</span>
                        <span>•</span>
                        <span>{upload.subject}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {upload.uploadedAt?.toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
