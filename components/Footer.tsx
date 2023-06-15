import { footerLinks } from "@/constants";
import React from "react";
import FooterImg from "../public/cleveland-auto-show-car-logo-png-25-removebg.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex bg-blue-500 p-4">
      {/* LOGO */}
      <div className="w-1/3 flex justify-center items-center flex-col">
        <Image
          src={FooterImg}
          width={120}
          alt="logo"
          className="mb-2 cursor-pointer"
        />
        <p className="font-semibold">CarHire @2023</p>
        <p className="text-zinc-100">All rights reserved</p>
      </div>

      <div className="flex flex-1 flex-wrap justify-end items-center w-1/2 sm:px-16">
        {footerLinks.map((footer) => (
          <div key={footer.title} className="mx-4">
            <h2 className="font-semibold mb-3">{footer.title}</h2>
            <ul>
              {footer.links.map((link) => (
                <li
                  key={link.title}
                  className="p-2 text-zinc-100 cursor-pointer"
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
