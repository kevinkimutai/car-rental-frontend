"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Img from "../../public/toyota-landcruiser-hero-removebg-preview.png";
import ImgBg from "../../public/bgPattern2.jpg";
import { useSearchParams } from "next/navigation";
import { CarImage } from "@/components";

const SpecificCarPage = () => {
  const params = useSearchParams();
  const city_mpg = params?.get("city_mpg");
  const car_class = params?.get("class");
  const combination_mpg = params?.get("combination_mpg");
  const cylinders = params?.get("cylinders");
  const displacement = params?.get("displacement");
  const drive = params?.get("drive");
  const fuel_type = params?.get("fuel_type");
  const highway_mpg = params?.get("highway_mpg");
  const make = params!.get("make");
  const model = params?.get("model");
  const transition = params?.get("transition");
  const year = params?.get("year");
  const paint = params?.get("paint");

  //@ts-ignore
  const [mainImg, setMainImg] = useState(23);
  const clickHandler = (num: number) => {
    setMainImg(num);
  };

  return (
    <section className="px-4 sm:px-8 md:px-32 py-8 flex justify-center flex-col sm:flex-row gap-2">
      <div className="w-full sm:w-3/5 mb-4 ">
        <CarImage
          make={make!}
          model={model!}
          year={+year!}
          fuel_type={fuel_type!}
          angle={mainImg}
          paint={paint!}
        />
        <div className="relative flex justify-between items-center">
          <Image
            src={ImgBg}
            alt=""
            className="object-cover w-full absolute h-16 sm:h-32 z-10"
          />
          <CarImage
            make={make!}
            model={model!}
            year={+year!}
            fuel_type={fuel_type!}
            angle={23}
            paint={paint!}
            zindex={true}
            onclick={clickHandler}
          />
          <CarImage
            make={make!}
            model={model!}
            year={+year!}
            fuel_type={fuel_type!}
            angle={9}
            paint={paint!}
            zindex={true}
            onclick={clickHandler}
          />
          <CarImage
            make={make!}
            model={model!}
            year={+year!}
            fuel_type={fuel_type!}
            angle={28}
            paint={paint!}
            zindex={true}
            onclick={clickHandler}
          />
          <CarImage
            make={make!}
            model={model!}
            year={+year!}
            fuel_type={fuel_type!}
            angle={5}
            paint={paint!}
            zindex={true}
            onclick={clickHandler}
          />
        </div>
      </div>
      <div className="w-full sm:w-2/5 bg-blue-100 p-8 rounded-md shadow-md">
        <h2 className="font-semibold text-gray-800 text-2xl mb-10 capitalize">
          {make} {model}
        </h2>

        <div className="mb-10">
          {Array.from(params!.entries()).map(([key, value]) => (
            <div
              className="flex justify-between gap-5 w-full text-right mb-2"
              key={key}
            >
              <h4 className="text-grey capitalize">
                {key.split("_").join(" ")}
              </h4>
              <p className="text-black-100 font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="w-1/3 py-2 text-white bg-gray-500 rounded-md">
            Back
          </button>
          <button className="w-2/3 py-2 text-white bg-blue-600 rounded-md ">
            Hire
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecificCarPage;
