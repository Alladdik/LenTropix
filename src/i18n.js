import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
      },
      hero: {
        title: 'Our Specialists Are Ready to Help Bring Your Projects to Life!',
        subtitle: 'Looking for a team that understands your vision and turns it into reality? Our experts specialize in AI-powered solutions and innovative development to transform your ideas into groundbreaking results. Let\'s create something extraordinary together!',
      },
      projects: {
        title: 'Our Projects',
        blinksy: 'Creating a new messenger for seamless communication',
        ai: {
          name: 'AI Solutions',
          description: 'Developing cutting-edge AI technologies for various applications',
        },
        games: {
          name: 'Game Development',
          description: 'Crafting immersive and engaging gaming experiences',
        },
      },
      technologies: {
        title: 'Our Technologies',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        services: 'Услуги',
        portfolio: 'Портфолио',
        contact: 'Контакты',
      },
      hero: {
        title: 'Наши специалисты готовы воплотить ваши проекты в жизнь!',
        subtitle: 'Ищете команду, которая понимает ваши цели и помогает их достичь? Мы предлагаем передовые решения на базе ИИ и инновационные разработки, чтобы превратить ваши идеи в потрясающие результаты. Давайте творить вместе!',
      },
      projects: {
        title: 'Наши Проекты',
        blinksy: 'Создание нового мессенджера для удобного общения',
        ai: {
          name: 'ИИ Решения',
          description: 'Разработка передовых технологий ИИ для различных применений',
        },
        games: {
          name: 'Разработка Игр',
          description: 'Создание захватывающих и увлекательных игровых проектов',
        },
      },
      technologies: {
        title: 'Наши Технологии',
      },
    },
  },
  uk: {
    translation: {
      nav: {
        home: 'Головна',
        services: 'Послуги',
        portfolio: 'Портфоліо',
        contact: 'Контакти',
      },
      hero: {
        title: 'Наші спеціалісти готові втілити ваші проєкти в життя!',
        subtitle: 'Шукаєте команду, яка зрозуміє ваші потреби та допоможе досягти успіху? Ми пропонуємо передові рішення на базі ШІ та інноваційні розробки, щоб перетворити ваші ідеї на неймовірні результати. Створімо щось унікальне разом!',
      },
      projects: {
        title: 'Наші Проєкти',
        blinksy: 'Створення нового месенджера для зручного спілкування',
        ai: {
          name: 'ШІ Рішення',
          description: 'Розробка передових технологій ШІ для різних застосувань',
        },
        games: {
          name: 'Розробка Ігор',
          description: 'Створення захоплюючих та цікавих ігрових проєктів',
        },
      },
      technologies: {
        title: 'Наші Технології',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;