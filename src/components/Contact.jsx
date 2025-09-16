import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form
              action="https://formsubmit.co/dasharathh99@gmail.com"
              method="POST"
            >
              {/* hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thanks"
              />

              <div className="mb-5">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 
                             rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent 
                             transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 
                             rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent 
                             transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 
                             rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent 
                             transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 
                             rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent 
                             transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 
                           w-full bg-blue-600 hover:bg-blue-700 text-white 
                           font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 
                         002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:dasharathh99@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    dasharathh99@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Follow me on</h4>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/Dashrathh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full 
                             text-gray-700 dark:text-gray-300 hover:bg-blue-100 
                             dark:hover:bg-blue-900/30 hover:text-blue-600 
                             dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 
                             8.205 11.385.6.105.825-.255.825-.57 
                             0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41
                             -.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795
                             .945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 
                             3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 
                             0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 
                             0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 
                             3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 
                             3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 
                             5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 
                             3.3 0 .315.225.69.825.57A12.02 12.02 0 
                             0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dasharath-h-prajapati-91a536285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full 
                             text-gray-700 dark:text-gray-300 hover:bg-blue-100 
                             dark:hover:bg-blue-900/30 hover:text-blue-600 
                             dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037
                             -1.852-3.037-1.853 0-2.136 1.445-2.136 
                             2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                             1.637-1.85 3.37-1.85 3.601 0 4.267 
                             2.37 4.267 5.455v6.286zM5.337 
                             7.433a2.062 2.062 0 01-2.063-2.065 
                             2.064 2.064 0 112.063 2.065zm1.782 
                             13.019H3.555V9h3.564v11.452zM22.225 
                             0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                             23.227.792 24 1.771 24h20.451C23.2 
                             24 24 23.227 24 22.271V1.729C24 
                             .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>

                {/* Twitter */}
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full 
                             text-gray-700 dark:text-gray-300 hover:bg-blue-100 
                             dark:hover:bg-blue-900/30 hover:text-blue-600 
                             dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 
                             4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 
                             1.184a4.92 4.92 0 00-8.384 4.482C7.69 
                             8.095 4.067 6.13 1.64 3.162a4.822 
                             4.822 0 00-.666 2.475c0 1.71.87 
                             3.213 2.188 4.096a4.904 4.904 0 
                             01-2.228-.616v.06a4.923 4.923 0 
                             003.946 4.827 4.996 4.996 0 
                             01-2.212.085 4.936 4.936 0 
                             004.604 3.417 9.867 9.867 
                             0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067
                             a13.995 13.995 0 007.557 2.209c9.053 
                             0 13.998-7.496 13.998-13.985 0-.21 
                             0-.42-.015-.63A9.935 9.935 
                             0 0024 4.59z"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
