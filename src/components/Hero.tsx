import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Star, Users, Trophy, BookOpen, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "1200+", label: "Happy Students" },
    { icon: <BookOpen className="h-5 w-5" />, value: "50+", label: "Expert Teachers" },
    { icon: <Trophy className="h-5 w-5" />, value: "95%", label: "Success Rate" },
    { icon: <MapPin className="h-5 w-5" />, value: "23+", label: "Years Experience" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-800/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                Rated #1 School in the District
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Where
                <span className="text-yellow-400"> Model Futures</span>
                <br />
                Begin Today
              </h1>
              
              <p className="text-xl text-primary-100 max-w-lg">
                Excellence in education from LKG to 10th grade. Join our community of learners 
                and watch your child flourish in a nurturing, innovative environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link to="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-yellow-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy students learning"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6"
              >
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">98%</div>
                        <div className="text-sm text-gray-600">Pass Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">4.9</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">15+</div>
                        <div className="text-sm text-gray-600">Awards</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
