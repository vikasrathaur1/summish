import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Ecommerce } from './components/pages/Ecommerce';
import { ITConsulting } from './components/pages/ITConsulting';
import { AgroConsulting } from './components/pages/AgroConsulting';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'ecommerce':
        return <Ecommerce />;
      case 'it-consulting':
        return <ITConsulting />;
      case 'agro-consulting':
        return <AgroConsulting />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}
