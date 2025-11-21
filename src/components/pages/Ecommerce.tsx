import { motion } from 'motion/react';
import { ShoppingCart, Package, Shield, Zap, Star, Truck, CreditCard, ArrowRight } from 'lucide-react';

export function Ecommerce() {
  const products = [
    {
      icon: Package,
      name: 'Foil Papers',
      description: 'Premium quality aluminum foil for all your kitchen and storage needs',
    },
    {
      icon: ShoppingCart,
      name: 'T-Shirts',
      description: 'Comfortable, stylish everyday wear in various colors and sizes',
    },
    {
      icon: Zap,
      name: 'Electronics Accessories',
      description: 'Essential accessories for your devices - cables, adapters, and more',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before shipping',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Safe and encrypted payment processing',
    },
    {
      icon: Star,
      title: 'Customer First',
      description: 'Dedicated support and hassle-free returns',
    },
  ];

  const reasons = [
    'Curated selection of everyday essentials',
    'Competitive pricing without compromising quality',
    'Transparent product information and reviews',
    'Easy ordering and checkout process',
    'Responsive customer support',
    'Regular deals and offers',
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D8CFF] via-[#3d96ff] to-[#21E88C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <ShoppingCart className="w-12 h-12" />
          </div>
          <h1 className="text-5xl sm:text-6xl">
            Summish Ecommerce
          </h1>
          <p className="text-2xl">Quality Everyday Essentials</p>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We sell high-quality everyday essentials: Foil Papers, T-Shirts, and Electronics Accessories. 
            Simple products, exceptional quality.
          </p>
        </motion.div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#0F1115] mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully selected essentials for your everyday needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="space-y-6">
                  <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-[#2D8CFF] to-blue-600">
                    <product.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#0F1115]">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] rounded-full scale-0 group-hover:scale-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#21E88C] to-green-600 mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl text-[#0F1115] mb-4">Quality You Can Trust</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't compromise on quality. Every product is carefully vetted and tested 
              to ensure it meets our high standards before reaching you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#2D8CFF]/10 to-[#21E88C]/10">
                  <feature.icon className="w-8 h-8 text-[#2D8CFF]" />
                </div>
                <h3 className="text-xl text-[#0F1115]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Summish */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Why Choose Summish?</h2>
            <p className="text-xl text-gray-300">
              More than just products—it's about the experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2D8CFF] to-[#21E88C] flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D8CFF] to-[#21E88C]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl text-white">
            Ready to Shop?
          </h2>
          <p className="text-xl text-white/90">
            Experience the Summish difference. Quality products, delivered fast.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D8CFF] rounded-full hover:shadow-2xl transition-shadow"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
