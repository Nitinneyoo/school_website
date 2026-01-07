import { ReactNode } from 'react';
import { Navigate } from '@tanstack/react-router';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: Array<'admin' | 'teacher'>;
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  allowedRoles, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, role, loading, userProfile } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  // Check if user has allowed role
  if (!role || (role !== 'admin' && role !== 'teacher') || !allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8 text-center space-y-4">
          <div className="text-6xl">🚫</div>
          <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
          <p className="text-muted-foreground">
            You do not have permission to access this page.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  // Check if teacher account is active
  if (role === 'teacher' && userProfile && !userProfile.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8 text-center space-y-4">
          <div className="text-6xl">⏸️</div>
          <h1 className="text-2xl font-bold text-foreground">Account Disabled</h1>
          <p className="text-muted-foreground">
            Your account has been disabled. Please contact the administrator.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
