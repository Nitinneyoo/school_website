import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Award, Target, Star, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'

export const Route = createFileRoute('/classes')({
  component: Classes,
})

function Classes() {
  const classes = [
    {
      level: "LKG",
      age: "3-4 years",
      category: "pre-primary",
      description: "Foundation learning through play-based activities and sensory development",
      subjects: ["Basic English", "Numbers 1-10", "Colors & Shapes", "Rhymes & Songs", "Art & Craft", "Physical Activities"],
      students: "15-20 per class",
      duration: "3 hours",
      color: "bg-red-100 text-red-800 border-red-200",
      objectives: ["Develop motor skills", "Social interaction", "Basic language skills", "Creative expression"],
      activities: ["Story telling", "Drawing & coloring", "Music & dance", "Outdoor play"],
      assessment: "Continuous observation and activity-based evaluation"
    },
    {
      level: "UKG",
      age: "4-5 years",
      category: "pre-primary",
      description: "Pre-primary education with structured learning and school readiness preparation",
      subjects: ["English", "Mathematics", "Environmental Science", "Art & Craft", "Physical Education", "Moral Science"],
      students: "15-20 per class",
      duration: "4 hours",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      objectives: ["School readiness", "Basic reading & writing", "Number concepts", "Independence skills"],
      activities: ["Phonics learning", "Pattern recognition", "Group activities", "Field trips"],
      assessment: "Portfolio assessment and skill-based evaluation"
    },
    {
      level: "1st Grade",
      age: "5-6 years",
      category: "primary",
      description: "Beginning of formal education with focus on fundamental learning skills",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Basics", "Art"],
      students: "20-25 per class",
      duration: "5 hours",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      objectives: ["Reading fluency", "Basic math operations", "Scientific observation", "Social awareness"],
      activities: ["Reading sessions", "Math games", "Science experiments", "Cultural programs"],
      assessment: "Continuous and comprehensive evaluation (CCE)"
    },
    {
      level: "2nd Grade",
      age: "6-7 years",
      category: "primary",
      description: "Building fundamental skills with increased academic focus and conceptual understanding",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Physical Education"],
      students: "20-25 per class",
      duration: "5 hours",
      color: "bg-green-100 text-green-800 border-green-200",
      objectives: ["Vocabulary building", "Problem solving", "Critical thinking", "Team work"],
      activities: ["Creative writing", "Math competitions", "Science projects", "Sports activities"],
      assessment: "Unit tests and project-based assessment"
    },
    {
      level: "3rd Grade",
      age: "7-8 years",
      category: "primary",
      description: "Developing reading, writing, and analytical skills with subject-specific learning",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Art & Craft"],
      students: "25-30 per class",
      duration: "6 hours",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      objectives: ["Advanced reading", "Mathematical reasoning", "Scientific method", "Cultural knowledge"],
      activities: ["Library sessions", "Science fair", "Cultural events", "Field studies"],
      assessment: "Formative and summative assessments"
    },
    {
      level: "4th Grade",
      age: "8-9 years",
      category: "primary",
      description: "Expanding knowledge base and developing critical thinking abilities",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Environmental Studies"],
      students: "25-30 per class",
      duration: "6 hours",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      objectives: ["Advanced concepts", "Research skills", "Presentation abilities", "Leadership qualities"],
      activities: ["Research projects", "Debate competitions", "Science olympiad", "Community service"],
      assessment: "Comprehensive evaluation with practical assessments"
    },
    {
      level: "5th Grade",
      age: "9-10 years",
      category: "primary",
      description: "Preparing for middle school with advanced curriculum and life skills",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Life Skills"],
      students: "25-30 per class",
      duration: "6 hours",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      objectives: ["Academic excellence", "Self-confidence", "Time management", "Goal setting"],
      activities: ["Leadership programs", "Inter-school competitions", "Community projects", "Career guidance"],
      assessment: "Board preparation with mock tests"
    },
    {
      level: "6th Grade",
      age: "10-11 years",
      category: "middle",
      description: "Introduction to middle school subjects with specialized teachers and advanced concepts",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Art", "Physical Education"],
      students: "30-35 per class",
      duration: "7 hours",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      objectives: ["Subject mastery", "Analytical thinking", "Independent learning", "Peer collaboration"],
      activities: ["Science lab work", "Math clubs", "Literary societies", "Sports tournaments"],
      assessment: "Subject-wise evaluation and practical assessments"
    },
    {
      level: "7th Grade",
      age: "11-12 years",
      category: "middle",
      description: "Advanced middle school curriculum with focus on conceptual understanding",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Art", "Optional Language"],
      students: "30-35 per class",
      duration: "7 hours",
      color: "bg-teal-100 text-teal-800 border-teal-200",
      objectives: ["Conceptual clarity", "Problem-solving skills", "Creative expression", "Social responsibility"],
      activities: ["Science exhibitions", "Math olympiad", "Drama productions", "Environmental projects"],
      assessment: "Continuous evaluation with term examinations"
    },
    {
      level: "8th Grade",
      age: "12-13 years",
      category: "middle",
      description: "Preparing for high school with comprehensive curriculum and career exploration",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Art", "Career Guidance"],
      students: "30-35 per class",
      duration: "7 hours",
      color: "bg-cyan-100 text-cyan-800 border-cyan-200",
      objectives: ["High school readiness", "Career awareness", "Advanced concepts", "Leadership skills"],
      activities: ["Career counseling", "Skill development workshops", "Inter-school competitions", "Research projects"],
      assessment: "Comprehensive evaluation with board exam preparation"
    },
    {
      level: "9th Grade",
      age: "13-14 years",
      category: "high",
      description: "High school foundation with board curriculum and competitive exam preparation",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Optional Subject"],
      students: "35-40 per class",
      duration: "8 hours",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      objectives: ["Board exam preparation", "Subject specialization", "Time management", "Academic excellence"],
      activities: ["Board exam coaching", "Subject olympics", "Career seminars", "College preparation"],
      assessment: "Board pattern examinations and mock tests"
    },
    {
      level: "10th Grade",
      age: "14-15 years",
      category: "high",
      description: "Final year of school with intensive board exam preparation and career guidance",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer", "Additional Subject"],
      students: "35-40 per class",
      duration: "8 hours",
      color: "bg-slate-100 text-slate-800 border-slate-200",
      objectives: ["Board exam success", "Higher education readiness", "Career planning", "Personal development"],
      activities: ["Intensive coaching", "Mock board exams", "College counseling", "Stress management"],
      assessment: "Board examination preparation with regular assessments"
    }
  ]

  const categories = [
    { id: "all", name: "All Classes", count: classes.length },
    { id: "pre-primary", name: "Pre-Primary", count: classes.filter(c => c.category === "pre-primary").length },
    { id: "primary", name: "Primary", count: classes.filter(c => c.category === "primary").length },
    { id: "middle", name: "Middle School", count: classes.filter(c => c.category === "middle").length },
    { id: "high", name: "High School", count: classes.filter(c => c.category === "high").length },
  ]

  const filteredClasses = (category: string) => {
    return category === "all" ? classes : classes.filter(c => c.category === category)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Academic Programs
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Classes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education programs from LKG to 10th grade designed to nurture every child's potential through structured learning and holistic development
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses(category.id).map((classInfo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${classInfo.color} bg-white`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {classInfo.level}
                          </CardTitle>
                          <Badge className={classInfo.color}>
                            {classInfo.age}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {classInfo.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2 text-primary-600" />
                            {classInfo.students}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-primary-600" />
                            {classInfo.duration} daily
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Target className="h-4 w-4 mr-2 text-primary-600" />
                            Learning Objectives:
                          </h4>
                          <ul className="space-y-1">
                            {classInfo.objectives.map((objective, objIndex) => (
                              <li key={objIndex} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                                {objective}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary-600" />
                            Subjects ({classInfo.subjects.length}):
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {classInfo.subjects.map((subject, subIndex) => (
                              <Badge key={subIndex} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Star className="h-4 w-4 mr-2 text-primary-600" />
                            Key Activities:
                          </h4>
                          <div className="grid grid-cols-2 gap-1">
                            {classInfo.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-center text-xs text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                                {activity}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-2 text-primary-600" />
                            Assessment Method:
                          </h4>
                          <p className="text-sm text-gray-600">{classInfo.assessment}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Academic Excellence Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Academic Excellence Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 mb-3">Pass Rate</div>
              <Progress value={98} className="h-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-sm text-gray-600 mb-3">Distinction Rate</div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">92%</div>
              <div className="text-sm text-gray-600 mb-3">Student Satisfaction</div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">96%</div>
              <div className="text-sm text-gray-600 mb-3">Parent Satisfaction</div>
              <Progress value={96} className="h-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
