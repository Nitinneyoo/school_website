import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Menu, X, LogOut, LogIn, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, role, userProfile, signOut: handleSignOut } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/resultss" },
    { name: "Contact", href: "/contact" },
  ];

  const logout = async () => {
    await handleSignOut();
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-slate-900" />
            <span className="text-2xl font-bold text-gray-900">
              Model Middle School
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-slate-900 transition-colors font-medium"
                activeProps={{
                  className: "text-slate-800 font-semibold",
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Role-based navigation */}
            {user && (role === 'admin' || role === 'teacher') && (
              <Link
                to={role === 'admin' ? '/admin' : '/teacher'}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            )}

            {/* Auth buttons */}
            {user ? (
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
          </nav>

          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-slate-900"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user && (role === 'admin' || role === 'teacher') && (
              <Link
                to={role === 'admin' ? '/admin' : '/teacher'}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
