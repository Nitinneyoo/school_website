import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Grade 5 Student",
      content: "The teachers at Bright Future School are exceptional. My daughter has grown so much academically and personally. The school truly cares about each child's development.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Grade 8 Student",
      content: "Outstanding school with excellent facilities. The holistic approach to education has helped my son develop confidence and leadership skills along with academic excellence.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Parent of LKG Student",
      content: "My little one loves going to school every day. The caring environment and play-based learning approach make it perfect for young children. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who trust us with their children's education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <Quote className="h-8 w-8 text-primary-200 absolute top-4 right-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
