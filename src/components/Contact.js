
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };

  const validateForm = () => {
    let valid = true;

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',
      }));
      valid = false;
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      valid = false;
    }

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <section id="contact" className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>

       
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${
                errors.name && 'border-red-500'
              }`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${
                errors.email && 'border-red-500'
              }`}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${
                errors.message && 'border-red-500'
              }`}
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
