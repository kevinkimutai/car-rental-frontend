import React from "react";
import { LuUser, LuShoppingCart } from "react-icons/lu";

const Nav = () => {
  return (
    <section className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white shadow-md">
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
