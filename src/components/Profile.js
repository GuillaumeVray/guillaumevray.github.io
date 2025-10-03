import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="body-font bg-white pt-16 text-gray-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-gray-900 dark:text-white"
          >
            Hello , I am{" "}
            <span className="text-light-blue">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-gray-900 mb-4 font-medium lg:inline-block dark:text-white"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-gray-700 text-lg leading-relaxed md:text-xl dark:text-gray-300"
            >
              {item}
            </p>
          ))}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-4 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-between"
          >
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex rounded-full border-2 border-light-blue bg-light-blue px-7 py-3 text-md font-medium text-white transition focus:outline-none hover:bg-cornsilk hover:border-light-blue hover:text-black xl:px-10">
                Get Resume
              </button>
            </a>
            <button className="inline-flex rounded-full border-2 border-light-blue bg-transparent px-7 py-3 text-md font-medium text-light-blue transition focus:outline-none hover:bg-light-blue hover:text-black dark:text-light-blue dark:hover:text-black xl:px-10">
              <Link
                to="research"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                My Research
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
