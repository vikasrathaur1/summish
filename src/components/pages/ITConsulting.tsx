import { motion } from 'motion/react';
import { Cpu, Bot, Workflow, Sparkles, Users, Target, Brain, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

export function ITConsulting() {
  const services = [
    {
      icon: Brain,
      title: 'End-to-End AI Capability Build',
      description: 'We help you build comprehensive AI capabilities from strategy to implementation, ensuring your organization is AI-ready.',
    },
    {
      icon: Workflow,
      title: 'AI Workflows & Automation',
      description: 'Design and implement intelligent workflows that automate repetitive tasks and optimize your business processes.',
    },
    {
      icon: Rocket,
      title: 'IT Transformation Consulting',
      description: 'Navigate digital transformation with expert guidance on modernizing your IT infrastructure and processes.',
    },
    {
      icon: Users,
      title: 'Hands-on Training & Adoption',
      description: 'Practical training programs that ensure your team can effectively use and benefit from AI technologies.',
    },
  ];

  const benefits = [
    'Increase operational efficiency by up to 40%',
    'Reduce manual workload through intelligent automation',
    'Make data-driven decisions with AI insights',
    'Stay competitive in rapidly evolving markets',
    'Build sustainable AI capabilities in-house',
    'Scale your operations without proportional cost increases',
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current state and identify AI opportunities',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Develop a tailored AI roadmap aligned with your business goals',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to operations',
    },
    {
      number: '04',
      title: 'Training & Support',
      description: 'Ensure your team is equipped and confident with new tools',
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] via-[#1a1d26] to-[#0F1115] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#21E88C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#2D8CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600 mb-4">
            <Cpu className="w-12 h-12" />
          </div>
          <h1 className="text-5xl sm:text-6xl">
            IT Consulting
          </h1>
          <p className="text-2xl bg-gradient-to-r from-[#21E88C] to-[#2D8CFF] bg-clip-text text-transparent">
            AI-Powered Business Transformation
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering small to mid-size companies and professionals (ages 30-40) with cutting-edge 
            AI capabilities, automation, and IT transformation solutions.
          </p>
        </motion.div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#2D8CFF]/10 to-[#21E88C]/10">
              <Target className="w-10 h-10 text-[#2D8CFF]" />
            </div>
            <h2 className="text-4xl text-[#0F1115]">Built for Forward-Thinking Professionals</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you're a growing company looking to scale efficiently or a professional 
              aiming to stay ahead of the curve, our AI and IT solutions are designed specifically 
              for your needs. We speak your language and understand your challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Comprehensive AI and IT transformation solutions tailored to your business
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#21E88C] via-[#2edb8c] to-[#2D8CFF] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Why Invest in AI & IT Transformation?</h2>
            <p className="text-xl text-white/90">
              The benefits are clear and measurable
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
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#0F1115] mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful AI implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#21E88C] to-transparent" />
                )}

                <div className="space-y-4">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#21E88C] to-[#2D8CFF]">
                    <span className="text-3xl text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl text-[#0F1115]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600">
              <Sparkles className="w-12 h-12" />
            </div>
            <h2 className="text-4xl">Expert-Led, Results-Driven</h2>
            <p className="text-xl text-gray-300">
              Our team brings deep expertise in AI, automation, and IT transformation. 
              We don't just consult—we partner with you to achieve tangible results. 
              From strategy to execution, we're with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#21E88C] to-[#2D8CFF]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90">
            Let's discuss how AI and IT transformation can take your business to the next level.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#21E88C] rounded-full hover:shadow-2xl transition-shadow"
          >
            <Bot className="w-5 h-5" />
            <span>Start Your AI Journey</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
