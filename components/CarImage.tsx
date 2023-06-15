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
};

const CarImage = ({
  make,
  model,
  year,
  fuel_type,
  angle,
  paint,
  zindex,
}: componentProps) => {
  const srcUrl = GETIMAGEAPI(make, model, year, fuel_type, paint, angle);
  return (
    <div className={`${zindex ? "z-20" : ""}`}>
      <Image
        src={srcUrl}
        alt="car"
        width={500}
        height={250}
        className="object-contain w-full"
      />
    </div>
  );
};

export default CarImage;
