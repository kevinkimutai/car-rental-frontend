"use client";

import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState, Fragment } from "react";

type componentProps = {
  data: any;
  setFuel: (value: any) => void;
  fuel: any;
};

const ListBox = (props: componentProps) => {
  return (
    <div className="w-full flex justify-end items-center mb-4">
      <div className="w-1/2 sm:w-1/4  border border-slate-300">
        <Listbox value={props.fuel} onChange={props.setFuel}>
          <div className="relative w-full ">
            {/* Button for the listbox */}
            <Listbox.Button className="flex justify-start items-center p-2">
              <span className="block truncate">{props.fuel.title}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="mr-3 object-contain"
                alt="chevron_up-down"
              />
            </Listbox.Button>
            {/* Transition for displaying the options */}
            <Transition
              as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="w-full">
                {/* Map over the options and display them as listbox options */}
                {props.data.map((option: any) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      `relative cursor-default w-full select-none py-2 px-4 ${
                        active ? "bg-blue-500  text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default ListBox;
