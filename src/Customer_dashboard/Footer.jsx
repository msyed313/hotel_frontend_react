import React from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Book Now Section */}
        <div>
          <h5 className="text-xl font-bold mb-3">BOOK NOW!</h5>
          <p className="flex items-center space-x-2"><Phone size={16} /> <span>+880017-222-3333</span></p>
          <p className="flex items-center space-x-2 mt-1"><Mail size={16} /> <span>contact@gmail.com</span></p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Facebook size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition"><Twitter size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition"><Instagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Recent News Section */}
        <div>
          <h5 className="text-xl font-bold mb-3">RECENT NEWS</h5>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">Sem Porta Mollis Parturient</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Nullam Lorem Mattis Purus</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Nibh Sem Sit Ullamcorper</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Donec luctus imperdiet</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Magna pars studiorum</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Sedla eiusmod tempor</li>
          </ul>
        </div>

        {/* Our Awards Section */}
        <div>
          <h5 className="text-xl font-bold mb-3">OUR AWARDS</h5>
          <h6 className="text-lg font-semibold text-blue-800">🏆 LUXURY</h6>
          <p className="text-sm mt-2 text-gray-700">
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
            Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-600">
        <p>© 2024 All Rights Reserved by <span className="font-medium">Ekram Khan</span></p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Booking</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
