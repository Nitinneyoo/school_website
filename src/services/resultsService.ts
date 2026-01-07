import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import type { Result } from '../types';

/**
 * Upload result file to Firebase Storage and save metadata
 */
export async function uploadResult(
  file: File,
  classNum: number,
  subject: string,
  teacherId: string,
  teacherName: string,
  onProgress?: (progress: number) => void
) {
  try {
    // Create storage reference
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const storagePath = `results/${classNum}/${subject}/${timestamp}_${sanitizedFileName}`;
    const storageRef = ref(storage, storagePath);

    // Upload file
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise<{ success: boolean; result?: Result; error?: string }>((resolve) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress?.(progress);
        },
        (error) => {
          console.error('Upload error:', error);
          resolve({ success: false, error: error.message });
        },
        async () => {
          try {
            // Get download URL
            const fileURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Save metadata to Firestore
            const resultData = {
              class: classNum,
              subject,
              fileName: file.name,
              fileURL,
              fileSize: file.size,
              fileType: file.type,
              uploadedBy: teacherId,
              uploadedByName: teacherName,
              uploadedAt: Timestamp.now(),
            };

            const docRef = await addDoc(collection(db, 'results'), resultData);

            resolve({
              success: true,
              result: {
                id: docRef.id,
                ...resultData,
                uploadedAt: new Date(),
              },
            });
          } catch (error) {
            console.error('Error saving metadata:', error);
            resolve({ success: false, error: (error as Error).message });
          }
        }
      );
    });
  } catch (error) {
    console.error('Upload result error:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Get results by class number
 */
export async function getResultsByClass(classNum: number): Promise<Result[]> {
  try {
    const q = query(
      collection(db, 'results'),
      where('class', '==', classNum),
      orderBy('uploadedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        uploadedAt: data.uploadedAt?.toDate(),
      } as Result;
    });
  } catch (error) {
    console.error('Error fetching results by class:', error);
    return [];
  }
}

/**
 * Get results uploaded by a specific teacher
 */
export async function getResultsByTeacher(teacherId: string): Promise<Result[]> {
  try {
    const q = query(
      collection(db, 'results'),
      where('uploadedBy', '==', teacherId),
      orderBy('uploadedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        uploadedAt: data.uploadedAt?.toDate(),
      } as Result;
    });
  } catch (error) {
    console.error('Error fetching teacher results:', error);
    return [];
  }
}

/**
 * Delete a result (file + metadata)
 */
export async function deleteResult(resultId: string, fileURL: string) {
  try {
    // Delete from Storage
    const fileRef = ref(storage, fileURL);
    await deleteObject(fileRef);

    // Delete from Firestore
    await deleteDoc(doc(db, 'results', resultId));

    return { success: true };
  } catch (error) {
    console.error('Error deleting result:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Get all results (Admin only)
 */
export async function getAllResults(): Promise<Result[]> {
  try {
    const q = query(collection(db, 'results'), orderBy('uploadedAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        uploadedAt: data.uploadedAt?.toDate(),
      } as Result;
    });
  } catch (error) {
    console.error('Error fetching all results:', error);
    return [];
  }
}
