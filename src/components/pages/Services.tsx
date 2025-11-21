import { motion } from 'motion/react';
import { ShoppingCart, Cpu, Sprout, ArrowRight, Package, Bot, Leaf } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: ShoppingCart,
      secondaryIcon: Package,
      title: 'Ecommerce',
      tagline: 'Quality Everyday Essentials',
      description: 'We deliver high-quality products that make your daily life easier. From foil papers to t-shirts and electronics accessories, every item is carefully curated for quality and value.',
      features: [
        'Premium foil papers for all needs',
        'Comfortable, stylish t-shirts',
        'Essential electronics accessories',
        'Fast, reliable delivery',
      ],
      gradient: 'from-[#2D8CFF] to-blue-600',
      link: 'ecommerce',
    },
    {
      icon: Cpu,
      secondaryIcon: Bot,
      title: 'IT Consulting',
      tagline: 'AI-Powered Transformation',
      description: 'Transform your business with cutting-edge AI and automation. We help small to mid-size companies and professionals adopt AI capabilities that drive real results.',
      features: [
        'End-to-end AI capability building',
        'Intelligent workflows & automation',
        'IT transformation consulting',
        'Hands-on training & adoption',
      ],
      gradient: 'from-[#21E88C] to-green-600',
      link: 'it-consulting',
    },
    {
      icon: Sprout,
      secondaryIcon: Leaf,
      title: 'Agro Consulting',
      tagline: 'Future of Farming',
      description: 'Start your agricultural journey with modern, sustainable methods. We guide you through hydroponics, mushroom farming, and zero-soil agriculture from setup to market.',
      features: [
        'Hydroponics setup & training',
        'Mushroom farming expertise',
        'Zero-soil agriculture methods',
        'Farm-to-market guidance',
      ],
      gradient: 'from-[#2D8CFF] to-[#21E88C]',
      link: 'agro-consulting',
    },
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
          <h1 className="text-5xl sm:text-6xl">
            Our <span className="bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive solutions across three dynamic verticals, each designed to drive innovation and deliver results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Icons */}
                <div className="flex items-center gap-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} opacity-50`}>
                    <service.secondaryIcon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h2 className="text-4xl text-[#0F1115] mb-2">{service.title}</h2>
                  <p className="text-xl text-[#2D8CFF]">{service.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={() => onNavigate(service.link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-full shadow-lg hover:shadow-xl transition-all`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Visual Card */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-12 shadow-xl overflow-hidden group cursor-pointer"
                  onClick={() => onNavigate(service.link)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />

                  {/* Large Icon */}
                  <div className="relative z-10 flex items-center justify-center mb-6">
                    <div className={`p-8 rounded-full bg-gradient-to-br ${service.gradient} opacity-10`}>
                      <service.icon className={`w-24 h-24 text-transparent bg-gradient-to-br ${service.gradient} bg-clip-text`} style={{ WebkitTextStroke: '2px transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                    </div>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-8 right-8 text-8xl font-bold text-[#0F1115] opacity-5">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#21E88C] rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#2D8CFF] rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300">
            Choose the service that fits your needs, or contact us to discuss a custom solution tailored to your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D8CFF] text-white rounded-full hover:shadow-lg hover:shadow-[#2D8CFF]/50 transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Learn About Us</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
