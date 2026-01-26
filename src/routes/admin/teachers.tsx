import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Users, Plus, CheckCircle, XCircle, Activity as ActivityIcon, Search, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <BackButton to="/admin" label="Back to Dashboard" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-8">
          <div className="flex items-center gap-4">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30"
            >
              <Users className="h-8 w-8 text-blue-400" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl font-black text-white tracking-tight"
              >
                Teacher <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Management</span>
              </motion.h1>
              <p className="text-gray-400 mt-1">Manage faculty accounts and permissions</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedTeacher(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all border border-white/10"
          >
            <Plus className="h-5 w-5" />
            Create New Teacher
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            />
          </div>
        </motion.div>

        {/* Teachers List */}
        {loading ? (
          <div className="glass-card p-12 text-center">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading teachers...</p>
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-300 text-lg font-medium">
              {searchTerm ? 'No teachers found matching your search' : 'No teachers yet'}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 px-6 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-colors font-bold"
              >
                Create your first teacher
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {filteredTeachers.map((teacher, index) => (
                <motion.div 
                  key={teacher.uid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card overflow-hidden group hover:border-white/20 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {teacher.name}
                          </h3>
                          {teacher.isActive ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                              <CheckCircle className="h-3 w-3" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full border border-red-500/20">
                              <XCircle className="h-3 w-3" />
                              Disabled
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mb-3">
                          <Mail className="h-4 w-4" />
                          <span>{teacher.email}</span>
                        </div>
                        {teacher.subjects && teacher.subjects.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {teacher.subjects.map((subject) => (
                              <span
                                key={subject}
                                className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg font-medium"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        )}
                        {teacher.lastLogin && (
                          <p className="text-xs text-gray-500 mt-4 font-mono">
                            Last login: {teacher.lastLogin.toLocaleString()}
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center">
                         <TeacherActions
                           teacher={teacher}
                           onRefresh={fetchTeachers}
                           onShowActivities={() => handleShowActivities(teacher.uid)}
                         />
                      </div>
                    </div>
                  </div>

                  {/* Activity Section */}
                  <AnimatePresence>
                    {showActivities === teacher.uid && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-white/5 bg-black/20 p-6"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <ActivityIcon className="h-5 w-5 text-gray-400" />
                          <h4 className="font-bold text-gray-200">Recent Activity</h4>
                        </div>
                        {activities.length === 0 ? (
                          <p className="text-gray-500 text-sm italic">No activity recorded</p>
                        ) : (
                          <div className="space-y-2">
                            {activities.map((activity) => (
                              <div
                                key={activity.id}
                                className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
                              >
                                <div className={`p-1.5 rounded-lg ${
                                  activity.action === 'upload' ? 'bg-green-500/20 text-green-400' :
                                  activity.action === 'delete' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                                }`}>
                                  <ActivityIcon className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-300">{activity.details}</p>
                                  <p className="text-[10px] text-gray-500 mt-1 font-mono">
                                    {activity.timestamp?.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
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
