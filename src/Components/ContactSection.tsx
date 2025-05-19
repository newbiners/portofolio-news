
import { Mail, MapPin} from 'lucide-react';

const ContactSection = () => {
  
  
  

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand dark:text-brand-light font-semibold tracking-wide uppercase">Kontak</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mari Terhubung
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Punya proyek dalam pikiran? Mari kita bahas bagaimana saya bisa membantu mewujudkan ide Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Invormasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-brand dark:text-brand-light" />
                  </div>
                  <div className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <p>gufronnewbiners@gmail.com</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Email saya jika kamu ingin berdiskusi soal proyek atau kolaborasi</p>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand dark:text-brand-light" />
                  </div>
                  <div className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <p>+1 (555) 123-4567</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Available Monday-Friday, 9am-5pm PST</p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand dark:text-brand-light" />
                  </div>
                  <div className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <p>Jember, Jawa Timur</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tersedia untuk kerja remote secara global</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect</h3>
                <div className="flex space-x-4">
                  {['twitter', 'github', 'linkedin', 'dribbble'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          
          <div>
            {/* <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="text-green-500 mb-4">
                    <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-dark focus:border-brand-dark dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand dark:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors"
                    >
                      <Send size={18} className="mr-2" /> Send Message
                    </button>
                  </div>
                </>
              )}
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;