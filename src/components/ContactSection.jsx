import { useState } from 'react';
import { contact, siteConfig } from '../../data';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would send the form data to a server
      console.log('Form submitted:', formData);
      
      // Show success message
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-semibold mb-6 animate-fade-in">{contact.heading}</h1>
          <p className="text-lg text-gray-600 mb-12 animate-fade-in">{contact.description}</p>
          
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">{contact.formLabels.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm outline-none transition-colors duration-200 ${
                    formErrors.name 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                  }`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">{contact.formLabels.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm outline-none transition-colors duration-200 ${
                    formErrors.email 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                  }`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium">{contact.formLabels.subject}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-sm outline-none transition-colors duration-200 ${
                  formErrors.subject 
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                }`}
              />
              {formErrors.subject && (
                <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
              )}
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block mb-2 font-medium">{contact.formLabels.message}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-sm outline-none resize-none transition-colors duration-200 ${
                  formErrors.message 
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent'
                }`}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
              )}
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary relative ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                contact.formLabels.submit
              )}
            </button>
            
            {formSubmitted && (
              <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-sm animate-fade-in">
                {contact.thankYouMessage}
              </div>
            )}
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="animate-fade-in">
              <h3 className="text-xl font-display font-medium mb-4">Contact Info</h3>
              <p className="text-gray-600 mb-2">{siteConfig.email}</p>
              <p className="text-gray-600">{siteConfig.phone}</p>
              <p className="text-gray-600 mt-4">{siteConfig.location}</p>
            </div>
            
            <div className="animate-fade-in">
              <h3 className="text-xl font-display font-medium mb-4">Follow</h3>
              <div className="flex space-x-5">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-black transition-colors p-2 -m-2"
                    aria-label={`Follow on ${platform}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}