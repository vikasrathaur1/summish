import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hellosummish@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8878888924',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, India',
    },
  ];

  const services = [
    'Ecommerce Inquiry',
    'IT Consulting',
    'Agro Consulting',
    'Partnership Opportunity',
    'General Question',
    'Other',
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] via-[#1a1d26] to-[#0F1115] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#2D8CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#21E88C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
            <MessageSquare className="w-12 h-12 text-[#21E88C]" />
          </div>
          <h1 className="text-5xl sm:text-6xl">
            Get in <span className="bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-[#FAFAFA] to-white border border-gray-100 hover:border-[#2D8CFF]/30 hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#2D8CFF] to-[#21E88C] mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[#0F1115] mb-2">{info.title}</h3>
                <p className="text-[#2D8CFF] mb-1">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl text-[#0F1115] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#0F1115] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200 text-[#0F1115] focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#0F1115] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200 text-[#0F1115] focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[#0F1115] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200 text-[#0F1115] focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] transition-all"
                  >
                    <option value="">Select a subject</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#0F1115] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200 text-[#0F1115] focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] text-white rounded-xl hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-[#2D8CFF] to-[#21E88C] rounded-3xl p-8 text-white">
                <h3 className="text-2xl mb-4">Connect with Summish</h3>
                <p className="text-white/90 mb-6">
                  Whether you're interested in our ecommerce products, need IT consulting, 
                  want to start farming, or just have a question—we're here to help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p>Response Time</p>
                      <p className="text-sm text-white/80">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl text-[#0F1115] mb-4">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-[#2D8CFF]/10 to-[#21E88C]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#2D8CFF] mx-auto mb-2" />
                    <p className="text-gray-600">Map View</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Visit us at our office or schedule a virtual meeting to discuss your needs.
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl text-[#0F1115] mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {['Learn About Our Services', 'Read Our Blog', 'Meet Our Team'].map((link) => (
                    <button
                      key={link}
                      className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-[#FAFAFA] transition-colors group"
                    >
                      <span className="text-gray-700">{link}</span>
                      <ArrowRight className="w-5 h-5 text-[#2D8CFF] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-300">
            At Summish, we're all about action. Let's turn your ideas into reality.
          </p>
          <p className="text-2xl bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">
            Just Do It
          </p>
        </motion.div>
      </section>
    </div>
  );
}
