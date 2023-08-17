import React from "react";

import useCarStore from "@/store/store";
import CarImage from "./CarImage";
import { capitalizeStr } from "@/utils/capitalizeString";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { calculateDaysBetweenDates } from "@/utils/getNumberOfDays";

const HireMany = () => {
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

  return (
    <div className="w-1/2 p-6">
      <div className="rounded-lg bg-blue-100 p-2 w-full overflow-hidden">
        <div className="flex flex-col">
          <div className="overflow-x-scroll sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light max-h-[20rem] overflow-y-scroll overflow-x-scroll">
                  {/* <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-1">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-1">
                        Model/Make
                      </th>
                      <th scope="col" className="px-6 py-1">
                        Paint
                      </th>
                      <th scope="col" className="px-6 py-1">
                        Year
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Daily Rate
                      </th>
                    </tr>
                  </thead> */}
                  <tbody>
                    {carOrderDetails.map((car, indx) => (
                      <tr
                        //TODO: ADD UUID
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        key={indx}
                      >
                        <td className="whitespace-nowrap w-[10rem]  py-4">
                          <div className="w-24">
                            <CarImage
                              make={car.make!}
                              model={car.model!}
                              year={+car.year!}
                              //fuel_type={fuel_type!}
                              angle={23}
                              paint={car.paint!}
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold">
                          {capitalizeStr(car.make!)} {capitalizeStr(car.model!)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold">
                          {capitalizeStr(car.paint!)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold">
                          {car.year}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold">
                          <span className=" mr-1">$</span>
                          {car.price} /day
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8 mb-4 px-6">
            <p className="text-slate-700">SubTotal</p>
            <p className="font-semibold">
              <span className="font-semibold">$</span>{" "}
              {calculateTotalPrice(carOrderDetails)}
            </p>
          </div>
          <div className="flex justify-between items-center mb-8 px-6">
            <p className="text-slate-700">Number of Days</p>
            <p className="font-semibold">
              {calculateDaysBetweenDates(
                deliveryDate?.startDate,
                deliveryDate?.endDate
              )}
            </p>
          </div>
          <div className="flex justify-between items-center mb-8 px-6">
            <p className="text-slate-700 font-bold text-md">TOTAL</p>
            <p className="font-bold text-md">
              <span className="font-semibold">$</span>{" "}
              {calculateTotalPrice(carOrderDetails)}
            </p>
          </div>
        </div>

        {/* <div className=" w-full px-6">
          <h2 className="font-bold text-xl text-slate-700 mb-6">
            Audi S3 Black 2022
          </h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-slate-700">SubTotal</p>
            <p className="font-semibold">4500</p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <p className="text-slate-700">Delivery Fee</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <p className="text-slate-700 font-bold text-md">TOTAL</p>
            <p className="font-bold text-md">4500</p>
          </div>

          <div className="flex justify-between items-center mb-4 gap-2">
            <button className="2/3 bg-slate-500 p-2 w-full rounded-md text-white">
              Hire Multiple
            </button>
            <button className="1/4 bg-blue-600 text-white p-2 w-full rounded-md">
              Pay
            </button>
          </div>
        </div> */}

        <div className="flex w-full justify-between items-center mb-4 gap-2 px-6">
          <button className="2/3 bg-slate-500 p-2 w-full rounded-md text-white">
            Hire Multiple
          </button>
          <button
            className="1/3 bg-blue-600 text-white p-2 w-full rounded-md disabled:bg-slate-200"
            disabled={!personalDetails || !deliveryDate}
            onClick={hireCar}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMany;
