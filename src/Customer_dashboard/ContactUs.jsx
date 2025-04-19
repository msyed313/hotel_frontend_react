import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-50">
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Before Contacting Us</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis
          possuere velit aliquet.
        </p>

        <h3 className="text-lg font-bold mb-2">Contact Information</h3>
        <p>184, Rajapur, Pabna - 6600, Dhaka, Bangladesh</p>
        <p>+8801800-222-222</p>
        <p>contact@gmail.com</p>
        <p>Everyday 9:00-17:00</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Social Media</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-blue-500">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-blue-500">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-blue-500">LinkedIn</a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 bg-blue-100 p-6 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold mb-4">Please fulfil the form below.</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name (required)</label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email (required)</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea 
              id="message" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              rows="4" 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;