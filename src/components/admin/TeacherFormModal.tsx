import { useState, FormEvent } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { createTeacherAccount } from '../../services/authService';
import { SUBJECTS } from '../../types';
import type { UserProfile } from '../../types';

interface TeacherFormModalProps {
  teacher: UserProfile | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function TeacherFormModal({ teacher, onClose, onSuccess }: TeacherFormModalProps) {
  const { userProfile } = useAuth();
  const [formData, setFormData] = useState({
    email: teacher?.email || '',
    password: '',
    name: teacher?.name || '',
    subjects: teacher?.subjects || [],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, password });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.password || formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (formData.subjects.length === 0) {
      setError('Please select at least one subject');
      setLoading(false);
      return;
    }

    const result = await createTeacherAccount(formData, userProfile?.uid || '');

    if (result.success) {
      // Show success message
      alert(`✅ Teacher account created successfully!\n\nEmail: ${formData.email}\nName: ${formData.name}\nSubjects: ${formData.subjects.join(', ')}\n\n⚠️ Note: You have been logged out due to Firebase limitations.\nYou will be redirected to the login page.`);
      
      // Store success message for login page
      sessionStorage.setItem('teacherCreated', JSON.stringify({
        name: formData.name,
        email: formData.email
      }));
      
      // Redirect to login after a short delay
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    } else {
      setError(result.error || 'Failed to create teacher account');
      setLoading(false);
    }
  };

  const toggleSubject = (subject: string) => {
    if (formData.subjects.includes(subject)) {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter((s) => s !== subject),
      });
    } else {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, subject],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {teacher ? 'Edit Teacher' : 'Create New Teacher'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="teacher@school.com"
              disabled={!!teacher}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Min. 6 characters"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <button
                type="button"
                onClick={() => generatePassword()}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
              >
                Generate
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 6 characters
            </p>
          </div>

          {/* Subjects */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Subjects Taught *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {SUBJECTS.map((subject) => (
                <button
                  key={subject}
                  type="button"
                  onClick={() => toggleSubject(subject)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all font-medium ${
                    formData.subjects.includes(subject)
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {formData.subjects.length} subject(s) selected
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : teacher ? 'Update Teacher' : 'Create Teacher'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
