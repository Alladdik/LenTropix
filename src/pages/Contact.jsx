import { motion } from 'framer-motion';
import { FaTelegram, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const contacts = [
    {
      icon: FaTelegram,
      title: 'Telegram',
      links: [
        { url: 'https://t.me/Milfallad', text: '@Milfallad' },
        { url: 'https://t.me/Ayanakit', text: '@Ayanakit' },
      ],
    },
    {
      icon: MdEmail,
      title: 'Email',
      links: [
        { url: 'mailto:alladdikss@gmail.com', text: 'alladdikss@gmail.com' },
      ],
    },
    {
      icon: FaDiscord,
      title: 'Discord',
      links: [
        { url: 'https://discord.gg/SXDFAM8Dkt', text: 'Join our Discord server' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-dark/50 rounded-lg hover:bg-secondary/20 transition-colors"
            >
              <div className="flex items-center mb-4">
                <contact.icon className="text-3xl text-accent mr-3" />
                <h2 className="text-xl font-semibold">{contact.title}</h2>
              </div>
              <div className="space-y-2">
                {contact.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-accent transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
