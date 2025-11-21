import { motion } from 'motion/react';
import { ShoppingCart, Cpu, Sprout, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const verticals = [
    {
      icon: ShoppingCart,
      title: 'Ecommerce',
      description: 'High-quality everyday essentials delivered to your doorstep',
      gradient: 'from-[#2D8CFF] to-blue-600',
      link: 'ecommerce',
    },
    {
      icon: Cpu,
      title: 'IT Consulting',
      description: 'AI-driven transformation and automation for modern businesses',
      gradient: 'from-[#21E88C] to-green-600',
      link: 'it-consulting',
    },
    {
      icon: Sprout,
      title: 'Agro Consulting',
      description: 'Revolutionary zero-soil agriculture solutions for everyone',
      gradient: 'from-[#2D8CFF] to-[#21E88C]',
      link: 'agro-consulting',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F1115] via-[#1a1d26] to-[#0F1115]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2D8CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#21E88C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#21E88C]/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#21E88C]" />
              <span className="text-sm text-[#21E88C]">Welcome to the Future</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
                <span className="block">Summish</span>
                <span className="block bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">
                  Just Do It
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
                Pioneering innovation across technology, commerce, and agriculture. 
                We transform ideas into impact, bringing futuristic solutions to today's challenges.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => onNavigate('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#2D8CFF] text-white rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-[#2D8CFF]/50"
            >
              <span className="relative z-10">Explore Summish</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#21E88C] rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#21E88C] rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Verticals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-[#0F1115] mb-4">
              Three Verticals, One Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions spanning digital commerce, technology consulting, and sustainable agriculture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => onNavigate(vertical.link)}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${vertical.gradient}`}>
                    <vertical.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#0F1115]">
                      {vertical.title}
                    </h3>
                    <p className="text-gray-600">
                      {vertical.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#2D8CFF] group-hover:gap-4 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#21E88C] rounded-full filter blur-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1115] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3', label: 'Founders' },
              { number: '3', label: 'Verticals' },
              { number: '100%', label: 'Commitment' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl sm:text-5xl bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D8CFF] to-[#21E88C]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl text-white">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90">
            Join us in building tomorrow, today. Connect with Summish and discover how we can help you succeed.
          </p>
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D8CFF] rounded-full hover:shadow-2xl transition-shadow"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
