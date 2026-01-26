import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative text-center space-y-6 pt-32 pb-20 px-4 relative z-10">
        <div className="flex justify-center gap-3 mb-4">
          <Sparkles className="h-10 w-10 animate-bounce text-yellow-400" />
          <MessageCircle className="h-16 w-16 text-blue-500 animate-pulse" />
          <Sparkles className="h-10 w-10 animate-bounce delay-150 text-yellow-400" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          We're here to help and answer your questions
        </p>
      </div>

      {/* Contact Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white mb-8">
                Contact Information
              </h2>

              <div className="glass-card rounded-2xl p-6 border-white/10 hover:border-blue-500/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+91 9424621088</p>
                    <p className="text-gray-400">+91 7999972872</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-white/10 hover:border-cyan-500/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/40 transition-colors">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@modelmiddleschool.com</p>
                    <p className="text-gray-400">admissions@modelmiddleschool.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-white/10 hover:border-teal-500/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-xl group-hover:bg-teal-500/40 transition-colors">
                    <MapPin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Address</h3>
                    <p className="text-gray-400">
                      Model Middle School<br />
                      Ambedkar Nagar Baghedi Rewa<br />
                      Madhya Pradesh 486226
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black text-white mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border-white/10 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-bold">
                    ✅ Message sent successfully!
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
