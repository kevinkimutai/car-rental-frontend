import React from "react";
import useCarStore from "@/store/store";
import { URL } from "../constants/index";

// personalDetails: PersonalDetails;
// deliveryDate: DeliveryDate;
// carOrderDetails;

const TestHireBtn = () => {
  const personalDetails = useCarStore((state) => state.personalDetails);
  const deliveryDate = useCarStore((state) => state.deliveryDate);
  const carOrderDetails = useCarStore((state) => state.carOrderDetails);

  const submitTestFetch = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers here if needed
      },
      body: JSON.stringify({ personalDetails, deliveryDate, carOrderDetails }),
    };

    let url = `${URL}/hires`;
    const data = await fetch(url, requestOptions);
  };

  return (
    <button
      className="bg-red-600 text-white p-2 mt-8"
      onClick={submitTestFetch}
    >
      TestHireBtn
    </button>
  );
};

export default TestHireBtn;
