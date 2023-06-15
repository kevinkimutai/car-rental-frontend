import React from "react";
import HeroBg from "../public/hero-bg.png";
import HeroImg from "../public/toyota-landcruiser-hero-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="flex justify-center items-center flex-col sm:flex-row px-4 sm:px-8 md:px-32 min-h-screen">
      <div className="w-full mt-[10vh] sm:mt-0 mb-8 sm:mb-0 sm:w-2/5">
        <h1 className="text-4xl mb-4 font-bold">
          <div className="mb-2">
            Hire Any <span className="text-blue-600">Car</span>
          </div>

          <div className="">
            <span className="text-blue-600">You</span> Desire.
          </div>
        </h1>
        <p className="text-md text-slate-500 mb-6">
          Explore our extensive selection of cars, ranging from compact and
          fuel-efficient models to spacious SUVs and luxurious sedans. We take
          pride in offering well-maintained vehicles that are equipped with the
          latest technology and safety features.
        </p>

        <Link href={"#car-section"}>
          <button className=" bg-blue-600 px-4 py-2 rounded-3xl text-white">
            Browse Our Fleet
          </button>
        </Link>
      </div>

      <div className="relative w-full sm:w-3/5">
        {/* Second Image */}
        <div className="absolute bottom-0 right-0 w-3/4 h-full ">
          <Image src={HeroBg} alt="" className="object-contain" />
        </div>

        {/* First Image */}
        <div className="relative h-full w-full">
          <Image src={HeroImg} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
