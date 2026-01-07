import { createFileRoute, Link } from '@tanstack/react-router';
import { Users, Activity, FileText, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAllTeachers, getRecentActivities } from '../../services/userService';
import { getAllResults } from '../../services/resultsService';
import type { UserProfile, TeacherActivity, Result } from '../../types';

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { userProfile } = useAuth();
  const [teachers, setTeachers] = useState<UserProfile[]>([]);
  const [activities, setActivities] = useState<TeacherActivity[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [teachersData, activitiesData, resultsData] = await Promise.all([
        getAllTeachers(),
        getRecentActivities(10),
        getAllResults(),
      ]);
      setTeachers(teachersData);
      setActivities(activitiesData);
      setResults(resultsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const stats = [
    {
      name: 'Total Teachers',
      value: teachers.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Teachers',
      value: teachers.filter(t => t.isActive).length,
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      name: 'Total Results',
      value: results.length,
      icon: FileText,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-12 w-12" />
            <div>
              <h1 className="text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-blue-100 mt-2">
                Welcome back, {userProfile?.name || 'Admin'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.name}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {loading ? '...' : stat.value}
                    </p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/admin/teachers"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <Users className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Manage Teachers</h3>
                <p className="text-sm text-gray-600">
                  Create, edit, or delete teacher accounts
                </p>
              </div>
            </Link>

            <Link
              to="/admin/activity"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group"
            >
              <Activity className="h-6 w-6 text-gray-600 group-hover:text-purple-600" />
              <div>
                <h3 className="font-semibold text-gray-900">View Activity</h3>
                <p className="text-sm text-gray-600">
                  Monitor teacher activity and uploads
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : activities.length === 0 ? (
            <p className="text-gray-600">No recent activity</p>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`p-2 rounded-full ${
                      activity.action === 'upload'
                        ? 'bg-green-100'
                        : activity.action === 'delete'
                        ? 'bg-red-100'
                        : 'bg-blue-100'
                    }`}
                  >
                    <Activity
                      className={`h-5 w-5 ${
                        activity.action === 'upload'
                          ? 'text-green-600'
                          : activity.action === 'delete'
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {activity.teacherName}
                    </p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.timestamp?.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
