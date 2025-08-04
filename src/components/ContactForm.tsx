import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 mb-4">
              Thank you for contacting us. We'll get back to you within 24
              hours.
            </p>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Response Time: 24 hours
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-lg bg-slate-100">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <MessageSquare className="h-6 w-6 mr-2 text-slate-200" />
            Send us a Message
          </CardTitle>
          <p className="text-gray-600">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Full Name *
                </Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Subject *
                </Label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="general">General Information</option>
                  <option value="academics">Academic Programs</option>
                  <option value="facilities">
                    Facilities & Infrastructure
                  </option>
                  <option value="fees">Fee Structure</option>
                  <option value="transport">Transportation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Message *
              </Label>
              <Textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="mt-6 p-4 bg-slate-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">
              Quick Response Promise
            </h4>
            <p className="text-sm text-black">
              We respond to all inquiries within 24 hours during business days.
              For urgent matters, please call us directly at +91 7999972872.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
