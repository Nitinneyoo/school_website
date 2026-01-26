import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { BookOpen, Palette, Calculator, Beaker, Globe, Music, Trophy, Sparkles, Users, Clock, ArrowLeft, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* Header */}
      {!selectedClassData && (
        <div className="text-center space-y-6 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Academic Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">CLASSES</span>
          </motion.h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive curriculum designed for every stage of development.
          </p>
        </div>
      )}

      {/* Detail View (Overlay or Replaced View) */}
      <AnimatePresence mode="wait">
        {selectedClassData ? (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto"
          >
             <button
               onClick={() => setSelectedClass(null)}
               className="mb-8 flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors backdrop-blur-md"
             >
               <ArrowLeft className="w-5 h-5" /> Back to Curriculum
             </button>

             <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${selectedClassData.color} opacity-20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2`} />
                
                <div className="relative z-10">
                   <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedClassData.color} p-0.5 shadow-2xl skew-y-3`}>
                         <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-[22px] flex items-center justify-center">
                            {(() => {
                                const Icon = selectedClassData.icon;
                                return <Icon className="w-10 h-10 text-white" />;
                            })()}
                         </div>
                      </div>
                      <div>
                         <h2 className="text-5xl font-black text-white mb-2">{selectedClassData.fullName}</h2>
                         <p className="text-2xl text-gray-400 font-light">{selectedClassData.description}</p>
                      </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                             <Sparkles className="w-6 h-6 text-yellow-500" /> Key Highlights
                         </h3>
                         <div className="grid grid-cols-2 gap-4">
                             <InfoCard icon={Users} label="Size" value={selectedClassData.students} color="blue" />
                             <InfoCard icon={Clock} label="Duration" value={selectedClassData.duration} color="green" />
                             <InfoCard icon={GraduationCap} label="Age Group" value={selectedClassData.age} color="purple" />
                         </div>
                      </div>

                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                             <BookOpen className="w-6 h-6 text-pink-500" /> Subjects
                         </h3>
                         <div className="flex flex-wrap gap-3">
                            {selectedClassData.subjects.map((sub, i) => (
                               <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-colors cursor-default">
                                  {sub}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        ) : (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
             {classes.map((cls, index) => {
               const Icon = cls.icon;
               return (
                 <motion.button
                   key={index}
                   onClick={() => setSelectedClass(index)}
                   whileHover={{ y: -10 }}
                   className="group relative h-[280px] p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden text-left"
                 >
                   <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                   
                   <div className="relative z-10 h-full flex flex-col justify-between">
                     <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cls.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                     </div>
                     
                     <div>
                        <h3 className="text-3xl font-black text-white mb-1">{cls.grade}</h3>
                        <p className="text-white/60 font-medium">{cls.age}</p>
                     </div>
                     
                     <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                        <ArrowLeft className="w-6 h-6 text-white rotate-180" />
                     </div>
                   </div>
                 </motion.button>
               );
             })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

interface InfoCardProps {
  icon: React.ElementType; // lucide-react icons don't always play nice with strict types without specific IconType, keeping any for icon is sometimes safer if imports vary, but let's try React.ElementType
  label: string;
  value: string;
  color: string;
}

function InfoCard({ icon: Icon, label, value, color }: InfoCardProps) {
  return (
    <div className="glass-card p-4 rounded-xl border-white/5 flex items-center gap-4">
      <div className={`p-3 rounded-lg bg-${color}-500/20`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
      </div>
      <div>
        <div className="text-gray-400 text-sm">{label}</div>
        <div className="text-white font-bold">{value}</div>
      </div>
    </div>
  );
}