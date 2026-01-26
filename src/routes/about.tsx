import { createFileRoute } from '@tanstack/react-router';
import { Award, Users, Target, Heart, Sparkles, Star, Trophy, Zap, BookOpen } from 'lucide-react';
import { Vortex } from '@/components/ui/vortex';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for academic excellence in all programs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong, supportive community",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Growth",
      description: "Fostering personal and academic development",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Providing a nurturing learning environment",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const achievements = [
    { year: '2000', title: 'School Established', description: 'Started with 50 students' },
    { year: '2005', title: 'First Board Results', description: '95% pass rate' },
    { year: '2010', title: 'Infrastructure Expansion', description: 'Expansion' },
    { year: '2015', title: ' Classrooms', description: 'Smart class' },
    { year: '2020', title: '1000+ Students', description: 'Growing community milestone' },
    { year: '2024', title: 'Excellence ', description: 'Best School' },
  ];

  // const facilities = [
  //   { icon: BookOpen, title: 'Modern Library', description: '5000+ books and digital resources' },
  //   { icon: Beaker, title: 'Science Labs', description: 'Physics, Chemistry, Biology & Computer labs' },
  //   { icon: Trophy, title: 'Sports Complex', description: 'Indoor & outdoor sports facilities' },
  //   { icon: Globe, title: 'Smart Classrooms', description: 'Interactive digital learning' },
  //   { icon: Shield, title: 'Safe Campus', description: 'CCTV monitored secure environment' },
  //   { icon: GraduationCap, title: 'Experienced Faculty', description: '50+ qualified teachers' },
  // ];

  const stats = [
    { number: '23+', label: 'Years of Excellence', icon: Trophy },
    { number: '1200+', label: 'Happy Students', icon: Users },
    { number: '12+', label: 'Expert Teachers', icon: BookOpen },
    { number: '98%', label: 'Success Rate', icon: Star },
  ];

  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div className="relative text-center space-y-6 pt-32 pb-20 px-4 relative z-10">
          <div className="flex justify-center gap-3 mb-4">
            <Star className="h-10 w-10 animate-bounce text-yellow-400" />
            <Trophy className="h-16 w-16 text-yellow-500 animate-pulse" />
            <Star className="h-10 w-10 animate-bounce delay-150 text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Nurturing young minds from LKG to 10th grade since 2000
          </p>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 border-white/5 text-center group hover:bg-white/10 transition-colors"
                  >
                    <Icon className="h-12 w-12 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-10 border-green-500/20 hover:border-green-500/40 transition-colors">
                <Sparkles className="h-12 w-12 text-green-400 mb-6" />
                <h2 className="text-4xl font-black text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To provide quality education that empowers students to become confident, creative, and compassionate individuals who contribute positively to society while achieving their personal and academic goals.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-10 border-teal-500/20 hover:border-teal-500/40 transition-colors">
                <Zap className="h-12 w-12 text-teal-400 mb-6" />
                <h2 className="text-4xl font-black text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be a leading educational institution recognized for excellence in teaching, character development, and preparing students for future success in an ever-changing global society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Our Story 📖
              </h2>
              <p className="text-xl text-gray-400">
                A journey of excellence and growth
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12 border-white/10">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-green-400 font-black">Founded in 2000</strong>, Model Middle School began with a simple yet powerful vision: to create a learning environment where every child can thrive and reach their full potential. What started as a small institution with just 50 students has blossomed into a vibrant educational community.
                </p>
                <p>
                  Over the past <strong className="text-teal-400 font-bold">23+ years</strong>, we've grown exponentially, now serving over <strong className="text-teal-400 font-bold">1,200 students</strong> from LKG to 10th grade. Our journey has been marked by continuous innovation, unwavering dedication to quality education, and a deep commitment to student welfare.
                </p>
                <p>
                  We believe that education extends beyond textbooks and examinations. Our holistic approach focuses on developing <strong className="text-green-400 font-bold">well-rounded individuals</strong> who are not only academically proficient but also possess strong moral values, critical thinking skills, and the confidence to face future challenges.
                </p>
                <p>
                  Our <strong className="text-teal-400 font-bold">12+ experienced teachers</strong> are the backbone of our institution, bringing passion, expertise, and dedication to every classroom. With state-of-the-art infrastructure, modern teaching methodologies, and a nurturing environment, we continue to set new standards in education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Our Core Values ✨
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden glass-card border-white/5 rounded-2xl p-6 transition-all hover:bg-white/5`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative">
                      <Icon className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 group-hover:text-white/90 transition-colors">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline/Achievements */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Our Journey 🚀
              </h2>
              <p className="text-xl text-gray-400">
                Milestones that shaped our excellence
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500/20 to-teal-500/20 hidden md:block"></div>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="flex-1"></div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white font-bold border-2 border-green-500/50">
                        <Star className="h-5 w-5 text-green-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className={`glass-card p-8 rounded-2xl border-white/10 hover:border-green-500/30 transition-colors ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2">
                          {achievement.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Vortex>
  );
}
