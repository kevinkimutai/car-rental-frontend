"use client";

import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarDataApiTypes } from "@/constants";
import CarImage from "./CarImage";
import BgImg from "../public/pattern.png";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarDataApiTypes;
}

const CarModal = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-20 w-fit p-2 bg-primary-blue-100 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain "
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative flex justify-between items-center ">
                    <CarImage
                      make={car.make}
                      model={car.model}
                      year={car.year}
                      fuel_type={car.fuel_type}
                      angle={29}
                      paint={"brilliant-white-metallic"}
                      zindex={true}
                    />

                    <CarImage
                      make={car.make}
                      model={car.model}
                      year={car.year}
                      fuel_type={car.fuel_type}
                      angle={33}
                      paint={"brilliant-white-metallic"}
                      zindex={true}
                    />

                    <CarImage
                      make={car.make}
                      model={car.model}
                      year={car.year}
                      fuel_type={car.fuel_type}
                      angle={13}
                      paint={"brilliant-white-metallic"}
                      zindex={true}
                    />
                    <Image
                      src={BgImg}
                      fill
                      alt={"bg"}
                      className="absolute top-0 left-0 right-0 bottom-0 z-10"
                    />
                  </div>

                  <div className="flex justify-center items-center w-full h-40 rounded-lg">
                    <CarImage
                      make={car.make}
                      model={car.model}
                      year={car.year}
                      fuel_type={car.fuel_type}
                      angle={23}
                      paint={"brilliant-white-metallic"}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarModal;
