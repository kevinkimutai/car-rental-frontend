"use client";

import { useState } from "react";

import DeliveryDatesForm from "@/components/DeliveryDatesForm";
import LocationDetailsForm from "@/components/LocationDetailsForm";
import PersonalCheckoutDetailsForm from "@/components/PersonalCheckoutDetailsForm";
import Image from "next/image";
import React from "react";

import { Disclosure, Transition } from "@headlessui/react";

import { LuArrowLeftCircle } from "react-icons/lu";
import HireOne from "@/components/HireOne";

import { LuChevronDown } from "react-icons/lu";
import TestHireBtn from "@/components/TestHireBtn";
import HireMany from "@/components/HireMany";
import useCarStore from "@/store/store";

import emptyImg from "../../public/6028969.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";

const Checkout = () => {
  //@ts-ignore
  const carOrderDetails = useCarStore((state) => state.carOrderDetails);
  const [secondFormOpen, setSecondFormOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            //@ts-ignore
            style: {
              background: "",
              color: "#22c55e",
            },
          },

          error: {
            duration: 3000,
            icon: <BiError className={"text-red-600 text-lg"} />,
            //@ts-ignore
            style: {
              background: "#fff",
              color: "#ef4444",
            },
          },
        }}
      />
      <section className="flex flex-col justify-center sm:justify-start sm:flex-row px-4 sm:px-8 md:px-32 py-4 mt-8">
        <div className="w-full sm:w-1/2 mb-8">
          <p
            className="flex items-center mb-8  "
            onClick={() => {
              router.back();
            }}
          >
            <LuArrowLeftCircle className="mr-1" /> Back
          </p>
          <h1 className="text-4xl text-blue-600 font-semibold mb-8">
            Checkout
          </h1>

          <Disclosure defaultOpen>
            {({ open, close }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full mb-16">
                  <h2 className="text-lg text-slate-600">
                    1. Personal Details
                  </h2>
                  <LuChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } text-lg text-blue-500 mr-5`}
                  />
                </Disclosure.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <PersonalCheckoutDetailsForm
                      close={close}
                      setSecondFormOpen={setSecondFormOpen}
                    />
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full">
                  <h2 className="text-lg text-slate-600">
                    2. Delivery Details
                  </h2>
                  <LuChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } text-lg text-blue-500 mr-5`}
                  />
                </Disclosure.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <DeliveryDatesForm />
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        {carOrderDetails.length === 0 ? (
          <div className="w-1/2 p-6">
            <Image
              src={emptyImg}
              alt="add car to hire"
              className="w-full object-contain"
            />
            <p className="text-center font-semibold">Add Car to continue</p>
          </div>
        ) : carOrderDetails.length === 1 ? (
          <HireOne />
        ) : (
          <HireMany />
        )}
      </section>
    </>
  );
};

export default Checkout;
