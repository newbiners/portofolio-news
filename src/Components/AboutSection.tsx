import { Code, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { name: 'Years Experience', value: '2+', icon: Code },
    { name: 'Projects Completed', value: '50+', icon: Globe },
    { name: 'Satisfied Clients', value: '30+', icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand dark:text-brand-light font-semibold tracking-wide uppercase">Tentang Saya</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Pengembang dengan semangat tinggi dalam menciptakan solusi digital inovatif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden  shadow-lg">
              <img
                src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional portrait"
                className=""
              />
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Halo! Saya Gufron, seorang pengembang full-stack yang bersemangat dengan pengalaman lebih dari 8 tahun dalam pengembangan aplikasi web dan seluler. Saya mengkhususkan diri dalam menciptakan solusi elegan yang mengutamakan pengalaman pengguna dan performa.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Perjalanan saya di dunia pengembangan dimulai dengan JavaScript dan PHP, dan sejak itu saya mengembangkan keterampilan saya hingga mencakup pengembangan aplikasi mobile menggunakan Flutter dan Swift. Saya senang mempelajari teknologi baru dan menerapkannya untuk menyelesaikan masalah dunia nyata.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Saat tidak sedang coding, saya biasanya berkontribusi pada proyek open-source, menulis tutorial teknis, atau menjelajahi alam dengan kamera saya.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.name} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 dark:text-brand-light" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;