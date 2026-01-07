import { createFileRoute } from '@tanstack/react-router';
import { Award, Users, Target, Heart, Sparkles, Star, Trophy, Zap, BookOpen, GraduationCap, Shield, Globe,Beaker } from 'lucide-react';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-3 mb-4">
              <Star className="h-10 w-10 animate-bounce text-yellow-300" />
              <Trophy className="h-16 w-16 animate-pulse" />
              <Star className="h-10 w-10 animate-bounce delay-150 text-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black">
              About Our School 🌟
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Nurturing young minds from LKG to 10th grade since 2000
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center"
                >
                  <Icon className="h-12 w-12 text-green-600 mx-auto mb-3 animate-pulse" />
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Sparkles className="h-12 w-12 text-green-600 mb-4 animate-pulse" />
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To provide quality education that empowers students to become confident, creative, and compassionate individuals who contribute positively to society while achieving their personal and academic goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Zap className="h-12 w-12 text-teal-600 mb-4 animate-pulse" />
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To be a leading educational institution recognized for excellence in teaching, character development, and preparing students for future success in an ever-changing global society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Our Story 📖
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A journey of excellence and growth
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                <strong className="text-green-600 font-black">Founded in 2000</strong>, Model Middle School began with a simple yet powerful vision: to create a learning environment where every child can thrive and reach their full potential. What started as a small institution with just 50 students has blossomed into a vibrant educational community.
              </p>
              <p>
                Over the past <strong className="text-teal-600 font-bold">23+ years</strong>, we've grown exponentially, now serving over <strong className="text-teal-600 font-bold">1,200 students</strong> from LKG to 10th grade. Our journey has been marked by continuous innovation, unwavering dedication to quality education, and a deep commitment to student welfare.
              </p>
              <p>
                We believe that education extends beyond textbooks and examinations. Our holistic approach focuses on developing <strong className="text-green-600 font-bold">well-rounded individuals</strong> who are not only academically proficient but also possess strong moral values, critical thinking skills, and the confidence to face future challenges.
              </p>
              <p>
                Our <strong className="text-teal-600 font-bold">12+ experienced teachers</strong> are the backbone of our institution, bringing passion, expertise, and dedication to every classroom. With state-of-the-art infrastructure, modern teaching methodologies, and a nurturing environment, we continue to set new standards in education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Our Core Values ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden bg-gradient-to-br ${value.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <Icon className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Facilities */}
      {/* <div className="py-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              World-Class Facilities 🏫
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Infrastructure designed for comprehensive learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl w-fit mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* Timeline/Achievements */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Our Journey 🚀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Milestones that shaped our excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-teal-500 hidden md:block"></div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1"></div>
                  
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className={`bg-gradient-to-br from-green-50 to-teal-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
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
  );
}
