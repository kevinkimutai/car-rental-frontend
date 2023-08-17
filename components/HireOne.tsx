"use client";

import Image from "next/image";
import React from "react";

import carImg from "../public/toyota-landcruiser-hero-removebg-preview.png";
import useCarStore from "@/store/store";
import { capitalizeStr } from "@/utils/capitalizeString";
import CarImage from "./CarImage";
import Link from "next/link";
import { URL } from "@/constants";
import { getCookie } from "@/utils/getCookie";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import toast, { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { calculateDaysBetweenDates } from "@/utils/getNumberOfDays";

const HireOne = () => {
  const carOrderDetails = useCarStore((state) => state.carOrderDetails);
  const personalDetails = useCarStore((state) => state.personalDetails);
  const deliveryDate = useCarStore((state) => state.deliveryDate);

  const router = useRouter();

  const hireCar = async () => {
    let url = `${URL}/hires`;

    const token = localStorage.getItem("jwt");

    const totalPrice = calculateTotalPrice(carOrderDetails);

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        carOrderDetails,
        personalDetails,
        deliveryDate,
        totalPrice,
      }),
    };

    //@ts-ignore
    const res = await fetch(url, requestOptions);

    if (res.ok) {
      const { redirectUrl } = await res.json();

      toast.success("Success! Redirecting to payment.");

      setTimeout(() => {
        router.push(redirectUrl);
      }, 3050);
    } else {
      toast.error("Something went wrong.");
    }
  };

  const numDays =
    calculateDaysBetweenDates(deliveryDate?.startDate, deliveryDate?.endDate) ||
    1;

  return (
    <>
      <div className="w-full sm:w-1/2 p-1 sm:p-2 lg:p-6">
        <div className="rounded-lg bg-blue-100 p-2 w-full lg:w-4/5">
          <CarImage
            make={carOrderDetails[0].make!}
            model={carOrderDetails[0].model!}
            year={+carOrderDetails[0].year!}
            //fuel_type={fuel_type!}
            angle={23}
            paint={carOrderDetails[0].paint!}
          />

          <div className=" w-full px-6">
            <h2 className="font-bold text-xl text-slate-700 mb-6">
              {capitalizeStr(carOrderDetails[0].make!)}{" "}
              {capitalizeStr(carOrderDetails[0].model!)}{" "}
              {carOrderDetails[0].year}
              <br />
              {capitalizeStr(carOrderDetails[0].paint!)}
            </h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-700">SubTotal</p>
              <p className="font-semibold">{carOrderDetails[0].price} /day</p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-700">Number Of Days</p>
              <p className="font-semibold">
                {calculateDaysBetweenDates(
                  deliveryDate?.startDate,
                  deliveryDate?.endDate
                ) || 1}
              </p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-700 font-bold text-md">TOTAL</p>
              <p className="font-bold text-md">
                <span className="font-semibold mr-1">$</span>
                {calculateTotalPrice(carOrderDetails) * numDays}
              </p>
            </div>

            <div className="flex justify-between items-center mb-4 gap-2">
              <Link
                href={"/#car-section"}
                className="2/3 bg-slate-500 p-2 w-full rounded-md text-white text-center"
              >
                Hire Multiple
              </Link>
              <button
                className="1/3 bg-blue-600 text-white p-2 w-full rounded-md disabled:bg-blue-100"
                disabled={!personalDetails || !deliveryDate}
                onClick={hireCar}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireOne;
