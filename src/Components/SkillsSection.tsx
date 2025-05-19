import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programmingSkills = [
    { name: 'JavaScript', level: 95 },
    { name: 'PHP', level: 90 },
    { name: 'Flutter', level: 85 },
    // { name: 'Swift', level: 80 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    // { name: 'Laravel', level: 85 },
  ];

interface SkillBarProps {
  name: string;
  level: number;
  animated: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, animated }) => (
  <div className="mb-6 h-full">
    <div className="w-20 h-full bg-transparent rounded-full flex items-end">
      <div
        className={`w-20 bg-gradient-to-t from-[rgba(255,255,255,0)] to-brand rounded-t-full transition-all duration-1000 ease-out`}
        style={{ height: animated ? `${level}%` : '0%' }}
      ></div>
    </div>
    <div className="flex justify-between flex-col items-center mb-1">
      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{name}</h4>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{level}%</span>
    </div>
  </div>
);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand dark:text-brand-light font-semibold tracking-wide uppercase">Skill</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Bidang Keahlian Teknis Saya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Beragam bahasa pemrograman dan teknologi yang telah saya kuasai selama bertahun-tahun.
          </p>
        </div>

        <div className="flex justify-between items-end h-[600px]">
            {programmingSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={animated} />
            ))}
            </div>
          </div>
    </section>
  );
};

export default SkillsSection;