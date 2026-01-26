import { useRef } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Mail, BookOpen, Star, Sparkles, Crown } from 'lucide-react';

export const Route = createFileRoute('/teachers')({
  component: TeachersPage,
});

// Mock Data
const headmaster = {
  name: "Ajayab Lal Singh",
  role: "Headmaster & Visionary",
  image: "/teachers/headmaster.png",
  bio: "With over 40 years of dedication to education, Ajayab Lal Singh steers the ship of our institution with wisdom and grace. He believes in a holistic approach where character is as important as calculus. A published author and decorated academic, his door is always open.",
  stats: {
    experience: "30 Years",
    vision: "Excellence",
    rating: "Legacy"
  },
  color: "from-amber-600 via-orange-600 to-yellow-600"
}

const teachers = [
  
  {
    id: 1,
    name: "Mr. Devendra Singh",
    subject: "Hindi Literature",
    image: "/teachers/literature_teacher.png",
    role: "Literary Society Head",
    bio: "With dedication and cultural wisdom, you nurture students by strengthening their language, values, and expression. Through literature and language, you connect tradition with modern thinking and help students develop clarity, confidence, and respect for their roots.",
    stats: { experience: "22 Years", classes: "English 8-10", rating: "4.9/5" },
    color: "from-stone-500 via-neutral-500 to-gray-500"
  },
  {
    id: 2,
    name: "Mr. Kamlesh Kushwaha",
    subject: "Mathematics & English",
    image: "/teachers/science_teacher.png",
    role: "Head of Mathematics",
    bio: "Kamlesh Kushwaha brings numbers to life with her unconventional teaching methods.With dedication, patience, and passion, you inspire young minds to think clearly, communicate confidently, and grow into responsible individuals. Through numbers and words, you shape understanding, build character, and lay the foundation for a brighter future.",
    stats: { experience: "15 Years", classes: "Math 6-10", rating: "4.9/5" },
    color: "from-pink-500 via-rose-500 to-red-500"
  },
  {
    id: 3,
    name: "Brijesh Manjhi",
    subject: "Science",
    image: "/teachers/science_teacher.png",
    role: "Science Department Lead",
    bio: "Turning the classroom into a laboratory of wonder. Brijesh Manjhi's classes are known for explosive experiments and deep dives into the quantum realm. He inspires curiosity about how the universe works, one atom at a time.",
    stats: { experience: "15 Years", classes: "Science 5-10", rating: "4.95/5" },
    color: "from-blue-400 via-cyan-400 to-teal-400"
  },
  {
    id: 4,
    name: "Ms. Elena Rodriguez",
    subject: "Visual Arts & Design",
    image: "/teachers/art_teacher.png",
    role: "Creative Director",
    bio: "Ms. Rodriguez sees the world in colors and shapes. Her studio is a sanctuary for expression. With a background in gallery curation, she helps students find their unique artistic voice and turn abstract ideas into masterpieces.",
    stats: { experience: "15 Years", classes: "Art & Media", rating: "5.0/5" },
    color: "from-violet-500 via-purple-500 to-indigo-500"
  },
  {
    id: 5,
    name: "Mr. Arthur Pendelton",
    subject: "Social Science",
    image: "/teachers/history_teacher.png",
    role: "Senior Historian",
    bio: "Walking into Mr. Pendelton's class is like stepping into a time machine. With his storytelling, ancient empires rise and fall right before your eyes. He teaches us that to understand the future, we must first understand our past.",
    stats: { experience: "5 Years", classes: "Social Science 7-10", rating: "4.8/5" },
    color: "from-amber-700 via-orange-700 to-brown-700"
  },
  {
    id: 6,
    name: "Coach Marcus Jordan",
    subject: "Physical Education",
    image: "/teachers/sports_teacher.png",
    role: "Athletic Director",
    bio: "Coach Jordan doesn't just build athletes; he builds character. Former Olympic qualifier, he brings elite discipline and boundless energy to the field. He believes that a healthy body is the foundation for a sharp mind.",
    stats: { experience: "10 Years", classes: "PE All Grades", rating: "5.0/5" },
    color: "from-emerald-500 via-green-500 to-lime-500"
  },
  {
    id: 7,
    name: "Ms. Clara Beaux",
    subject: "Music & Performing Arts",
    image: "/teachers/music_teacher.png",
    role: "Orchestra Conductor",
    bio: "A virtuoso violinist who treats every class like a symphony. Ms. Beaux helps students find rhythm in chaos and melody in silence. Under her baton, the school orchestra has won three national championships.",
    stats: { experience: "18 Years", classes: "Music 1-10", rating: "5.0/5" },
    color: "from-fuchsia-600 via-purple-600 to-pink-600"
  },
  {
    id: 8,
    name: "Mrs. Beatrice Woolf",
    subject: "English Literature",
    image: "/teachers/literature_teacher.png",
    role: "Literary Society Head",
    bio: "Mrs. Woolf's classroom smells of old books and fresh coffee. She inspires a deep love for the written word, guiding students through the complexities of Shakespeare and the modern voice of poetry alike.",
    stats: { experience: "22 Years", classes: "English 8-10", rating: "4.9/5" },
    color: "from-stone-500 via-neutral-500 to-gray-500"
  },
  {
    id: 9,
    name: "Ms. Riya Manjhi",
    subject: "Computer Science",
    image: "/teachers/cs_teacher.png",
    role: "Tech Innovation Lead",
    bio: "Ms. Riya Manjhi is preparing students for a world that doesn't exist yet. From coding AIs to building robots, his lab is where the future is prototyped. He challenges students to think primarily in logic, but ultimately in possibilities.",
    stats: { experience: "6 Years", classes: "CS 1-06", rating: "5.0/5" },
    color: "from-cyan-500 via-blue-500 to-indigo-500"
  }
];

function TeachersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#050510] text-white selection:bg-yellow-500/30">
        
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vh] h-[50vh] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-300">World Class Educators</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 animate-in fade-in zoom-in duration-1000">
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500">MENTORS</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-xl text-gray-400 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 delay-300 duration-1000">
            Shaping the future with passion, innovation, and dedication. Meet the visionaries behind our academic excellence.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="animate-bounce pt-12"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Headmaster Special Section */}
      <section className="relative z-10 py-32 px-4">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold tracking-widest uppercase mb-4">
                    <Crown className="w-5 h-5" />
                    <span>The Leadership</span>
                 </div>
            </div>
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <img src={headmaster.image} alt={headmaster.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-3xl font-bold text-white mb-1">{headmaster.name}</h2>
                                <p className="text-yellow-400 font-medium tracking-wide">{headmaster.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                         <h3 className="text-5xl font-black text-white italic font-serif">"Education is not the filling of a pail, but the lighting of a fire."</h3>
                         <div className="h-1 w-24 bg-yellow-500 rounded-full" />
                         <p className="text-xl text-gray-300 leading-relaxed font-light">{headmaster.bio}</p>
                         
                         <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold text-white">{headmaster.stats.experience}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">{headmaster.stats.vision}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Vision</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">{headmaster.stats.rating}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Status</div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Teachers Gallery */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 pb-32 space-y-32">
        {teachers.map((teacher, index) => (
          <TeacherSection key={teacher.id} teacher={teacher} index={index} />
        ))}
      </div>

    </div>
  );
}

function TeacherSection({ teacher, index }: { teacher: typeof teachers[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 min-h-[80vh] ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Image Section */}
      <div className="flex-1 w-full relative group">
        <div className={`absolute inset-0 bg-gradient-to-br ${teacher.color} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
        
        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10`} />
          <img 
            src={teacher.image} 
            alt={teacher.name}
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
            <div className="flex items-center gap-4 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white`}>
                {teacher.role}
              </span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span className="text-sm font-bold">{teacher.stats.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-8 p-4">
        <motion.div style={{ y }} className="space-y-8">
          <div>
            <h3 className={`text-xl font-bold bg-gradient-to-r ${teacher.color} bg-clip-text text-transparent mb-2 uppercase tracking-widest`}>
              {teacher.subject}
            </h3>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9]">
              {teacher.name}
            </h2>
          </div>

          <p className="text-xl text-gray-400 leading-relaxed font-light border-l-4 border-white/10 pl-6">
            {teacher.bio}
          </p>

          <div className="grid grid-cols-2 gap-6">
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <GraduationCap className="w-8 h-8 text-gray-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{teacher.stats.experience}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Experience</div>
             </div>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <BookOpen className="w-8 h-8 text-gray-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{teacher.stats.classes}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Focus Area</div>
             </div>
          </div>

          <button className="group mt-8 px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all hover:gap-4">
            <span>Contact {teacher.name.split(" ")[1]}</span>
            <Mail className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
      
    </motion.div>
  );
}
