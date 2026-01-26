import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Sparkles, Rocket, Brain } from 'lucide-react';
import { RepublicDayBanner } from '../components/RepublicDayBanner';
// import { MacbookScroll } from '../components/ui/macbook-scroll';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-32 pb-28">
      
      {/* 🇮🇳 REPUBLIC DAY BANNER - Automatically shows on January 26th 
          To manually enable/disable, uncomment the line below.
          The component checks the date automatically and only displays on Jan 26.
      */}
      <RepublicDayBanner variant="hero" />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] rounded-[3rem] overflow-hidden group hidden lg:block"
          >
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-[3rem] overflow-hidden">
              <img 
                src="/school_c_building.png" 
                alt="Model Middle School C-Shaped Building" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparen" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-gray-300">Welcome to the Future of Learning</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              MODEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">MIDDLE</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500">SCHOOL</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-gray-400 font-light leading-relaxed"
            >
              Where academic excellence meets creative innovation. We don't just teach; we ignite potential.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start pt-8"
            >
              <Link 
                to="/admissions"
                className="group px-8 py-4 bg-white text-black rounded-full font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                Start Journey <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/admissions"
                className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 backdrop-blur-md transition-colors flex items-center justify-center"
              >
                Explore More <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
           <FeatureCard 
             icon={<Brain className="w-12 h-12 text-pink-500" />}
             title="Interactive Learning"
             desc="Gamified curriculum that adapts to every student's pace."
             color="from-pink-500/20 to-purple-500/20"
           />
           <FeatureCard 
             icon={<Rocket className="w-12 h-12 text-blue-500" />}
             title="Innovation Hub"
             desc="State-of-the-art labs for robotics, coding, and AI."
             color="from-blue-500/20 to-cyan-500/20"
           />
           <FeatureCard 
             icon={<Trophy className="w-12 h-12 text-yellow-500" />}
             title="Global Excellence"
             desc="Preparing leaders for a connected, borderless world."
             color="from-yellow-500/20 to-orange-500/20"
           />
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="px-4 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden group"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-[3rem] overflow-hidden">
            {/* Image container */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img 
                src="/school_hero_4k.png" 
                alt="Model Middle School Campus" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Campus</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    A world-class learning environment designed to inspire creativity, foster collaboration, and nurture excellence. Experience education in a space where innovation meets tradition.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
         <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem value="50+" label="Expert Mentors" />
            <StatItem value="1000+" label="Bright Minds" />
            <StatItem value="100%" label="Success Rate" />
            <StatItem value="25+" label="Global Awards" />
         </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 text-center">
         <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-5xl font-black text-white mb-6 relative z-10">Ready to Shape the Future?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              Join a community of dreamers, doers, and leaders. Admissions are open for the upcoming academic year.
            </p>
            <Link 
               to="/admissions"
               className="inline-flex relative z-10 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-2xl text-white hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/50"
             >
               Apply Now
             </Link>
         </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-[2rem] bg-gradient-to-br ${color} border border-white/5 backdrop-blur-sm`}
    >
      <div className="bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-lg text-gray-400 font-light leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
        {value}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-gray-500">{label}</div>
    </div>
  )
}
