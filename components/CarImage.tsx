import { GETIMAGEAPI } from "@/utils/api/api";
import Image from "next/image";
import React from "react";

type componentProps = {
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  angle: number;
  paint: string;
  zindex?: boolean;
  onclick?: (angle: number) => null;
};

const CarImage = ({
  make,
  model,
  year,
  fuel_type,
  angle,
  paint,
  zindex,
  onclick,
}: componentProps) => {
  const srcUrl = GETIMAGEAPI(make, model, year, fuel_type, paint, angle);
  return (
    <div className={`w-full ${zindex ? "z-20" : "z-10"}`}>
      <Image
        src={srcUrl}
        alt="car"
        width={500}
        height={500}
        className="object-contain w-full cursor-pointer"
        onClick={() => {
          onclick(angle);
        }}
      />
    </div>
  );
};

export default CarImage;
