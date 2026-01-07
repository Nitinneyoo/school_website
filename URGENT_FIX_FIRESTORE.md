# 🔧 URGENT FIX: Update Firestore Rules

## The Problem
Teacher accounts are created in Firebase Auth but NOT in Firestore because the security rules block it.

## The Solution

**You need to update the Firestore security rules in Firebase Console:**

### Step 1: Go to Firestore Rules
Visit: https://console.firebase.google.com/project/model-middle-school/firestore/rules

### Step 2: Find Line 28

Look for this line:
```javascript
allow create: if isAdmin();
```

### Step 3: Replace it with:
```javascript
// Allow create if admin OR if creating own profile (for teacher account creation)
allow create: if isAdmin() || (isAuthenticated() && request.auth.uid == userId);
```

### Step 4: Click "Publish"

### Complete Updated Rules

Here's the complete updated section (lines 25-31):

```javascript
// Users collection
match /users/{userId} {
  allow read: if isAdmin() || request.auth.uid == userId;
  // Allow create if admin OR if creating own profile (for teacher account creation)
  allow create: if isAdmin() || (isAuthenticated() && request.auth.uid == userId);
  allow update: if isAdmin();
  allow delete: if isAdmin();
}
```

## Why This Fix Works

**Before:** Only admins could create user documents
- Problem: When creating teacher, we're logged in as the NEW teacher
- New teacher is not admin → Can't create their own document ❌

**After:** Admins OR authenticated users can create their OWN user document
- Admin can still create any user document ✅
- New teacher can create ONLY their own document ✅
- Security is maintained (can only create userId matching their UID) 🔒

## Test After Updating

1. Deploy the new rules in Firebase Console
2. Try creating a teacher again from admin panel
3. Check Firestore → users collection
4. You should now see the teacher document! ✅

---

**This is the ONLY change needed to make it work!**
