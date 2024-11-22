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
      services: {
        title: 'Our Services',
        ai: {
          title: 'AI Solutions(Coming Soon)',
          description: 'Custom AI and machine learning solutions for your business needs',
        },
        web: {
          title: 'Web Development',
          description: 'Modern web applications using cutting-edge technologies',
        },
        mobile: {
          title: 'Mobile Development(Coming Soon)',
          description: 'Native and cross-platform mobile applications',
        },
        database: {
          title: 'Database Design',
          description: 'Efficient and scalable database solutions',
        },
        uiux: {
          title: 'UI/UX Design',
          description: 'Beautiful and intuitive user interfaces',
        },
        cloud: {
          title: 'Cloud Solutions(Coming Soon)',
          description: 'Cloud infrastructure and deployment services',
        },
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
      services: {
        title: 'Наши Услуги',
        ai: {
          title: 'ИИ Решения(Скоро)',
          description: 'Индивидуальные решения ИИ и машинного обучения для вашего бизнеса',
        },
        web: {
          title: 'Веб-разработка',
          description: 'Современные веб-приложения с использованием передовых технологий',
        },
        mobile: {
          title: 'Мобильная разработка(Скоро)',
          description: 'Нативные и кроссплатформенные мобильные приложения',
        },
        database: {
          title: 'Проектирование баз данных',
          description: 'Эффективные и масштабируемые решения для баз данных',
        },
        uiux: {
          title: 'UI/UX Дизайн',
          description: 'Красивые и интуитивно понятные пользовательские интерфейсы',
        },
        cloud: {
          title: 'Облачные решения(Скоро)',
          description: 'Облачная инфраструктура и услуги развертывания',
        },
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
      services: {
        title: 'Наші Послуги',
        ai: {
          title: 'ШІ Рішення(Незабаром)',
          description: 'Індивідуальні рішення ШІ та машинного навчання для вашого бізнесу',
        },
        web: {
          title: 'Веб-розробка',
          description: 'Сучасні веб-додатки з використанням передових технологій',
        },
        mobile: {
          title: 'Мобільна розробка(Незабаром)',
          description: 'Нативні та кросплатформні мобільні додатки',
        },
        database: {
          title: 'Проектування баз даних',
          description: 'Ефективні та масштабовані рішення для баз даних',
        },
        uiux: {
          title: 'UI/UX Дизайн',
          description: 'Красиві та інтуїтивно зрозумілі користувацькі інтерфейси',
        },
        cloud: {
          title: 'Хмарні рішення(Незабаром)',
          description: 'Хмарна інфраструктура та послуги розгортання',
        },
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