"use client";

import useCarStore from "@/store/store";
import React, { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";

const DeliveryDatesForm = () => {
  const updateDeliveryDetails = useCarStore(
    (state) => state.updateDeliveryDetails
  );

  const [value, setValue] = useState({
    startDate: new Date().toString(),
    endDate: new Date().setMonth(11).toString(),
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  const dateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDeliveryDetails(value);
  };

  return (
    <div className="mb-6">
      <form className="py-4 px-8" onSubmit={dateSubmit}>
        <div className="border border-blue-600 rounded-md mb-6">
          <Datepicker value={value} onChange={handleValueChange} />
        </div>
        <div className="flex justify-end">
          <button className="w-1/4 justify-self-end bg-blue-600 text-white p-2 rounded-md">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryDatesForm;
