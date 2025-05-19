import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const skills = ['JavaScript', 'PHP', 'Flutter', 'Swift'];
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[currentIndex];

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        setTypedText(currentSkill.substring(0, typedText.length + 1));

        if (typedText === currentSkill) {
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setTypedText(currentSkill.substring(0, typedText.length - 1));

        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }
      }
    }, isDeleting ? 100 : 250);

    return () => clearInterval(interval);
  }, [typedText, isDeleting, currentIndex, skills]);

  return (
    <section id="home" className="min-h-screen flex relative flex-col items-center justify-center relative bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block">Hallo, Nama saya <span className="text-brand dark:text-brand-light">Gufron Dev</span></span>
            <span className="block mt-2">Saya membanggun Aplikasi <span className="text-brand dark:text-brand-light font-mono">{typedText}<span className="animate-blink">|</span></span></span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pengembang full-stack yang ahli dalam merancang dan membangun aplikasi web dan seluler yang responsif, fungsional, dan estetis.
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#projects"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand-dark dark:bg-brand dark:hover:bg-brand-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
             Projek saya
            </a>
            <a
              href="#shop"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand dark:text-brand-light bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
              Templet Saya
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light transition-colors animate-bounce"
      >
        <ArrowDown />
      </a>
      <div className="tech-bg absolute"></div>
    </section>
  );
};

export default HeroSection;