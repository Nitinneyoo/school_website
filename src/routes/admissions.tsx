import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Calendar, FileText, CheckCircle, Users, Phone, Mail, MapPin } from 'lucide-react'

export const Route = createFileRoute('/admissions')({
  component: Admissions,
})

function Admissions() {
  const admissionProcess = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form or visit our office",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents and certificates",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Assessment",
      description: "Child assessment and parent interaction",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive admission confirmation and complete enrollment",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ]

  const requirements = [
    "Birth certificate",
    "Previous school records (if applicable)",
    "Passport size photographs",
    "Address proof",
    "Medical certificate",
    "Caste certificate (if applicable)"
  ]

  const fees = [
    { class: "LKG - UKG", admission: "₹5,000", tuition: "₹15,000/year", total: "₹20,000" },
    { class: "1st - 3rd Grade", admission: "₹7,000", tuition: "₹18,000/year", total: "₹25,000" },
    { class: "4th - 5th Grade", admission: "₹8,000", tuition: "₹20,000/year", total: "₹28,000" },
    { class: "6th - 8th Grade", admission: "₹10,000", tuition: "₹25,000/year", total: "₹35,000" },
    { class: "9th - 10th Grade", admission: "₹12,000", tuition: "₹30,000/year", total: "₹42,000" }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our school community and give your child the best foundation for their future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Process</h2>
            <div className="space-y-6">
              {admissionProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Dates</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Application Start: March 1st</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Application Deadline: April 30th</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Academic Year Starts: June 1st</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admission Fee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tuition Fee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total (1st Year)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {fee.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{fee.tuition}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                      {fee.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact for Admissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 9876543210</p>
              <p className="text-gray-600">+91 9876543211</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">admissions@brightfuture.edu</p>
              <p className="text-gray-600">info@brightfuture.edu</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">Learning City, State 123456</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
