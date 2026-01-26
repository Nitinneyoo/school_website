import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Activity as ActivityIcon, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <BackButton to="/admin" label="Back to Dashboard" />
        
        <div className="flex items-center gap-4 mt-8">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/30"
          >
            <ActivityIcon className="h-8 w-8 text-purple-400" />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl font-black text-white tracking-tight"
            >
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Activity</span>
            </motion.h1>
            <p className="text-gray-400 mt-1">Monitor all system events and actions</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Filter */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-8"
        >
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="font-bold text-gray-300 mr-2">Filter:</span>
            <div className="flex gap-2">
              {(['all', 'upload', 'delete', 'login'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === type
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Activity List */}
        {loading ? (
          <div className="glass-card p-12 text-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading activities...</p>
          </div>
        ) : filteredActivities.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <ActivityIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-300">No activities found</p>
          </div>
        ) : (
          <div className="glass-card p-6">
            <div className="space-y-3">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.action === 'upload'
                        ? 'bg-green-500/20 text-green-400'
                        : activity.action === 'delete'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    <ActivityIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
                          {activity.teacherName}
                        </p>
                        <p className="text-gray-400 mt-1 text-sm">{activity.details}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          activity.action === 'upload'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : activity.action === 'delete'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}
                      >
                        {activity.action}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 font-mono">
                      {activity.timestamp?.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
