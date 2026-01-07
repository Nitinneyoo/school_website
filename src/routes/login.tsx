import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, FormEvent, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { signIn, role } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Check for teacher creation success
  useEffect(() => {
    const teacherCreated = sessionStorage.getItem('teacherCreated');
    if (teacherCreated) {
      const data = JSON.parse(teacherCreated);
      setSuccessMessage(`✅ Teacher "${data.name}" (${data.email}) created successfully! Please login as admin to continue.`);
      sessionStorage.removeItem('teacherCreated');
    }
  }, []);

  // Redirect if already logged in
  if (role === 'admin' || role === 'teacher') {
    const dashboardPath = role === 'admin' ? '/admin' : '/teacher';
    navigate({ to: dashboardPath });
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn(email, password);

    if (result.success) {
      // Wait for auth state to update, then navigate will happen automatically
      // The redirect logic above will kick in once role is updated
    } else {
      setError(result.error || 'Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="text-5xl mb-4">🏫</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Model Middle School
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Admin & Teacher Login
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            {/* Success Message (Teacher Created) */}
            {successMessage && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          {/* <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Student? <a href="/resultss" className="text-blue-600 dark:text-blue-400 hover:underline">View Results</a>
            </p>
          </div> */}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
