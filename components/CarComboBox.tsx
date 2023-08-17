"use client";

import { useState, Fragment, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

type componentProps = {
  make: string;
  setMake: (model: string) => void;
};

function CarComboBox(props: componentProps) {
  const [query, setQuery] = useState("");

  const filteredCars =
    query === ""
      ? manufacturers
      : manufacturers.filter((cars) => {
          return cars.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={props.make} onChange={props.setMake}>
      <div className=" flex items-center justify-start relative w-full">
        {/* Button for the combobox. Click on the icon to see the complete dropdown */}
        <Combobox.Button className="">
          <Image
            src="/car-logo.svg"
            width={20}
            height={20}
            className="text-slate-600"
            alt="car logo"
          />
        </Combobox.Button>

        {/* Input field for searching */}
        <Combobox.Input
          className="ml-2 rounded-md bg-transparent focus:bg-slate-100 focus:ring-blue-300 px-2 py-1"
          displayValue={(item: string) => item}
          onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
          placeholder="Volkswagen..."
        />

        {/* Transition for displaying the options */}
        <Transition
          as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")} // Reset the search query after the transition completes
        >
          <Combobox.Options
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            static
          >
            {filteredCars.length === 0 && query !== "" ? (
              <p>No such car brand</p>
            ) : (
              filteredCars.map((car) => (
                <Combobox.Option
                  key={car}
                  className={({ active }) =>
                    `relative p-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                  value={car}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {car}
                      </span>

                      {/* Show an active blue background color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-black" : "bg-blue-500 w-full"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
export default CarComboBox;
