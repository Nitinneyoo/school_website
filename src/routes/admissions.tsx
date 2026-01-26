import { createFileRoute } from '@tanstack/react-router';
import { FileText, CheckCircle, Download, Trophy, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ApplyModal } from '../components/ApplyModal';
import { RepublicDayBanner } from '../components/RepublicDayBanner';

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  const steps = [
    { number: 1, title: 'Fill Application', description: 'Complete the online application form', icon: FileText },
    { number: 2, title: 'Submit Documents', description: 'Upload required documents', icon: Download },
    { number: 3, title: 'Entrance Test', description: 'Attend the entrance examination', icon: Trophy },
    { number: 4, title: 'Interview', description: 'Parent-student interview', icon: Users },
    { number: 5, title: 'Admission', description: 'Get your admission letter!', icon: CheckCircle },
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
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* 🇮🇳 REPUBLIC DAY MINIMAL BACKGROUND - Automatically shows on January 26th */}
      <RepublicDayBanner variant="minimal" />
      
      <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>Join The Legacy</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"
        >
          ADMIS<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">SIONS</span>
        </motion.h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Start your journey to excellence. Applications are now open for the upcoming academic year.
        </p>
      </div>

      {/* Admission Process */}
      <div className="max-w-7xl mx-auto mb-32">
        <h2 className="text-4xl font-black text-white mb-12 text-center">Your Journey Starts Here</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
             const Icon = step.icon;
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative glass-card p-6 rounded-3xl text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent -z-10" />
                )}
              </motion.div>
             )
          })}
        </div>
      </div>

      {/* Requirements & Info Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-32">
         {/* Documents */}
         <div className="glass-card rounded-[2.5rem] p-10 border-orange-500/30">
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
               <FileText className="w-8 h-8 text-orange-400" />
               Required Documents
            </h3>
            <div className="grid gap-4">
               {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                     <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                     <span className="text-gray-200 font-medium">{req}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Fee Structure Preview */}
         <div className="glass-card rounded-[2.5rem] p-10 border-blue-500/30">
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
               <Trophy className="w-8 h-8 text-blue-400" />
               Fee Structure
            </h3>
            <div className="space-y-4">
                {[
                  { grade: 'LKG - UKG', fee: '₹5,000' },
                  { grade: 'Class 1-5', fee: '₹5,000' },
                  { grade: 'Class 6-8', fee: '₹7,000' },
                  { grade: 'Class 9-10', fee: '₹10,000' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="font-bold text-gray-300">{item.grade}</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      {item.fee}
                    </span>
                  </div>
                ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
               <p className="text-gray-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Fees payable in quarterly installments
               </p>
               <p className="text-gray-400 text-sm flex items-center gap-2 mt-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Merit-based scholarships available
               </p>
            </div>
         </div>
      </div>

      {/* Apply Now CTA */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-5xl font-black text-white mb-6 relative z-10">Ready to Begin?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Take the first step towards excellence. Fill out your application today!
          </p>
          <button 
            onClick={() => setIsApplyModalOpen(true)}
            className="inline-flex relative z-10 px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl font-bold text-2xl text-white hover:scale-105 transition-transform shadow-lg hover:shadow-orange-500/50 cursor-pointer"
          >
            Apply Now
          </button>
        </motion.div>
      </div>

    </div>
  );
}
