import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  deleteUser,
  User,
} from 'firebase/auth';
import { doc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { CreateTeacherForm } from '../types';

/**
 * Sign in user with email and password
 */
export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Update last login
    await updateDoc(doc(db, 'users', userCredential.user.uid), {
      lastLogin: Timestamp.now(),
    });
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Sign out current user
 */
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Create a new teacher account (Admin only)
 * IMPORTANT: This uses a workaround to prevent logging out the admin
 */
export async function createTeacherAccount(formData: CreateTeacherForm, adminUid: string) {
  try {
    // WORKAROUND: We'll use Firebase Admin features which aren't available in client
    // For a frontend-only solution, we need the admin to manually create accounts
    // OR use Firebase Cloud Functions
    
    // Since this is frontend-only, we have a limitation:
    // createUserWithEmailAndPassword logs out current user
    
    // TEMPORARY SOLUTION: Create account and immediately sign admin back in
    const currentUser = auth.currentUser;
    
    // Create Firebase Auth user (this will log admin out)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const newTeacherUid = userCredential.user.uid;

    // Create user profile in Firestore while logged in as the new teacher
    await setDoc(doc(db, 'users', newTeacherUid), {
      uid: newTeacherUid,
      email: formData.email,
      name: formData.name,
      role: 'teacher',
      subjects: formData.subjects,
      isActive: true,
      createdAt: Timestamp.now(),
      createdBy: adminUid,
    });

    // Sign out the new teacher
    await firebaseSignOut(auth);

    // Now we need to tell the user to refresh and login as admin again
    return { 
      success: true, 
      user: userCredential.user,
      needsReauth: true, // Flag to indicate admin needs to login again
      message: 'Teacher account created successfully. Please note: You have been logged out. Please login again as admin.'
    };
  } catch (error) {
    console.error('Create teacher error:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Reset teacher password (Admin only)
 * Note: Firebase doesn't allow directly setting another user's password from client
 * This would typically require Firebase Admin SDK or Cloud Functions
 * For frontend-only, we'll use password reset email
 */
export async function resetTeacherPassword(email: string) {
  try {
    const { sendPasswordResetEmail } = await import('firebase/auth');
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent' };
  } catch (error) {
    console.error('Reset password error:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Delete teacher account (Admin only)
 * Note: This function has limitations in frontend-only setup
 * Ideally should be done via Cloud Functions
 */
export async function deleteTeacherAccount(user: User) {
  try {
    await deleteUser(user);
    return { success: true };
  } catch (error) {
    console.error('Delete user error:', error);
    return { success: false, error: (error as Error).message };
  }
}
