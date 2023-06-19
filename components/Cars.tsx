"use client";

import React, { useEffect } from "react";
import { CarDataApiTypes, fuels, yearsOfProduction } from "@/constants";
import CarItems from "./CarItems";
import CarFilterForm from "./CarFilterForm";
import { useRouter } from "next/navigation";

type componentProps = {
  data: CarDataApiTypes[];
};
const Cars = (props: componentProps) => {
  const router = useRouter();
  const handleSubmit = (make: string, model: string, fuel: any) => {
    if (make === "" && model === "") {
      return alert("missing filter/search fields!!");
    }

    const params = new URLSearchParams();
    params.set("make", make.toLowerCase());
    params.set("model", model.toLowerCase());
    params.set("fuel", fuel.value.toLowerCase());
    params.set("limit", "10");

    const newUrl = `${window.location.origin}?${params.toString()}`;
    router.push(newUrl);
  };

  const handleLimit = () => {
    const searchParams = new URLSearchParams(window.location.search);
    let limit = searchParams.get("limit");

    limit = String(Number(limit) + 10);
    searchParams.set("limit", limit);

    const newUrl = searchParams.toString();

    router.push(newUrl);
  };

  return (
    <section className="px-4 sm:px-8 md:px-32 py-8" id="car-section">
      <h1 className="font-bold text-2xl mb-2">Discover Our Cars.</h1>
      <p className="text-slate-500 text-md mb-4">
        Search a wide selection of rental cars tailored to your needs below.
      </p>

      <CarFilterForm submit={handleSubmit} />
      <div className="flex justify-center items-center w-full">
        <div className="flex  flex-wrap justify-center items-center w-full">
          {props.data?.map((item: CarDataApiTypes) => (
            <CarItems key={item.model} data={item} />
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-6">
        <button
          className="text-md text-white bg-gray-500 px-4 py-2 rounded-3xl"
          onClick={handleLimit}
        >
          More Cars
        </button>
      </div> */}
    </section>
  );
};

export default Cars;
