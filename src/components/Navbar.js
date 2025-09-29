import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="body-font fixed inset-x-0 z-50 bg-white/90 text-gray-900 shadow-md backdrop-blur dark:bg-slate-950/90 dark:text-gray-100">
      <div className="mx-auto flex flex-row items-center justify-between px-5 py-2 lg:justify-around lg:py-3">
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center w-fit"
        >
          <img
            className="w-12 h-12 ml-3 cursor-pointer scale-125 lg:scale-150"
            src={ProfileData.logo}
            alt={ProfileData.name}
          />
        </Link>
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden md:mx-auto lg:flex flex-wrap items-center justify-center gap-12 text-lg text-gray-900 dark:text-gray-100"
        >
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                className="cursor-pointer hover:text-light-blue"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 lg:gap-4">
          <ThemeToggle />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:hidden"
          >
            <button onClick={toggleMenu} className="p-2 text-gray-900 dark:text-gray-100">
              {isMenuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <BiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <a
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="false"
            href={ProfileData.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-light-blue px-10 py-3 text-lg font-medium text-white transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue lg:inline-flex"
          >
            Resume
          </a>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 min-h-[calc(100vh-4rem)] transition-all duration-1000 ease-in lg:hidden">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="500"
              data-aos-once="true"
              className="rounded-b-lg bg-white px-5 pb-4 shadow-lg dark:bg-slate-900"
            >
              <nav className="flex flex-col gap-y-7 text-xl text-gray-900 dark:text-gray-100">
                {Navlinks.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      onClick={() => setIsMenuOpen(false)}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={750}
                      to={item.link}
                      className="cursor-pointer hover:text-light-blue"
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <a
                  href={ProfileData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-auto wfit rounded-lg bg-light-blue px-10 py-2.5 text-lg font-medium text-white transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue"
                >
                  Resume
                </a>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
