import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const Route = createFileRoute('/teacher')({
  component: TeacherLayout,
});

function TeacherLayout() {
  return (
    <ProtectedRoute allowedRoles={['teacher']}>
      <Outlet />
    </ProtectedRoute>
  );
}
