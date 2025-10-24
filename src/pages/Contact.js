import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleElements([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email',
      value: t('contact.email'),
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Phone',
      value: t('contact.phone'),
      color: 'from-green-500 to-green-600',
      delay: 200
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Location',
      value: t('contact.location'),
      color: 'from-purple-500 to-purple-600',
      delay: 400
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: 'hover:bg-blue-400 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto slide-up">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and development.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                      visibleElements.includes(index) ? 'slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${method.delay}ms` }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg text-white`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`card hover-lift ${
              visibleElements.includes(4) ? 'slide-in-right' : 'opacity-0'
            }`}>
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600 mr-3 animate-pulse" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </h2>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg focus:shadow-lg resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('contact.form.send')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-20">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Let's Work Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                I'm available for freelance projects, full-time positions, and collaborations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Freelance Projects',
                  description: 'Available for short-term and long-term projects',
                  icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Full-time Positions',
                  description: 'Open to exciting full-time opportunities',
                  icon: <Clock className="w-8 h-8 text-green-500" />,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Collaborations',
                  description: 'Interested in creative partnerships and joint ventures',
                  icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="card text-center hover-lift"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    <div className={`p-4 bg-gradient-to-r ${item.color} rounded-lg text-white mx-auto w-fit`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;