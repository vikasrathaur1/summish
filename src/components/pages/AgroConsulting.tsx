import { motion } from 'motion/react';
import { Sprout, Leaf, Droplets, Sun, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AgroConsulting() {
  const services = [
    {
      icon: Droplets,
      title: 'Hydroponics Setup & Training',
      description: 'Complete guidance on setting up modern hydroponic systems, from equipment selection to nutrient management.',
    },
    {
      icon: Sprout,
      title: 'Mushroom Farming Consulting',
      description: 'Expert advice on establishing profitable mushroom cultivation operations with proven techniques.',
    },
    {
      icon: Leaf,
      title: 'Zero-Soil Agriculture',
      description: 'Innovative soil-free farming methods that maximize yield while minimizing resource consumption.',
    },
    {
      icon: TrendingUp,
      title: 'Farm-to-Market Advisory',
      description: 'Strategic guidance on marketing, pricing, and selling your agricultural products effectively.',
    },
  ];

  const benefits = [
    'Start farming with minimal land requirements',
    'Grow year-round regardless of weather',
    'Use up to 90% less water than traditional farming',
    'Achieve higher yields in smaller spaces',
    'Reduce dependency on soil quality',
    'Create sustainable, eco-friendly operations',
  ];

  const audience = [
    {
      title: 'Complete Beginners',
      description: 'No prior farming experience? No problem. We guide you from zero to harvest.',
    },
    {
      title: 'Urban Farmers',
      description: 'Limited space? Learn how to farm efficiently in urban environments.',
    },
    {
      title: 'Career Changers',
      description: 'Looking to start a new agricultural venture? We provide complete support.',
    },
    {
      title: 'Sustainability Advocates',
      description: 'Passionate about sustainable food production? Join the revolution.',
    },
  ];

  const methods = [
    {
      name: 'Hydroponics',
      description: 'Grow plants in nutrient-rich water solutions',
      icon: Droplets,
    },
    {
      name: 'Mushroom Cultivation',
      description: 'High-value crops with excellent profit margins',
      icon: Sprout,
    },
    {
      name: 'Vertical Farming',
      description: 'Maximize production in minimal space',
      icon: Sun,
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#21E88C] via-[#2edb8c] to-[#2D8CFF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <Sprout className="w-12 h-12" />
          </div>
          <h1 className="text-5xl sm:text-6xl">
            Agro Consulting
          </h1>
          <p className="text-2xl">
            The Future of Farming
          </p>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Revolutionary zero-soil agriculture solutions for anyone wanting to start farming. 
            From hydroponics to mushroom cultivation, we make modern agriculture accessible.
          </p>
        </motion.div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C]/10 to-[#2D8CFF]/10 mb-4">
              <Users className="w-10 h-10 text-[#21E88C]" />
            </div>
            <h2 className="text-4xl text-[#0F1115] mb-4">Anyone Can Start Farming</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple, friendly approach makes agriculture accessible to everyone, 
              regardless of background or experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-[#21E88C]/5 to-[#2D8CFF]/5"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#21E88C] to-[#2D8CFF] flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[#0F1115]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#0F1115] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for every stage of your agricultural journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600 group-hover:scale-110 transition-transform">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#0F1115]">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Modern Farming Methods</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Innovative techniques that redefine what's possible in agriculture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#21E88C]/50 transition-all"
              >
                <div className="space-y-4 text-center">
                  <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-[#21E88C] to-[#2D8CFF]">
                    <method.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl">{method.name}</h3>
                  <p className="text-gray-300">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600 mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl text-[#0F1115] mb-4">Why Choose Modern Agriculture?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantages are clear and compelling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#21E88C]/5 to-[#2D8CFF]/5"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#21E88C]" />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#21E88C] to-[#2D8CFF] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Sun className="w-12 h-12" />
            </div>
            <h2 className="text-4xl">Simple, Friendly, Empowering</h2>
            <p className="text-xl text-white/90">
              We believe everyone should have access to sustainable, profitable agriculture. 
              Our approach is simple and friendly—no jargon, no complexity. Just clear guidance 
              that empowers you to succeed in modern farming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl text-[#0F1115]">
            Ready to Start Your <span className="bg-gradient-to-r from-[#21E88C] to-[#2D8CFF] bg-clip-text text-transparent">Farming Journey</span>?
          </h2>
          <p className="text-xl text-gray-700">
            Let's discuss how you can establish a successful, sustainable agricultural operation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#21E88C] to-[#2D8CFF] text-white rounded-full hover:shadow-2xl transition-shadow"
          >
            <Sprout className="w-5 h-5" />
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
