import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9inzcz7",
        "template_lg8ahdf",
        formRef.current,
        "_8hE7B_7PzOSTxPxm"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="body-font text-gray-600 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 ">
      <div className="mx-auto px-3 py-5 text-center transition-colors duration-300 sm:mx-7 md:mx-12 md:mt-7 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="mb-2 text-3xl font-medium title-font text-light-blue sm:text-4xl">
            Contact Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white "
          >
            Let's keep in touch
          </p>
        </div>
        <div className="mx-auto flex w-full flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:flex-row md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="w-full p-2 text-center lg:w-4/6 lg:p-5 xl:p-7 md:w-1/2">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="hidden md:block text-2xl font-medium text-light-blue lg:mb-4 lg:text-3xl"
            >
              Get In Touch
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaPhoneAlt className="text-light-blue" />
              <p className="text-gray-700 dark:text-gray-300 md:text-lg ">{ContactData.phone}</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaEnvelope className="text-light-blue" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-gray-700 dark:text-gray-300 md:text-lg"
              >
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center md:gap-2 lg:gap-5"
            >
              <FaMapMarkerAlt className="text-light-blue" />
              <p className="leading-normal text-start text-gray-700 dark:text-gray-300 md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="false"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-2 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:w-1/2 md:p-4 lg:m-4 lg:w-3/5 lg:px-5 lg:py-7"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Name"
                type="text"
                name="user_name"
                className="mb-1 w-full rounded-md border border-gray-300 bg-white p-2 text-base leading-8 text-black transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-100"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Email"
                type="email"
                name="user_email"
                className="mb-1 w-full rounded-md border border-gray-300 bg-white p-2 text-base leading-8 text-black transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-100"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <textarea
                required
                placeholder="Message"
                name="message"
                className="mb-1 h-32 w-full resize-none rounded-md border border-gray-300 bg-white p-2 text-base leading-6 text-black transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-100"
              ></textarea>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <button className=" mx-auto my-3 rounded-xl border-0 bg-light-blue px-12 py-2 text-lg font-medium text-white transition duration-500 hover:scale-110 hover:bg-blue-500 focus:outline-none dark:hover:bg-blue-400">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
