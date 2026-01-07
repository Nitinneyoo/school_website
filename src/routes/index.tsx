import { createFileRoute, Link } from '@tanstack/react-router';
import { GraduationCap, Users, BookOpen, Trophy, Sparkles, ArrowRight, Star, Zap, Heart, Target } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start gap-3 mb-6">
                <Sparkles className="h-10 w-10 animate-bounce text-yellow-300" />
                <GraduationCap className="h-16 w-16 animate-pulse" />
                <Sparkles className="h-10 w-10 animate-bounce delay-150 text-yellow-300" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center lg:text-left">
                Welcome to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                  Model Middle School
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 font-medium text-center lg:text-left">
                Where Excellence Meets Innovation 🌟<br />
                Nurturing Young Minds for a Brighter Tomorrow
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                <Link
                  to="/admissions"
                  className="group flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Learn More
                  <BookOpen className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* School Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Model Middle School Building"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-purple-600">4.9</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-600">15+</div>
                    <div className="text-xs text-gray-600">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">
                Happy Students
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">
                Expert Teachers
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <Zap className="h-6 w-6 text-yellow-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose Us? ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover what makes Model Middle School special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <BookOpen className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Quality Education
                </h3>
                <p className="text-blue-100">
                  Comprehensive curriculum designed for holistic development
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Users className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Expert Faculty
                </h3>
                <p className="text-green-100">
                  Experienced teachers dedicated to student success
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Target className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Results Focused
                </h3>
                <p className="text-orange-100">
                  Proven track record of academic excellence
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Heart className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Caring Environment
                </h3>
                <p className="text-pink-100">
                  Safe and nurturing atmosphere for all students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Quick Access 🚀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need, just a click away
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/resultss"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <Trophy className="h-12 w-12 text-purple-600 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                View Results 📊
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check academic results by class
              </p>
            </Link>

            <Link
              to="/classes"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <BookOpen className="h-12 w-12 text-blue-600 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Our Classes 📚
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our grade levels
              </p>
            </Link>

            <Link
              to="/contact"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <Users className="h-12 w-12 text-green-600 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Get in Touch 📧
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're here to help you
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
