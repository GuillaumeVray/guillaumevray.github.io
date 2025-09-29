import React from "react";

const Footer = () => {
  return (
    <div className="mt-2 border-t border-gray-200 bg-white py-4 text-center font-normal text-md text-gray-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-gray-300 md:mt-4 md:p-5 md:text-lg">
      <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
        Made by <span className="font-bold text-gray-900 dark:text-white"> Guillaume Vray</span>
      </p>
    </div>
  );
};

export default Footer;
