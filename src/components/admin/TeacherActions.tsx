import { useState } from 'react';
import { MoreVertical, Power, Mail, Trash2, Activity } from 'lucide-react';
import { updateUserStatus, deleteUserProfile } from '../../services/userService';
import { resetTeacherPassword } from '../../services/authService';
import type { UserProfile } from '../../types';

interface TeacherActionsProps {
  teacher: UserProfile;
  onRefresh: () => void;
  onShowActivities: () => void;
}

export function TeacherActions({ teacher, onRefresh, onShowActivities }: TeacherActionsProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleStatus = async () => {
    setLoading(true);
    const result = await updateUserStatus(teacher.uid, !teacher.isActive);
    if (result.success) {
      onRefresh();
    } else {
      alert(result.error || 'Failed to update status');
    }
    setLoading(false);
    setShowMenu(false);
  };

  const handleResetPassword = async () => {
    if (confirm(`Send password reset email to ${teacher.email}?`)) {
      setLoading(true);
      const result = await resetTeacherPassword(teacher.email);
      if (result.success) {
        alert('Password reset email sent successfully!');
      } else {
        alert(result.error || 'Failed to send reset email');
      }
      setLoading(false);
      setShowMenu(false);
    }
  };

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${teacher.name}? This action cannot be undone.`)) {
      setLoading(true);
      const result = await deleteUserProfile(teacher.uid);
      if (result.success) {
        alert('Teacher deleted successfully');
        onRefresh();
      } else {
        alert(result.error || 'Failed to delete teacher');
      }
      setLoading(false);
      setShowMenu(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        disabled={loading}
      >
        <MoreVertical className="h-5 w-5 text-gray-600" />
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-20 overflow-hidden">
            <button
              onClick={onShowActivities}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            >
              <Activity className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">View Activity</span>
            </button>

            <button
              onClick={handleResetPassword}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              disabled={loading}
            >
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Reset Password</span>
            </button>

            <button
              onClick={handleToggleStatus}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              disabled={loading}
            >
              <Power className={`h-4 w-4 ${teacher.isActive ? 'text-red-600' : 'text-green-600'}`} />
              <span className="text-sm font-medium text-gray-700">
                {teacher.isActive ? 'Disable Account' : 'Enable Account'}
              </span>
            </button>

            <div className="border-t border-gray-200">
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left"
                disabled={loading}
              >
                <Trash2 className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">Delete Teacher</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
