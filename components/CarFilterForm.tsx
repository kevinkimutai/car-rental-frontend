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
    <form
      className="flex flex-wrap justify-end mb-6"
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
      <ListBox data={fuels} fuel={fuel} setFuel={setFuel} />
      {/* <ListBox data={yearsOfProduction} setFuelType={props.setFuelType} /> */}
      <div className="flex justify-end w-full items-end mb-6">
        <button
          type="submit"
          className="self-end flex justify-center items-center border border-slate-300 bg-slate-300 px-2 py-1 rounded-md"
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
  );
};

export default CarFilterForm;
