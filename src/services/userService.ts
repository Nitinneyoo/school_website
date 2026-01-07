import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  Timestamp,
  addDoc,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { UserProfile, TeacherActivity } from '../types';

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return {
        ...data,
        createdAt: data.createdAt?.toDate(),
        lastLogin: data.lastLogin?.toDate(),
      } as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

/**
 * Update user active status (Admin only)
 */
export async function updateUserStatus(uid: string, isActive: boolean) {
  try {
    await updateDoc(doc(db, 'users', uid), {
      isActive,
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating user status:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Get all teachers (Admin only)
 */
export async function getAllTeachers(): Promise<UserProfile[]> {
  try {
    const q = query(collection(db, 'users'), where('role', '==', 'teacher'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        createdAt: data.createdAt?.toDate(),
        lastLogin: data.lastLogin?.toDate(),
      } as UserProfile;
    });
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return [];
  }
}

/**
 * Delete user profile from Firestore
 */
export async function deleteUserProfile(uid: string) {
  try {
    await deleteDoc(doc(db, 'users', uid));
    return { success: true };
  } catch (error) {
    console.error('Error deleting user profile:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Log teacher activity
 */
export async function logActivity(
  userId: string,
  userName: string,
  action: TeacherActivity['action'],
  details: string
) {
  try {
    await addDoc(collection(db, 'teacherActivity'), {
      teacherId: userId,
      teacherName: userName,
      action,
      details,
      timestamp: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error logging activity:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Get recent teacher activities (Admin only)
 */
export async function getRecentActivities(limitCount = 50): Promise<TeacherActivity[]> {
  try {
    const q = query(
      collection(db, 'teacherActivity'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp?.toDate(),
      } as TeacherActivity;
    });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
}

/**
 * Get activities for a specific teacher
 */
export async function getTeacherActivities(teacherId: string): Promise<TeacherActivity[]> {
  try {
    const q = query(
      collection(db, 'teacherActivity'),
      where('teacherId', '==', teacherId),
      orderBy('timestamp', 'desc'),
      limit(100)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp?.toDate(),
      } as TeacherActivity;
    });
  } catch (error) {
    console.error('Error fetching teacher activities:', error);
    return [];
  }
}
