import { motion } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-secondary hover:bg-accent transition-colors rounded-lg font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;