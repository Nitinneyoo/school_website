import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Users, Plus, CheckCircle, XCircle, Activity as ActivityIcon, Search, Mail } from 'lucide-react';
import { getAllTeachers } from '../../services/userService';
import { getTeacherActivities } from '../../services/userService';
import type { UserProfile, TeacherActivity } from '../../types';
import { TeacherFormModal } from '../../components/admin/TeacherFormModal';
import { TeacherActions } from '../../components/admin/TeacherActions';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/admin/teachers')({
  component: TeachersPage,
});

function TeachersPage() {
  const [teachers, setTeachers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<UserProfile | null>(null);
  const [showActivities, setShowActivities] = useState<string | null>(null);
  const [activities, setActivities] = useState<TeacherActivity[]>([]);

  const fetchTeachers = async () => {
    setLoading(true);
    const data = await getAllTeachers();
    setTeachers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowActivities = async (teacherId: string) => {
    if (showActivities === teacherId) {
      setShowActivities(null);
      setActivities([]);
    } else {
      setShowActivities(teacherId);
      const data = await getTeacherActivities(teacherId);
      setActivities(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <BackButton to="/admin" label="Back to Dashboard" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Teacher Management
              </h1>
            </div>
            <button
              onClick={() => {
                setSelectedTeacher(null);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-medium"
            >
              <Plus className="h-5 w-5" />
              Create New Teacher
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Teachers List */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading teachers...</p>
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {searchTerm ? 'No teachers found matching your search' : 'No teachers yet'}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create your first teacher
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.uid} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {teacher.name}
                        </h3>
                        {teacher.isActive ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            <CheckCircle className="h-3 w-3" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                            <XCircle className="h-3 w-3" />
                            Disabled
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Mail className="h-4 w-4" />
                        <span>{teacher.email}</span>
                      </div>
                      {teacher.subjects && teacher.subjects.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {teacher.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      )}
                      {teacher.lastLogin && (
                        <p className="text-sm text-gray-500 mt-3">
                          Last login: {teacher.lastLogin.toLocaleString()}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <TeacherActions
                      teacher={teacher}
                      onRefresh={fetchTeachers}
                      onShowActivities={() => handleShowActivities(teacher.uid)}
                    />
                  </div>
                </div>

                {/* Activity Section */}
                {showActivities === teacher.uid && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <ActivityIcon className="h-5 w-5 text-gray-600" />
                      <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                    </div>
                    {activities.length === 0 ? (
                      <p className="text-gray-600 text-sm">No activity recorded</p>
                    ) : (
                      <div className="space-y-2">
                        {activities.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200"
                          >
                            <div className={`p-1 rounded-full ${
                              activity.action === 'upload' ? 'bg-green-100' :
                              activity.action === 'delete' ? 'bg-red-100' : 'bg-blue-100'
                            }`}>
                              <ActivityIcon className={`h-4 w-4 ${
                                activity.action === 'upload' ? 'text-green-600' :
                                activity.action === 'delete' ? 'text-red-600' : 'text-blue-600'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{activity.details}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {activity.timestamp?.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Teacher Form Modal */}
      {isModalOpen && (
        <TeacherFormModal
          teacher={selectedTeacher}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTeacher(null);
          }}
          onSuccess={() => {
            setIsModalOpen(false);
            setSelectedTeacher(null);
            fetchTeachers();
          }}
        />
      )}
    </div>
  );
}
