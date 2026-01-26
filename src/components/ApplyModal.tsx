import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, BookOpen, Sparkles, CheckCircle } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for effect
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Construct mailto link
    const subject = `New Admission Application: ${formData.studentName} - Grade ${formData.grade}`;
    const body = `
New Admission Application Details:

Student Information:
-------------------
Name: ${formData.studentName}
Grade Applying For: ${formData.grade}

Parent/Guardian Information:
---------------------------
Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

Additional Message:
------------------
${formData.message}

------------------
Submitted via School Website
    `;

    window.location.href = `mailto:nitinsinghji12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset and close after a delay
    setTimeout(() => {
        setSubmitted(false);
        setFormData({
            studentName: '',
            grade: '',
            parentName: '',
            email: '',
            phone: '',
            address: '',
            message: ''
        });
        onClose();
    }, 3000);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0a0a0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto"
            >
              {/* Decorative Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 p-8">
                {submitted ? (
                  <div className="text-center py-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-white mb-2">Application Started!</h3>
                    <p className="text-gray-400 text-lg max-w-md mx-auto">
                        Your email client has been opened with the application details. Please send the email to complete your application.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles className="w-3 h-3" />
                        Admissions Open 2026-27
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                        Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Model Middle School</span>
                      </h2>
                      <p className="text-gray-400">Join a community of innovators and achievers.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Student Details Section */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Student Details</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative group">
                            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                              type="text"
                              name="studentName"
                              required
                              placeholder="Student Name"
                              value={formData.studentName}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            />
                          </div>
                          <div className="relative group">
                            <BookOpen className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <select
                                name="grade"
                                required
                                value={formData.grade}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-[#0a0a0f] text-gray-500">Select Grade</option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i + 1} className="bg-[#0a0a0f] text-white">Class {i + 1}</option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-white/10" />

                      {/* Parent Details Section */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Parent / Guardian Details</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="relative group">
                                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                                <input
                                type="text"
                                name="parentName"
                                required
                                placeholder="Parent Name"
                                value={formData.parentName}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                             <div className="relative group">
                                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                                <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                            <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                            />
                        </div>
                        <div className="relative group">
                             <textarea
                                name="address"
                                required
                                placeholder="Full Address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={2}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                            />
                        </div>
                         <div className="relative group">
                             <textarea
                                name="message"
                                placeholder="Any specific requirements or questions? (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows={2}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                            />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="animate-pulse">Processing...</span>
                        ) : (
                          <>
                            Submit Application <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-center text-gray-500">
                        By submitting, you agree to being contacted by our admissions team.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
