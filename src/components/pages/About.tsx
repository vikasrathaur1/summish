import { motion } from 'motion/react';
import { Target, Eye, Heart, TrendingUp, Users, Lightbulb, Shield, Rocket } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions and forward-thinking approaches',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Building trust through honest communication and clear processes',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Earning confidence through consistent delivery and integrity',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering continuous improvement for our clients and ourselves',
    },
  ];

  const founders = [
    {
      name: 'Founder One',
      role: 'Co-Founder & CEO',
      expertise: 'Technology & Strategy',
    },
    {
      name: 'Founder Two',
      role: 'Co-Founder & CTO',
      expertise: 'AI & Innovation',
    },
    {
      name: 'Founder Three',
      role: 'Co-Founder & COO',
      expertise: 'Operations & Growth',
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] via-[#1a1d26] to-[#0F1115] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2D8CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#21E88C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl">
            About <span className="bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">Summish</span>
          </h1>
          <p className="text-xl text-gray-300">
            Three founders. Three verticals. One powerful vision to transform technology, commerce, and agriculture.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-4xl text-[#0F1115]">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Summish was born from a simple belief: that innovation shouldn't be confined to a single industry. 
                Our three founders came together with diverse expertise and a shared passion for creating meaningful impact.
              </p>
              <p>
                Today, we operate at the intersection of technology, commerce, and agriculture—three verticals that 
                represent the future of human progress. Through Summish, we're not just building businesses; 
                we're building solutions that matter.
              </p>
              <p>
                From AI-powered consulting to sustainable agriculture and quality ecommerce, every venture under 
                the Summish umbrella is designed with one principle in mind: <span className="text-[#2D8CFF]">Just Do It</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#2D8CFF] to-blue-600">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl text-[#0F1115]">Our Vision</h2>
              <p className="text-lg text-gray-700">
                Creating impact across Tech, Commerce, and Agriculture by delivering innovative solutions 
                that transform industries and empower people. We envision a future where advanced technology 
                is accessible to all, commerce is seamless and trustworthy, and agriculture is sustainable and efficient.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl text-[#0F1115]">Our Mission</h2>
              <p className="text-lg text-gray-700">
                Make advanced solutions simple and accessible. We break down complexity, remove barriers, 
                and deliver practical, effective solutions that drive real results. Whether it's implementing 
                AI workflows, sourcing quality products, or setting up modern farms, we make it happen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#0F1115] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Summish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2D8CFF]/10 to-[#21E88C]/10 group-hover:from-[#2D8CFF] group-hover:to-[#21E88C] transition-all">
                    <value.icon className="w-6 h-6 text-[#2D8CFF] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl text-[#0F1115]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-3 rounded-xl bg-[#21E88C]/20 mb-4">
              <Users className="w-8 h-8 text-[#21E88C]" />
            </div>
            <h2 className="text-4xl mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three visionaries united by a passion for innovation and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#21E88C]/50 transition-all"
              >
                {/* Avatar Silhouette */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2D8CFF] to-[#21E88C] flex items-center justify-center">
                  <Rocket className="w-12 h-12 text-white" />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl">{founder.name}</h3>
                  <p className="text-[#21E88C]">{founder.role}</p>
                  <p className="text-sm text-gray-400">{founder.expertise}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D8CFF]/20 to-[#21E88C]/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl text-[#0F1115]">
            Building Tomorrow, <span className="bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">Today</span>
          </h2>
          <p className="text-xl text-gray-700">
            At Summish, we don't wait for the future—we create it. Join us on this journey 
            as we transform industries and make advanced solutions accessible to everyone.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
