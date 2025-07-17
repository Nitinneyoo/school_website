import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Give your child the best foundation for their future. Applications are now open for the next academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Application</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
