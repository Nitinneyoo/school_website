import { createFileRoute, Link } from '@tanstack/react-router';
import { Users, Activity, FileText, LayoutDashboard, ArrowRight, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      color: 'from-blue-500 to-cyan-500',
      text: 'text-blue-400'
    },
    {
      name: 'Active Teachers',
      value: teachers.filter(t => t.isActive).length,
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      text: 'text-green-400'
    },
    {
      name: 'Total Results',
      value: results.length,
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      text: 'text-purple-400'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30"
          >
            <Shield className="h-8 w-8 text-blue-400" />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dashboard</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mt-2 text-lg"
            >
              Welcome back, {userProfile?.name || 'Administrator'}
            </motion.p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className="text-gray-400 font-medium mb-1">{stat.name}</p>
                    <h3 className="text-4xl font-black text-white">{loading ? '...' : stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${stat.text}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              <LayoutDashboard className="w-6 h-6 text-blue-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/admin/teachers"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Manage Teachers</h3>
                <p className="text-sm text-gray-400">Add, edit, or remove faculty members and manage permissions.</p>
              </Link>

              <Link
                to="/admin/activity"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">System Activity</h3>
                <p className="text-sm text-gray-400">Monitor uploads, logins, and system-wide changes in real-time.</p>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity Feed */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 h-fit"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            Recent Activity
          </h2>
          {loading ? (
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-white/5 rounded-xl" />
              ))}
            </div>
          ) : activities.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No recent activity</p>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 p-1.5 rounded-lg ${
                        activity.action === 'upload'
                          ? 'bg-green-500/20 text-green-400'
                          : activity.action === 'delete'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {activity.teacherName}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{activity.details}</p>
                      <p className="text-[10px] text-gray-600 mt-2 font-mono">
                        {activity.timestamp?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
