"use client";

import { CarDataApiTypes } from "@/constants";
import React, { useState } from "react";

import HeroImg from "../public/toyota-landcruiser-hero-removebg-preview.png";
import Image from "next/image";
import CarImage from "./CarImage";
import { getRandomPaintDescription } from "@/utils/api/api";
import CarModal from "./CarModal";

type ComponentProps = {
  data: CarDataApiTypes;
};

const CarItems = (props: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" max-w-[15rem] mx-2 bg-blue-100 rounded-lg shadow mb-6  flex flex-col justify-start  p-4">
        <h2 className="mb-2 capitalize font-semibold text-lg text-slate-700">
          {props.data.make} {props.data.model}
        </h2>
        <div className="flex">
          <span className="font-semibold self-start text-sm mr-[2px] text-slate-600">
            $
          </span>
          <span className="font-bold text-xl mr-[2px]">52</span>
          <span className="font-semibold self-end text-sm text-slate-600">
            /day
          </span>
        </div>
        {/* TODO: ADD YEAR DYNAMICALLY */}
        <CarImage
          make={props.data.make}
          model={props.data.model}
          year={2022}
          fuel_type={props.data.fuel_type}
          angle={23}
          paint={getRandomPaintDescription()}
        />
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-center items-center flex-col mr-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt=""
              className="mb-2"
            />
            <p className="text-sm text-slate-600">
              {props.data.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col mr-2">
            <Image
              src={"/tire.svg"}
              width={20}
              height={20}
              alt=""
              className="mb-2"
            />
            <p className="text-sm text-slate-600">
              {props.data.drive.toUpperCase()}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <Image
              src={"/gas.svg"}
              width={20}
              height={20}
              alt=""
              className="mb-2"
            />
            <p className="text-sm text-slate-600">{props.data.city_mpg}/Mpg</p>
          </div>
        </div>

        <button
          className="text-sm text-white bg-blue-500 p-2 rounded-3xl"
          onClick={() => setIsOpen(true)}
        >
          View All
        </button>
      </div>

      <CarModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={props.data}
      />
    </>
  );
};

export default CarItems;
