import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaMobile, FaDatabase, FaPalette, FaCloud } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: FaRobot,
      title: 'AI Solutions(Coming Soon)',
      description: 'Custom AI and machine learning solutions for your business needs',
    },
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Modern web applications using cutting-edge technologies',
    },
    {
      icon: FaMobile,
      title: 'Mobile Development(Coming Soon)',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Efficient and scalable database solutions',
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions(Coming Soon)',
      description: 'Cloud infrastructure and deployment services',
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
          Our Services
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