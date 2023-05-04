import React from 'react';

const Footer = () => {
    return (
        <div className='py-6 text-sm text-center text-gray-400'>
        © 2023 FodigeCafe. All rights reserved.
        <div className="flex flex-col lg:flex-row items-center mt-3 ms-12 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 ">
        <li>
          <a href="#" className="me-4 hover:underline md:me-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            Online Booking
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </li>
      </div>
      </div>
    );
};

export default Footer;