import { useState } from 'react';
import { ShoppingCart, Tag, Monitor, Download } from 'lucide-react';

type Template = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  features: string[];
  demoUrl: string;
};

const templates: Template[] = [
  // {
  //   id: 1,
  //   title: 'Modern E-Commerce Template',
  //   description: 'A sleek, responsive e-commerce template with product listings, cart functionality, and checkout flow.',
  //   image: 'https://images.pexels.com/photos/6956695/pexels-photo-6956695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 49,
  //   category: 'e-commerce',
  //   features: ['Responsive Design', 'Product Filtering', 'Shopping Cart', 'Wishlist Functionality', 'SEO Optimized'],
  //   demoUrl: '#',
  // },
  // {
  //   id: 2,
  //   title: 'Portfolio Pro',
  //   description: 'Professional portfolio template for creatives, designers, and developers to showcase their work.',
  //   image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 39,
  //   category: 'portfolio',
  //   features: ['Project Gallery', 'About Section', 'Skills Display', 'Contact Form', 'Blog Integration'],
  //   demoUrl: '#',
  // },
  // {
  //   id: 3,
  //   title: 'Real Estate Listings',
  //   description: 'Template designed for real estate agencies with property listings, search filters, and agent profiles.',
  //   image: 'https://images.pexels.com/photos/7578988/pexels-photo-7578988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 59,
  //   category: 'business',
  //   features: ['Property Search', 'Virtual Tours', 'Agent Directories', 'Mortgage Calculator', 'Map Integration'],
  //   demoUrl: '#',
  // },
  // {
  //   id: 4,
  //   title: 'Restaurant & Cafe',
  //   description: 'Elegant template for restaurants and cafes with menu display, reservation system, and location info.',
  //   image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 45,
  //   category: 'business',
  //   features: ['Menu Display', 'Online Reservations', 'Testimonials', 'Gallery', 'Contact Information'],
  //   demoUrl: '#',
  // },
  // {
  //   id: 5,
  //   title: 'SaaS Landing Page',
  //   description: 'High-converting landing page template for SaaS products with feature highlights and pricing tables.',
  //   image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 35,
  //   category: 'landing',
  //   features: ['Feature Showcase', 'Pricing Tables', 'Testimonials', 'FAQ Section', 'Newsletter Signup'],
  //   demoUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Blog & Magazine',
  //   description: 'Clean, modern template for blogs and online magazines with category pages and featured posts.',
  //   image: 'https://images.pexels.com/photos/6177662/pexels-photo-6177662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   price: 42,
  //   category: 'blog',
  //   features: ['Category Pages', 'Featured Posts', 'Author Profiles', 'Comment System', 'Social Sharing'],
  //   demoUrl: '#',
  // },
];

const ShopSection = () => {
  const [filter, setFilter] = useState('all');
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'e-commerce', name: 'E-Commerce' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'business', name: 'Business' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'blog', name: 'Blog & Magazine' },
  ];
  
  const filteredTemplates = filter === 'all' 
    ? templates 
    : templates.filter(template => template.category === filter);

  interface OpenModalFn {
    (template: Template): void;
  }

  const openModal: OpenModalFn = (template) => {
    setActiveTemplate(template);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveTemplate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="shop" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand dark:text-brand-light font-semibold tracking-wide uppercase">Toko</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Premium Web Templates
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Template responsif dan berkualitas tinggi untuk memulai proyek web Anda.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
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
          {filteredTemplates.map((template) => (
            <div 
              key={template.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-brand text-white px-4 py-1 rounded-bl-lg">
                  <div className="flex items-center">
                    <Tag size={14} className="mr-1" />
                    ${template.price}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{template.description}</p>
                
                <div className="flex space-x-2 mb-4">
                  <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand dark:text-brand-light bg-indigo-50 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Monitor size={16} className="mr-2" /> Live Preview
                  </a>
                  <button
                    onClick={() => openModal(template)}
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand dark:bg-brand-dark transition-colors"
                  >
                    <ShoppingCart size={16} className="mr-2" /> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Template Details Modal */}
      {activeTemplate && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={activeTemplate.image}
                          alt={activeTemplate.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                          {activeTemplate.title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {activeTemplate.description}
                          </p>
                          
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                              {activeTemplate.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-6">
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-gray-900 dark:text-white">${activeTemplate.price}</span>
                              <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                                <span>One-time payment</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Includes 6 months of free support and updates
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand text-base font-medium text-white hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Download size={16} className="mr-2" /> Buy Now
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopSection;