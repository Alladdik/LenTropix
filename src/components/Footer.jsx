import { FaGithub, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark/90 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              LenTropix
            </span>
            <p className="mt-2 text-sm text-gray-400">
              Your Partner in AI and Development Solutions
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Alladdik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://t.me/Milfallad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LenTropix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;