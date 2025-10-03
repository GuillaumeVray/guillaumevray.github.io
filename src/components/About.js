import React from "react";
import AboutData from "../data/about";
import ProfileData from "../data/profile";

const About = () => {
  return (
    <section className="body-font transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-light-blue">
            About Me
          </h1>
          
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={AboutData.image}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="mb-4 text-lg font-medium leading-loose text-gray-700 dark:text-gray-300 lg:text-base xl:text-xl xl:leading-8"
              >
                {item}
              </p>
            ))}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <a href={ProfileData.resume} target="_blank" rel="noreferrer">
                <button className="inline-flex font-medium text-white bg-light-blue border-2 border-light-blue py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-light-blue hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
