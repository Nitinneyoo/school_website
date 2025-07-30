import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Heart, Globe, Zap, Shield, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Features() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Quality Education",
      description: "Comprehensive curriculum designed to foster academic excellence and critical thinking skills.",
      badge: "Academic"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Teachers",
      description: "Dedicated and qualified educators with years of experience in their respective fields.",
      badge: "Faculty"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Consistently high performance in board exams and competitive assessments.",
      badge: "Achievement"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Caring Environment",
      description: "Safe, inclusive, and supportive atmosphere where every child feels valued and nurtured.",
      badge: "Culture"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Holistic Development",
      description: "Focus on overall personality development through academics, sports, arts, and life skills.",
      badge: "Development"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure with smart classrooms, laboratories, and technology integration.",
      badge: "Infrastructure"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Comprehensive safety measures with CCTV monitoring, security guards, and emergency protocols.",
      badge: "Security"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition",
      description: "Multiple awards and certifications for educational excellence and student achievements.",
      badge: "Awards"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Why Choose Bright Future School
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the perfect environment for your child's growth and development with our comprehensive approach to education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-slate-200 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-slate-200 rounded-2xl p-8 text-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-slate-800">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1200+</div>
              <div className="text-slate-800">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-slate-800">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-slate-800">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
