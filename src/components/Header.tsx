import { Link, useMatchRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu  } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { LogoutDialog } from "./LogoutDialog";
import { toast } from "sonner";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const { user, role, signOut: handleSignOut } = useAuth();
  const matchRoute = useMatchRoute();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Teachers", href: "/teachers" },
    { name: "Classes", href: "/classes" },
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/resultss" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true);
  };

  const confirmLogout = async () => {
    try {
      await handleSignOut();
      toast.success('Logged out successfully', {
        description: 'You have been logged out of your account.',
      });
      setIsLogoutDialogOpen(false);
      window.location.href = '/';
    } catch {
      toast.error('Logout failed', {
        description: 'There was an error logging you out. Please try again.',
      });
    }
  };

  return (
    <>
      <LogoutDialog 
        isOpen={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
        onConfirm={confirmLogout}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-lg border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
               <img className="h-10 w-auto relative z-10" src="/teachers/logo.png" alt="Model Middle School" />
            </div>
            <span className="font-black text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
              Model Middle School
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = matchRoute({ to: item.href, fuzzy: false });
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-bold leading-6 transition-colors relative group py-2 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            {/* Auth Buttons */}
            {user ? (
                <div className="flex items-center gap-4">
                  {(role === 'admin' || role === 'teacher') && (
                    <Link to={role === 'admin' ? '/admin' : '/teacher'} className="text-sm font-semibold leading-6 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                       Dashboard
                    </Link>
                  )}
                  <button onClick={handleLogoutClick} className="text-sm font-semibold leading-6 text-red-400 hover:text-red-300">
                    Log out
                  </button>
                </div>
            ) : (
                <Link to="/login" className="text-sm font-bold leading-6 text-black bg-white px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            )}
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const isActive = matchRoute({ to: item.href, fuzzy: false });
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                    isActive 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-white/10">
               {user ? (
                 <div className="space-y-2">
                    {(role === 'admin' || role === 'teacher') && (
                        <Link 
                            to={role === 'admin' ? '/admin' : '/teacher'}
                            className="block w-full text-left px-3 py-2 text-base font-semibold text-blue-400 hover:text-blue-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                    )}
                    <button
                        onClick={() => { handleLogoutClick(); setIsMenuOpen(false); }}
                        className="block w-full text-left px-3 py-2 text-base font-semibold text-red-400 hover:text-red-300"
                    >
                        Log out
                    </button>
                 </div>
               ) : (
                 <Link
                    to="/login"
                    className="block w-full text-center px-3 py-2 text-base font-bold text-black bg-white rounded-lg hover:bg-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                 >
                    Log in
                 </Link>
               )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
    </>
  );
}
