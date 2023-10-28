"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="-mt-10">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#00A9FF]">
              I am
              <br className="hidden lg:inline-block " />
              <Typewriter
                options={{
                  strings: ["Next-Js Developer", "UX/UI Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              I am a seasoned Next.js developer with a passion for building
              lightning-fast, feature-rich web applications. Armed with a deep
              understanding of both front-end and back-end development, I
              specialize in crafting seamless user experiences and optimizing
              performance through server-side rendering. With a keen eye for
              clean and maintainable code, I am dedicated to delivering solutions
              that not only meet but exceed expectations. Lets collaborate to
              create web experiences that leave a lasting impression! 💻✨
            </p>
            <div className="flex justify-center">
                <Link href={'#contact'}>
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                <b>Contact me</b>
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[25rem]"
              alt="profile"
              height={500}
              width={500}
              src={require("../../../public/assets/logo/profile.jpeg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
