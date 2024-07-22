import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-slate-100 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6">
          <h5 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-slate-50">GameHub</h5>
          <p>Your one-stop destination for gaming news, reviews, and updates.</p>
        </div>
        
        <div className="w-full md:w-1/4 mb-6">
          <h5 className="text-lg font-semibold  mb-4 text-zinc-800 dark:text-slate-50">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h5 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-slate-50">Contact Us</h5>
          
          <p>Email: support@gamehub.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 GameHub Street, Gamer City, GH 45678</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
