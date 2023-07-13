"use client";

import React, { useEffect, useState } from "react";
import { LuUser, LuShoppingCart } from "react-icons/lu";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <section
      className={`flex justify-between items-center px-4 sm:px-8 md:px-32 py-2 sticky top-0  z-50 ${
        navShow ? "bg-blue-300 shadow-sm" : "bg-white"
      }`}
    >
      {/*LOGO */}
      <h2 className="font-bold text-lg">Vehire</h2>

      {/*Icons */}
      <div className="flex justify-center items-center">
        <LuShoppingCart className="mr-5 text-lg cursor-pointer" />
        <LuUser className=" text-lg cursor-pointer" />
      </div>
    </section>
  );
};

export default Nav;
