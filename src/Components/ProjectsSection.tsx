import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
type Template = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  features: string[];
  demoUrl: string;
  technologies: string[]
  repoUrl: string
};

const projects: Template[] = [
  // {
  //   id: 1,
  //   title: 'E-Commerce Platform',
  //   description: 'A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.',
  //   image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   category: 'web',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 2,
  //   title: 'Fitness Tracking App',
  //   description: 'Mobile app that tracks workouts, nutrition, and provides personalized fitness recommendations.',
  //   image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
  //   category: 'mobile',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 3,
  //   title: 'Task Management System',
  //   description: 'A collaborative task management system with real-time updates and team communication features.',
  //   image: 'https://images.pexels.com/photos/6804605/pexels-photo-6804605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebSockets'],
  //   category: 'web',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 4,
  //   title: 'Investment Portfolio Tracker',
  //   description: 'iOS app for tracking investment portfolios with real-time market data and performance analytics.',
  //   image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Swift', 'CoreData', 'RESTful APIs'],
  //   category: 'mobile',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 5,
  //   title: 'AI Content Generator',
  //   description: 'Web application that uses AI to generate marketing content, blog posts, and social media captions.',
  //   image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'Python', 'OpenAI API', 'FastAPI'],
  //   category: 'web',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Weather Forecasting App',
  //   description: 'Minimalist weather app with location-based forecasts, radar maps, and severe weather alerts.',
  //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Flutter', 'Weather API', 'BLoC Pattern'],
  //   category: 'mobile',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand dark:text-brand-light font-semibold tracking-wide uppercase">Projek</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Karya Terbaru Saya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Sekumpulan proyek terbaru saya yang mencakup pengembangan web dan mobile.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === category.id
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-sm text-brand dark:text-brand-light hover:text-brand hover:dark:text-brand-light"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex items-center text-sm text-brand dark:text-brand-light"
                  >
                    <Github size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;