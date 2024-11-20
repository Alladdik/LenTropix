import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              LenTropix
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/services" className="hover:text-accent transition-colors">
              {t('nav.services')}
            </Link>
            <Link to="/portfolio" className="hover:text-accent transition-colors">
              {t('nav.portfolio')}
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              {t('nav.contact')}
            </Link>
            
            <div className="flex space-x-2">
              <button onClick={() => changeLanguage('en')} className="hover:text-accent">EN</button>
              <button onClick={() => changeLanguage('ru')} className="hover:text-accent">RU</button>
              <button onClick={() => changeLanguage('uk')} className="hover:text-accent">UA</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-dark/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 hover:bg-secondary/20 rounded-md">
            {t('nav.home')}
          </Link>
          <Link to="/services" className="block px-3 py-2 hover:bg-secondary/20 rounded-md">
            {t('nav.services')}
          </Link>
          <Link to="/portfolio" className="block px-3 py-2 hover:bg-secondary/20 rounded-md">
            {t('nav.portfolio')}
          </Link>
          <Link to="/contact" className="block px-3 py-2 hover:bg-secondary/20 rounded-md">
            {t('nav.contact')}
          </Link>
          <div className="flex space-x-4 px-3 py-2">
            <button onClick={() => changeLanguage('en')} className="hover:text-accent">EN</button>
            <button onClick={() => changeLanguage('ru')} className="hover:text-accent">RU</button>
            <button onClick={() => changeLanguage('uk')} className="hover:text-accent">UA</button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;