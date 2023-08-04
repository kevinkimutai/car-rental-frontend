import React from "react";
import CarItems from "./CarItems";
import { CarDataApiTypes } from "@/constants";
import { GETEVCARDATA } from "@/utils/api/api";

const EVCars = async () => {
  const carData: CarDataApiTypes[] = await GETEVCARDATA("electricity");
  return (
    <section className="px-4 sm:px-8 md:px-32 py-8">
      <h1 className="mb-5 font-bold text-2xl">EV CARS</h1>
      <div className="flex justify-center items-center w-full">
        <div className="flex  flex-wrap justify-center items-center w-full">
          {carData?.map((item: CarDataApiTypes) => (
            <CarItems key={item.model} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EVCars;
