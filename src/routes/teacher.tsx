import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useEffect } from 'react';

export const Route = createFileRoute('/teacher')({
  component: TeacherLayout,
});

function TeacherLayout() {
  // Warn before closing tab or leaving site
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // This will show the browser's native confirmation dialog
      e.preventDefault();
      e.returnValue = ''; // Modern browsers ignore custom messages
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <ProtectedRoute allowedRoles={['teacher']}>
      <Outlet />
    </ProtectedRoute>
  );
}
