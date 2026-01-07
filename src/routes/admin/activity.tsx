import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Activity as ActivityIcon, Filter } from 'lucide-react';
import { getRecentActivities } from '../../services/userService';
import type { TeacherActivity } from '../../types';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/admin/activity')({
  component: ActivityPage,
});

function ActivityPage() {
  const [activities, setActivities] = useState<TeacherActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'upload' | 'delete' | 'login'>('all');

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      const data = await getRecentActivities(100);
      setActivities(data);
      setLoading(false);
    };

    fetchActivities();
  }, []);

  const filteredActivities =
    filter === 'all'
      ? activities
      : activities.filter((a) => a.action === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <BackButton to="/admin" label="Back to Dashboard" />
          <div className="flex items-center gap-3 mt-4">
            <ActivityIcon className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Teacher Activity</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              {(['all', 'upload', 'delete', 'login'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === type
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Activity List */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading activities...</p>
          </div>
        ) : filteredActivities.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ActivityIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No activities found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-3">
              {filteredActivities.map((activity) => (
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
                    <ActivityIcon
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
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {activity.teacherName}
                        </p>
                        <p className="text-gray-700 mt-1">{activity.details}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          activity.action === 'upload'
                            ? 'bg-green-100 text-green-700'
                            : activity.action === 'delete'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {activity.action}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {activity.timestamp?.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
