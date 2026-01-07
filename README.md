# Model Middle School - Frontend-Only Website

A secure, scalable school website built with React, TanStack Router, and Firebase. Features role-based access control for Admin, Teacher, and Student (Public) users.

## 🚀 Features

### 👨‍💼 Admin Portal
- View dashboard with statistics and recent activity
- Create, manage, and delete teacher accounts
- Reset teacher passwords via email
- Enable/disable teacher access
- View teacher activity logs and uploads
- Monitor all system activity

### 👨‍🏫 Teacher Portal
- View personal dashboard with upload statistics
- Upload result files (PDF/Excel/CSV) by class and subject
- Manage own uploaded files
- Download and delete uploaded results
- View upload history

### 👨‍🎓 Student/Public Access
- Browse results by class (1-10)
- View results organized by subject
- Download result files
- No login required

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Routing**: TanStack Router
- **Styling**: TailwindCSS 4
- **Authentication**: Firebase Auth
- **Database**: Cloud Firestore
- **Storage**: Firebase Storage
- **UI Components**: Radix UI + Lucide Icons

## 📋 Prerequisites

- Node.js 18+ or Bun
- Firebase Account
- Git

## 🔧 Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable **Email/Password Authentication**:
   - Navigate to Authentication → Sign-in method
   - Enable Email/Password provider
4. Create **Firestore Database**:
   - Navigate to Firestore Database
   - Create database (start in production mode)
5. Enable **Firebase Storage**:
   - Navigate to Storage
   - Get started with default rules

### 2. Get Firebase Configuration

1. Go to Project Settings → General
2. Scroll to "Your apps" section
3. Click "Web" app icon or create new web app
4. Copy the configuration values

### 3. Environment Setup

1. Create `.env.local` file in project root:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Firebase credentials to `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### 4. Deploy Security Rules

#### Firestore Rules

1. Go to Firestore Database → Rules
2. Replace with content from `firestore.rules`
3. Click "Publish"

#### Storage Rules

1. Go to Storage → Rules
2. Replace with content from `storage.rules`
3. Click "Publish"

### 5. Install Dependencies

```bash
# Using npm
npm install

# Using bun
bun install
```

### 6. Create Initial Admin Account

Since this is a frontend-only app, create the admin via Firebase Console:

1. Go to Authentication → Users
2. Click "Add user"
3. Enter admin email and password
4. Note the User UID
5. Go to Firestore Database
6. Create collection `users`
7. Add document with ID = User UID:
   ```json
   {
     "uid": "user_uid_here",
     "email": "admin@school.com",
     "name": "Admin",
     "role": "admin",
     "isActive": true,
     "createdAt": [Current Timestamp]
   }
   ```

### 7. Run Development Server

```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

Visit `http://localhost:5173`

## 🔐 User Roles & Access

| Role | Access | Features |
|------|--------|----------|
| **Admin** | `/admin` | Full system control, teacher management, activity monitoring |
| **Teacher** | `/teacher` | Upload results, view own uploads |
| **Student/Public** | `/resultss` | View and download results (no login needed) |

## 📱 Key Routes

```
/                    # Homepage
/login               # Admin/Teacher login
/resultss            # Public results browser
/admin               # Admin dashboard (protected)
/admin/teachers      # Teacher management (protected)
/admin/activity      # Activity logs (protected)
/teacher             # Teacher dashboard (protected)
/teacher/upload      # Upload results (protected)
/teacher/my-uploads  # View uploads (protected)
```

## 🧪 Testing the Application

### Test Admin Features
1. Login with admin credentials at `/login`
2. Navigate to `/admin/teachers`
3. Create a test teacher account
4. Verify teacher appears in list

### Test Teacher Features
1. Logout admin
2. Login with teacher credentials
3. Navigate to `/teacher/upload`
4. Upload a test PDF for Class 5, Mathematics
5. Check `/teacher/my-uploads` to see the file

### Test Student Access
1. Logout or open incognito window
2. Navigate to `/resultss`
3. Select Class 5
4. Verify uploaded Mathematics file appears
5. Download the file

## 🔒 Security Features

- ✅ Role-based access control
- ✅ Protected routes with authentication
- ✅ Firestore security rules
- ✅ Storage security rules
- ✅ File type validation
- ✅ File size limits (10MB)
- ✅ Activity logging
- ✅ Password reset via email

## 📦 Build for Production

```bash
# Using npm
npm run build

# Using bun
bun run build
```

Deploy the `dist` folder to:
- Netlify
- Vercel
- Firebase Hosting
- Any static hosting service

## 🐛 Troubleshooting

### "Permission Denied" errors
- Ensure Firestore and Storage rules are deployed
- Check user role is correctly set in Firestore `users` collection
- Verify teacher `isActive` field is `true`

### Files not uploading
- Check Firebase Storage is enabled
- Verify file size is under 10MB
- Ensure file type is PDF, Excel, or CSV

### Can't login
- Verify Email/Password authentication is enabled
- Check `.env.local` has correct Firebase config
- Ensure user exists in Firebase Auth
- Confirm user document exists in Firestore `users` collection

## 📄 License

ISC

## 👥 Support

For issues or questions, contact school administration.