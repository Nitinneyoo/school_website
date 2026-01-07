import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { BookOpen, Palette, Calculator, Beaker, Globe, Music, Trophy, Sparkles, Users, Clock, ArrowLeft, Baby, User, GraduationCap } from 'lucide-react';

export const Route = createFileRoute('/classes')({
  component: ClassesPage,
});

function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const classes = [
    { 
      grade: 'LKG', 
      color: 'from-red-500 to-pink-500', 
      icon: Palette,
      fullName: 'Lower Kindergarten',
      age: '3-4 years',
      students: '15-20 per class',
      duration: '3-4 hours',
      subjects: ['Basic English', 'Numbers', 'Colors', 'Rhymes', 'Art & Craft'],
      description: 'Foundation learning through play-based activities focusing on motor skills and social development.',
      features: ['Play-based Learning', 'Motor Skills', 'Social Skills', 'Creative Expression'],
    },
    { 
      grade: 'UKG', 
      color: 'from-orange-500 to-amber-500', 
      icon: Music,
      fullName: 'Upper Kindergarten',
      age: '4-5 years',
      students: '15-20 per class',
      duration: '3-4 hours',
      subjects: ['English', 'Numbers', 'Colors', 'Rhymes', 'Art & Craft', 'Basic Writing'],
      description: 'Pre-school education preparing children for formal schooling with structured activities.',
      features: ['School Readiness', 'Basic Literacy', 'Number Recognition', 'Fine Motor Skills'],
    },
    { 
      grade: 'Class 1', 
      color: 'from-yellow-500 to-lime-500', 
      icon: BookOpen,
      fullName: 'Class 1',
      age: '5-6 years',
      students: '20-25 per class',
      duration: '5-6 hours',
      subjects: ['English', 'Mathematics', 'EVS', 'Hindi', 'Computer', 'Art', 'Sports'],
      description: 'Beginning formal education with focus on reading, writing, and basic arithmetic.',
      features: ['Reading Fundamentals', 'Basic Math', 'Environmental Studies', 'Language Development'],
    },
    { 
      grade: 'Class 2', 
      color: 'from-green-500 to-emerald-500', 
      icon: Beaker,
      fullName: 'Class 2',
      age: '6-7 years',
      students: '20-25 per class',
      duration: '5-6 hours',
      subjects: ['English', 'Mathematics', 'EVS', 'Hindi', 'Computer', 'Art', 'Sports'],
      description: 'Building on foundational skills with more complex reading and mathematical concepts.',
      features: ['Advanced Reading', 'Problem Solving', 'Science Basics', 'Communication Skills'],
    },
    { 
      grade: 'Class 3', 
      color: 'from-teal-500 to-cyan-500', 
      icon: Globe,
      fullName: 'Class 3',
      age: '7-8 years',
      students: '20-25 per class',
      duration: '5-6 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Introduction to separate science and social studies with enhanced analytical thinking.',
      features: ['Critical Thinking', 'Scientific Method', 'Geography Basics', 'Creative Writing'],
    },
    { 
      grade: 'Class 4', 
      color: 'from-blue-500 to-indigo-500', 
      icon: Calculator,
      fullName: 'Class 4',
      age: '8-9 years',
      students: '20-25 per class',
      duration: '5-6 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Advanced primary education with deeper exploration of subjects and concepts.',
      features: ['Advanced Mathematics', 'Experiments', 'History & Civics', 'Research Skills'],
    },
    { 
      grade: 'Class 5', 
      color: 'from-purple-500 to-violet-500', 
      icon: Trophy,
      fullName: 'Class 5',
      age: '9-10 years',
      students: '20-25 per class',
      duration: '5-6 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Culmination of primary education preparing students for middle school challenges.',
      features: ['Leadership Skills', 'Independent Study', 'Project Work', 'Presentation Skills'],
    },
    { 
      grade: 'Class 6', 
      color: 'from-pink-500 to-fuchsia-500', 
      icon: BookOpen,
      fullName: 'Class 6',
      age: '10-11 years',
      students: '25-30 per class',
      duration: '6-7 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Beginning of middle school with specialized subject teachers and deeper curriculum.',
      features: ['Critical Analysis', 'Subject Depth', 'Lab Work', 'Group Projects'],
    },
    { 
      grade: 'Class 7', 
      color: 'from-rose-500 to-red-500', 
      icon: Beaker,
      fullName: 'Class 7',
      age: '11-12 years',
      students: '25-30 per class',
      duration: '6-7 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Advanced middle school with comprehensive curriculum and practical applications.',
      features: ['Advanced Concepts', 'Practical Learning', 'Debates', 'Scientific Inquiry'],
    },
    { 
      grade: 'Class 8', 
      color: 'from-amber-500 to-orange-500', 
      icon: Globe,
      fullName: 'Class 8',
      age: '12-13 years',
      students: '25-30 per class',
      duration: '6-7 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Art'],
      description: 'Pre-high school preparation with career awareness and advanced learning methodologies.',
      features: ['Career Guidance', 'Advanced Labs', 'Research Projects', 'Time Management'],
    },
    { 
      grade: 'Class 9', 
      color: 'from-lime-500 to-green-500', 
      icon: Calculator,
      fullName: 'Class 9',
      age: '13-14 years',
      students: '30-35 per class',
      duration: '7-8 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Electives'],
      description: 'High school with board exam foundation and competitive exam preparation.',
      features: ['Board Exam Prep', 'Advanced Topics', 'Practical Focus', 'Career Planning'],
    },
    { 
      grade: 'Class 10', 
      color: 'from-cyan-500 to-blue-500', 
      icon: Trophy,
      fullName: 'Class 10',
      age: '14-15 years',
      students: '30-35 per class',
      duration: '7-8 hours',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Electives'],
      description: 'Board examination year with intensive preparation and future pathway guidance.',
      features: ['Board Exam Focus', 'Mock Tests', 'Career Counseling', 'Study Techniques'],
    },
  ];

  const selectedClassData = selectedClass !== null ? classes[selectedClass] : null;

  if (selectedClassData) {
    const Icon = selectedClassData.icon;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setSelectedClass(null)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to All Classes</span>
          </button>

          {/* Class Detail Card */}
          <div className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 bg-gradient-to-br ${selectedClassData.color} p-1`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 bg-gradient-to-br ${selectedClassData.color} rounded-2xl`}>
                  <Icon className="h-16 w-16 text-white" />
                </div>
                <span className={`px-4 py-2 bg-gradient-to-br ${selectedClassData.color} text-white rounded-full text-lg font-bold`}>
                  {selectedClassData.age}
                </span>
              </div>

              <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                {selectedClassData.fullName}
              </h1>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${selectedClassData.color} mb-6">
                {selectedClassData.grade}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {selectedClassData.description}
              </p>

              {/* Class Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className={`p-4 bg-gradient-to-br ${selectedClassData.color} bg-opacity-10 rounded-xl`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-gray-900 dark:text-white">Class Size</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{selectedClassData.students}</p>
                </div>

                <div className={`p-4 bg-gradient-to-br ${selectedClassData.color} bg-opacity-10 rounded-xl`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="font-bold text-gray-900 dark:text-white">Duration</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{selectedClassData.duration} daily</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                  Key Features 🌟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedClassData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className={`w-2 h-2 bg-gradient-to-br ${selectedClassData.color} rounded-full`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subjects */}
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                  Subjects Covered 📚
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedClassData.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-br ${selectedClassData.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-3 mb-4">
              <Sparkles className="h-10 w-10 animate-bounce text-yellow-300" />
              <BookOpen className="h-16 w-16 animate-pulse" />
              <Sparkles className="h-10 w-10 animate-bounce delay-150 text-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black">
              Our Classes 📚
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              From LKG to Class 10 - Click to Explore Each Class!
            </p>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Select a Class to View Details ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Click on any class to see curriculum, subjects, and more!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => {
              const Icon = cls.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedClass(index)}
                  className={`group relative overflow-hidden bg-gradient-to-br ${cls.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-110 cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative text-center">
                    <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-125 transition-transform" />
                    <h3 className="text-2xl font-black text-white">{cls.grade}</h3>
                    <p className="text-white/80 text-sm mt-1">{cls.age}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}