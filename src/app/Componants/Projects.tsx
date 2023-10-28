import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font -mt-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center justify-center">
      Explore a collection of web projects meticulously crafted with the perfect blend of Bootstrap 5, 
      Tailwind CSS, and the latest Next.js 13 framework. These projects showcase my dedication to creating responsive, 
      user-friendly, and highly performant web applications.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
        {/* projects 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/p2.JPG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              E-commerce
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shopping Website
            </h1>
            <p className="leading-relaxed ">
            Developed a platform that facilitates online buying and selling of products and services.
            </p>
            <Link href={"https://dine-market-blond.vercel.app/"}>
            <p className="leading-relaxed hover:text-black underline">
            View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/p1.JPG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Scribbrweb Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Plagiarishm checker
            </h1>
            <p className="leading-relaxed ">
            Designed a clone of a Plagiarishm checking website by using Bootstrap 5.
            </p>
            <Link href={"https://dine-market-blond.vercel.app/"}>
            <p className="leading-relaxed hover:text-black underline">
            View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects 3 */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/p4.JPG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">
              Portfolio 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Projects Showcase
            </h1>
            <p className="leading-relaxed ">
            Developed a window to showcase my skills, creativity, and accomplishments.  
            </p>
            <Link href={"https://dine-market-blond.vercel.app/"}>
            <p className="leading-relaxed hover:text-black underline">
            View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects