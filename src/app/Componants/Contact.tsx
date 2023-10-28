'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Contact = () => {
  return (
    <div id='contact'>
        {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium -mt-10 text-center justify-center text-gray-900">
              <Typewriter
                options={{
                  strings: ["Contact me"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1> */}

        <section className="text-gray-600 -mt-16 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9770176527873!2d74.27025451061073!3d31.469818374129748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a9cc1c73cd%3A0xbb6314e7b35e304e!2sKhokhar%20Chowk!5e0!3m2!1sen!2sus!4v1698412634009!5m2!1sen!2sus"
        style={{ filter: "contrast(1.2) opacity(0.6)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            370, G-4 Khokhar chowk johar town Lahore
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-gray-500 leading-relaxed">naeemshehzadcui@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+92-301-4157288</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h1 className="text-gray-900 title-font sm:text-4xl text-3xl mb-4 font-medium ">
        Contact
      </h1>
      <p className="leading-relaxed  text-gray-800">
        Fee free to contact me !
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
        Send Message
      </button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact