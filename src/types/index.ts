// User Types
export type UserRole = 'admin' | 'teacher' | 'student' | null;

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher';
  subjects?: string[];
  isActive: boolean;
  createdAt: Date;
  createdBy?: string;
  lastLogin?: Date;
}

// Result Types
export interface Result {
  id: string;
  class: number;
  subject: string;
  fileName: string;
  fileURL: string;
  fileSize: number;
  fileType: string;
  uploadedBy: string;
  uploadedByName: string;
  uploadedAt: Date;
}

// Activity Types
export interface TeacherActivity {
  id: string;
  teacherId: string;
  teacherName: string;
  action: 'upload' | 'delete' | 'login';
  details: string;
  timestamp: Date;
}

// Form Types
export interface CreateTeacherForm {
  email: string;
  password: string;
  name: string;
  subjects: string[];
}

// Constants
export const CLASSES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export const SUBJECTS = [
  'Mathematics',
  'Science',
  'English',
  'Hindi',
  'Social Studies',
  'Computer Science',
  'Physical Education',
  'Art',
  'Music',
] as const;

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv',
] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
