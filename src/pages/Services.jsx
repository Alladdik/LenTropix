import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaRobot, FaCode, FaMobile, FaDatabase, FaPalette, FaCloud } from 'react-icons/fa';

function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: FaRobot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: FaCode,
      title: t('services.web.title'),
      description: t('services.web.description'),
    },
    {
      icon: FaMobile,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
    },
    {
      icon: FaDatabase,
      title: t('services.database.title'),
      description: t('services.database.description'),
    },
    {
      icon: FaPalette,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
    },
    {
      icon: FaCloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t('services.title')}
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-dark/50 rounded-lg hover:bg-secondary/20 transition-colors"
            >
              <service.icon className="text-4xl text-accent mb-4" />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;