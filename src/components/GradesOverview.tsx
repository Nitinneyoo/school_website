import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Baby, User, GraduationCap, BookOpen, Clock, Users as UsersIcon, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function GradesOverview() {
  const gradeGroups = [
    {
      icon: <Baby className="h-12 w-12" />,
      title: "Pre-Primary",
      subtitle: "LKG - UKG",
      age: "3-5 years",
      students: "15-20 per class",
      duration: "3-4 hours",
      subjects: ["Basic English", "Numbers", "Colors", "Rhymes", "Art & Craft"],
      description: "Foundation learning through play-based activities and structured pre-school education focusing on motor skills development.",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      features: ["Play-based Learning", "Motor Skills Development", "Social Skills", "Creative Expression"]
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Primary",
      subtitle: "Grades 1-5",
      age: "5-10 years",
      students: "20-25 per class",
      duration: "5-6 hours",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer"],
      description: "Building fundamental skills in reading, writing, mathematics, and basic sciences with interactive learning methods.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      features: ["Reading & Writing", "Basic Mathematics", "Science Exploration", "Language Skills"]
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Middle School",
      subtitle: "Grades 6-8",
      age: "10-13 years",
      students: "25-30 per class",
      duration: "6-7 hours",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Art"],
      description: "Comprehensive curriculum preparing students for advanced learning and critical thinking with specialized subject teachers.",
      color: "bg-green-100 text-green-800 border-green-200",
      features: ["Critical Thinking", "Subject Specialization", "Project-based Learning", "Leadership Skills"]
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "High School",
      subtitle: "Grades 9-10",
      age: "13-15 years",
      students: "30-35 per class",
      duration: "7-8 hours",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Electives"],
      description: "Advanced curriculum focused on board exam preparation and career guidance with competitive exam support.",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      features: ["Board Exam Prep", "Career Guidance", "Competitive Exams", "Advanced Studies"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Our Academic Structure
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Age-Appropriate Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specially designed curriculum for each grade level to support your child's development at every stage of their educational journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gradeGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${group.color} bg-white`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary-600">
                      {group.icon}
                    </div>
                    <Badge className={group.color}>
                      {group.age}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{group.title}</CardTitle>
                  <p className="text-lg font-semibold text-gray-700">{group.subtitle}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="h-4 w-4 mr-2 text-primary-600" />
                      {group.students}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-primary-600" />
                      {group.duration} daily
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {group.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.subjects.map((subject, subIndex) => (
                        <Badge key={subIndex} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore Our Academic Programs?
            </h3>
            <p className="text-gray-600 mb-6">
              Learn more about our comprehensive curriculum and find the perfect grade for your child
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/classes">
                  <Calendar className="mr-2 h-5 w-5" />
                  View All Classes
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/admissions">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Admission Process
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
