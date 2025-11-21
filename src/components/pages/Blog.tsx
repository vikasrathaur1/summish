import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowRight, Cpu, ShoppingBag, Leaf, Tag } from 'lucide-react';

export function Blog() {
  const categories = [
    { name: 'AI & Technology', icon: Cpu, color: 'from-[#2D8CFF] to-blue-600' },
    { name: 'Ecommerce', icon: ShoppingBag, color: 'from-[#21E88C] to-green-600' },
    { name: 'Agriculture', icon: Leaf, color: 'from-[#2D8CFF] to-[#21E88C]' },
  ];

  const blogPosts = [
    {
      title: 'The Future of AI in Small Business',
      excerpt: 'Discover how AI automation is transforming operations for small and medium-sized businesses.',
      category: 'AI & Technology',
      date: 'November 15, 2025',
      readTime: '5 min read',
      gradient: 'from-[#2D8CFF] to-blue-600',
    },
    {
      title: 'Building a Successful Ecommerce Brand',
      excerpt: 'Essential strategies for creating a customer-focused ecommerce business in 2025.',
      category: 'Ecommerce',
      date: 'November 12, 2025',
      readTime: '7 min read',
      gradient: 'from-[#21E88C] to-green-600',
    },
    {
      title: 'Hydroponics 101: Getting Started',
      excerpt: 'A beginner\'s guide to setting up your first hydroponic farming system.',
      category: 'Agriculture',
      date: 'November 10, 2025',
      readTime: '6 min read',
      gradient: 'from-[#2D8CFF] to-[#21E88C]',
    },
    {
      title: 'AI Workflows That Actually Work',
      excerpt: 'Practical AI automation workflows you can implement today to boost productivity.',
      category: 'AI & Technology',
      date: 'November 8, 2025',
      readTime: '8 min read',
      gradient: 'from-[#2D8CFF] to-blue-600',
    },
    {
      title: 'Quality Matters: Our Product Selection Process',
      excerpt: 'How we choose and vet products to ensure the highest quality for our customers.',
      category: 'Ecommerce',
      date: 'November 5, 2025',
      readTime: '4 min read',
      gradient: 'from-[#21E88C] to-green-600',
    },
    {
      title: 'Mushroom Farming: Profitability Guide',
      excerpt: 'Everything you need to know about starting a profitable mushroom cultivation business.',
      category: 'Agriculture',
      date: 'November 3, 2025',
      readTime: '10 min read',
      gradient: 'from-[#2D8CFF] to-[#21E88C]',
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F1115] via-[#1a1d26] to-[#0F1115] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2D8CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#21E88C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
            <BookOpen className="w-12 h-12 text-[#21E88C]" />
          </div>
          <h1 className="text-5xl sm:text-6xl">
            Summish <span className="bg-gradient-to-r from-[#2D8CFF] to-[#21E88C] bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, guides, and stories from the world of AI, ecommerce, and modern agriculture
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl transition-all`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#0F1115] mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Category Badge with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />

                <div className="p-8 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-[#0F1115] group-hover:text-[#2D8CFF] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[#2D8CFF] group-hover:gap-4 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D8CFF] to-[#21E88C] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
            <BookOpen className="w-10 h-10" />
          </div>
          <h2 className="text-4xl sm:text-5xl">
            Stay in the Loop
          </h2>
          <p className="text-xl text-white/90">
            Subscribe to get the latest articles, insights, and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#2D8CFF] rounded-full hover:shadow-2xl transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
