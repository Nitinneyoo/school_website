import { createFileRoute } from '@tanstack/react-router';
import {  CheckCircle, Download, Trophy, Star } from 'lucide-react';

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const steps = [
    { number: 1, title: 'Fill Application', description: 'Complete the online application form' },
    { number: 2, title: 'Submit Documents', description: 'Upload required documents' },
    { number: 3, title: 'Entrance Test', description: 'Attend the entrance examination' },
    { number: 4, title: 'Interview', description: 'Parent-student interview' },
    { number: 5, title: 'Admission', description: 'Get your admission letter!' },
  ];

  const requirements = [
    'Birth Certificate',
    'Previous School Transfer Certificate',
    'Mark Sheets (if applicable)',
    'Aadhar Card Copy',
    'Passport Size Photographs',
    'Address Proof',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-3 mb-4">
              <Star className="h-10 w-10 animate-bounce text-white" />
              <Trophy className="h-16 w-16 animate-pulse" />
              <Star className="h-10 w-10 animate-bounce delay-150 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black">
              Join Our School! 🎓
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Start Your Journey to Excellence
            </p>
          </div>
       </div>
      </div>

      {/* Admission Process */}
      <div className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Admission Process ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple steps to join our school family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {step.number}
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Required Documents 📋
              </h2>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all"
                  >
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                    <span className="text-lg font-semibold text-white">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-8 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Download className="h-5 w-5" />
                Download Application Form
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Fee Structure 💰
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transparent and affordable education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* Tuition Fees */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h3 className="text-2xl font-black text-white">Annual Tuition Fees</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { grade: 'LKG - UKG', fee: '₹5,000' },
                  { grade: 'Class 1-5', fee: '₹5,000' },
                  { grade: 'Class 6-8', fee: '₹7,000' },
                  { grade: 'Class 9-10', fee: '₹10,000' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                    <span className="font-bold text-gray-900 dark:text-white">{item.grade}</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {item.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Fees */}
            {/* <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-600 px-6 py-4">
                <h3 className="text-2xl font-black text-white">Additional Fees</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { item: 'Admission Fee (One-time)', fee: '₹5,000' },
                  { item: 'Books & Stationery', fee: '₹3,000' },
                  { item: 'Uniform', fee: '₹2,500' },
                  { item: 'Transport (Optional)', fee: '₹12,000' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                    <span className="font-semibold text-gray-900 dark:text-white">{item.item}</span>
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                      {item.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Payment Info */}
          <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 text-center">
              Payment Information
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Fees can be paid in quarterly installments</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>5% discount on annual payment</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Sibling discount: 10% for second child, 15% for third child onwards</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Scholarship available for meritorious students</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Payment modes: Online transfer, Cheque, Cash</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
