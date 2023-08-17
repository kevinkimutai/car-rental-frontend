"use client";

import React, { useState } from "react";
import InputContainer from "./InputContainer";
import CarComboBox from "./CarComboBox";
import ListBox from "./ListBox";
import ModelInput from "./ModelInput";
import { fuels } from "@/constants";
import Image from "next/image";

type componentProps = {
  submit: (make: string, model: string, fuel: any) => void;
};

const CarFilterForm = (props: componentProps) => {
  const [model, setModel] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [fuel, setFuel] = useState(fuels[0]);

  return (
    <>
      <form
        className="flex flex-wrap mx-auto justify-between items-center w-full lg:w-4/5  bg-slate-100 rounded-3xl mb-2 "
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          props.submit(make, model, fuel);
        }}
      >
        <InputContainer>
          <CarComboBox make={make} setMake={setMake} />
        </InputContainer>
        <InputContainer>
          <ModelInput model={model} setModel={setModel} />
        </InputContainer>
        {/* <ListBox data={fuels} fuel={fuel} setFuel={setFuel} /> */}
        {/* <ListBox data={yearsOfProduction} setFuelType={props.setFuelType} /> */}
        <div className="flex ml-auto md:ml-0 py-2 px-4">
          <button
            type="submit"
            className="flex justify-center items-center  px-2 py-1 rounded-md"
          >
            <span className="mr-2">search</span>
            <Image
              src={"/magnifying-glass.svg"}
              width={30}
              height={30}
              alt={"search-icon"}
            />
          </button>
        </div>
      </form>
      <ListBox data={fuels} fuel={fuel} setFuel={setFuel} />
    </>
  );
};

export default CarFilterForm;
