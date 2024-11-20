import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiJavascript } from 'react-icons/si';

function Home() {
  const { t } = useTranslation();

  const technologies = [
    { icon: FaPython, name: 'Python' },
    { icon: SiCplusplus, name: 'C++' },
    { icon: SiCsharp, name: 'C#' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaDatabase, name: 'SQL' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[90vh] flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Alladdik"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-secondary hover:bg-accent transition-colors rounded-full font-semibold"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-dark border border-accent hover:bg-accent/20 transition-colors rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-dark/50 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <tech.icon className="text-4xl mb-4 text-accent" />
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;