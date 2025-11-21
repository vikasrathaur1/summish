import { motion } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-[#0F1115] text-white shadow-lg"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-[#21E88C] group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 blur-lg bg-[#21E88C] opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-xl tracking-tight">
                Summish
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative px-3 py-2 transition-colors ${
                    currentPage === link.path
                      ? 'text-[#21E88C]'
                      : 'text-white hover:text-[#2D8CFF]'
                  }`}
                >
                  {link.name}
                  {currentPage === link.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#21E88C]"
                      style={{ boxShadow: '0 0 8px #21E88C' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#2D8CFF] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-white/10"
            >
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block w-full text-left px-4 py-3 transition-colors ${
                    currentPage === link.path
                      ? 'text-[#21E88C] bg-white/5'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0F1115] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#21E88C]" />
                <span className="tracking-tight">Summish</span>
              </div>
              <p className="text-sm text-gray-400">
                Just Do It
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-[#21E88C]">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="text-sm text-gray-400 hover:text-[#2D8CFF] transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-[#21E88C]">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick('ecommerce')}
                    className="text-sm text-gray-400 hover:text-[#2D8CFF] transition-colors"
                  >
                    Ecommerce
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('it-consulting')}
                    className="text-sm text-gray-400 hover:text-[#2D8CFF] transition-colors"
                  >
                    IT Consulting
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('agro-consulting')}
                    className="text-sm text-gray-400 hover:text-[#2D8CFF] transition-colors"
                  >
                    Agro Consulting
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-[#21E88C]">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@summish.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Summish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
