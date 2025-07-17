import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Award, Users, Target, Heart } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Excellence",
      description: "We strive for academic excellence in all our educational programs"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Community",
      description: "Building a strong, supportive community for all students and families"
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Growth",
      description: "Fostering personal and academic growth for every student"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Care",
      description: "Providing a caring and nurturing environment for learning"
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Model Middle School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds from LKG to 10th grade with excellence, innovation, and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2000, Model Middle School has been dedicated to providing quality education
              to students from LKG to 10th grade. Our journey began with a simple vision: to create
              a learning environment where every child can thrive and reach their full potential.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have grown from a small school with 50 students to a thriving
              educational institution serving over 1,200 students. Our commitment to excellence
              remains unwavering as we continue to adapt and innovate in our teaching methods.
            </p>
            <p className="text-gray-600">
              We believe that education is not just about academic achievement, but about developing
              well-rounded individuals who are prepared for the challenges of tomorrow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="School building"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-primary-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            To provide quality education that empowers students to become confident, creative, and
            compassionate individuals who contribute positively to society while achieving their
            personal and academic goals.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
