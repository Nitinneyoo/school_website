import { motion } from 'framer-motion';
import { Trophy, Award, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { memo } from 'react';

interface TopperData {
  name: string;
  class: number;
  percentage: string;
  year: string;
  image: string;
  color: string;
}

interface BoardToppersProps {
  showViewAllButton?: boolean;
}

const toppersData: TopperData[] = [
  {
    name: 'Aarav Sharma',
    class: 5,
    percentage: '98.5%',
    year: '2024-25',
    image: '/placeholder-student.jpg', // Will be replaced with actual images
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Patel',
    class: 8,
    percentage: '97.8%',
    year: '2024-25',
    image: '/placeholder-student.jpg',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Rohan Verma',
    class: 10,
    percentage: '99.2%',
    year: '2024-25',
    image: '/placeholder-student.jpg',
    color: 'from-amber-500 to-orange-500',
  },
];

export const BoardToppers = memo(({ showViewAllButton = false }: BoardToppersProps) => {
  return (
    <section className="px-4 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold tracking-widest uppercase text-amber-400">
            Board Examination Achievement – MPBSE
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          Last Year's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
            Board Toppers
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          Celebrating excellence in MP Board examinations. Our students consistently achieve outstanding results across all examination classes.
        </p>
      </motion.div>

      {/* Toppers Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {toppersData.map((topper, index) => (
          <motion.div
            key={topper.class}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative glass-card rounded-[2.5rem] p-8 overflow-hidden border-white/10 hover:border-white/20 transition-all duration-500">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topper.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Animated Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${topper.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* MP Board Badge */}
                <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/10">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">MP Board</span>
                </div>

                {/* Student Photo */}
                <div className="relative mt-8">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${topper.color} rounded-full opacity-50 group-hover:opacity-75 blur-xl transition-opacity duration-500`} />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 bg-gradient-to-br from-gray-700 to-gray-800">
                    {/* Placeholder - will show actual image when available */}
                    <div className="w-full h-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-white/40" />
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-400 transition-all duration-300">
                    {topper.name}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-gray-300">
                      Class {topper.class} <span className="text-amber-400">• MP Board Exam Class</span>
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      Academic Year {topper.year}
                    </p>
                  </div>

                  {/* Percentage Badge */}
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${topper.color} bg-opacity-20 border border-white/10`}>
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <span className="text-2xl font-black text-white">
                      {topper.percentage}
                    </span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Results Button */}
      {showViewAllButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/resultss"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/50"
          >
            <span>View All Results</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </section>
  );
});

BoardToppers.displayName = 'BoardToppers';
