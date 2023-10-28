import Link from "next/link";
import React from "react";
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Image from "next/image";
import logo from "../../../public/assets/logo/logo.png"

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
              src={logo}
              height={100}
              width={100}
              alt="logo"
              className="w-[50px]"
            />
            <p className="ml-3 text-xl">
              <b>My-Portfolio</b>
            </p>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2023 Naeem Shehzad —
            <Link
              href="https://twitter.com/nEeMu288"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b className="hover:text-lg to-black">@nEeMu288</b>
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"https://web.facebook.com/profile.php?id=100008034844731"}
             className="text-gray-500"
             target="_blank">
              <FaFacebookF className="text-3xl hover:text-[#3b5998]" />
            </Link >
            <Link className="ml-3 text-gray-500"
            href={"https://twitter.com/nEeMu288"}
            target="_blank">
              <FaTwitter className="text-3xl hover:text-[#00acee]" />
            </Link>
            <Link  className="ml-3 text-gray-500"
            href={"https://www.linkedin.com/in/naeem-shehzad-ba516a185/"}
             target="_blank">
              <FaLinkedinIn className="text-3xl hover:text-[#0072b1]" />
            </Link >
            <Link className="ml-3 text-gray-500"
            href={"https://www.instagram.com/naeem.shehzad.7583/"}
            target="_blank">
              <FaInstagram className="text-3xl hover:text-[#feda75]"  />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
