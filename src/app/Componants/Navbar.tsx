import React from "react";
import Link from "next/link";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";



const Navbar = () => {
  return (
    <div className="z-50 top-0 sticky bg-white">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logo}
              height={100}
              width={100}
              alt="logo"
              className="w-[50px]"
            />
            <p className="fontVariant">
              <b>Naeem Shehzad</b>
            </p>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-black hover:text-lg duration-500">
              <b>Home</b>
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-black hover:text-lg  duration-500">
              <b>About</b>
            </Link>
            <Link
              href={"#skills"}
              className="mr-5 hover:text-black hover:text-lg duration-500">
              <b>Skills</b>
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-black hover:text-lg duration-500">
              <b>Projects</b>
            </Link>
            <Link
              href={"#contact"}
              className="mr-5 hover:text-black hover:text-lg duration-500">
              <b>Contact Us</b>
            </Link>
          </nav>
          <a href="assets/cv/nextCv.pdf">
            <button className="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0">
              Download Cv
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
