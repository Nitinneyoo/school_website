import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { signIn as authSignIn, signOut as authSignOut } from '../services/authService';
import type { UserRole, UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  userProfile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (uid: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        const profile: UserProfile = {
          uid: data.uid,
          email: data.email,
          name: data.name,
          role: data.role,
          subjects: data.subjects,
          isActive: data.isActive,
          createdAt: data.createdAt?.toDate(),
          createdBy: data.createdBy,
          lastLogin: data.lastLogin?.toDate(),
        };
        setUserProfile(profile);
        setRole(data.role as UserRole);
      } else {
        // If no user doc, they might be a student or uninitialized
        setUserProfile(null);
        setRole('student');
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      setUserProfile(null);
      setRole(null);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        await fetchUserProfile(currentUser.uid);
      } else {
        setRole('student'); // Default to student/public if not logged in
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    const result = await authSignIn(email, password);
    if (result.success && result.user) {
      await fetchUserProfile(result.user.uid);
    }
    return result;
  };

  const handleSignOut = async () => {
    const result = await authSignOut();
    if (result.success) {
      setUser(null);
      setRole('student');
      setUserProfile(null);
    }
    return result;
  };

  const refreshUserProfile = async () => {
    if (user) {
      await fetchUserProfile(user.uid);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        role, 
        userProfile,
        loading, 
        signIn: handleSignIn, 
        signOut: handleSignOut,
        refreshUserProfile 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
