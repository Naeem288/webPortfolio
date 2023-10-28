import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font -mt-10">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded w-[400px] mx-auto"
        alt="hero"
        height={400}
        width={400}

        src={require("../../../public/assets/logo/profile1.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me
      </h1>
      <p className="mb-5 leading-relaxed text-justify">
      As a Next.js web developer, I am a dedicated and innovative professional with a passion for crafting high-performance, dynamic web applications. My expertise in Next.js, combined with a solid foundation in web development,
       allows me to create fast, engaging, and responsive user experiences. 
      </p>
      <div className="flex justify-center">
        <a href="assets/cv/nextCv.pdf">
        <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
          View Cv
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About