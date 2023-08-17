//@ts-nocheck

import { create } from "zustand";
import { devtools } from "zustand/middleware";

type PersonalDetails = {
  phone_number: string;
  dl_number: string;
  id_number: string;
};

type DeliveryDate = {
  startDate: string;
  endDate: string;
};

type CarOrderDetails = {
  year?: string;
  make?: string;
  model?: string;
  class?: string;
  fuel_type?: string;
  price?: number;
  paint?: string;
  image?: string;
};

type State = {
  personalDetails?: PersonalDetails;
  deliveryDate?: DeliveryDate;
  carOrderDetails: CarOrderDetails[];
};

type Action = {
  updatePersonalDetails: (personalDetails: State["personalDetails"]) => void;
  updateDeliveryDetails: (deliveryDetails: State["deliveryDate"]) => void;
  updateCarOrders: (carOrderDetails: CarOrderDetails) => void; // Fix the type here
};

const useCarStore = create<State & Action>(
  devtools((set) => ({
    // personalDetails: {
    //   phone_number: "",
    //   dl_number: "",
    //   id_number: "",
    // },
    // deliveryDate: { startDate: "", endDate: "" },
    carOrderDetails: [],

    updatePersonalDetails: (personalDetails) =>
      set(() => ({ personalDetails })),
    updateDeliveryDetails: (deliveryDate) => set(() => ({ deliveryDate })),
    updateCarOrders: (cars: CarOrderDetails) =>
      set((store) => ({
        carOrderDetails: [...store.carOrderDetails, cars],
      })),
  }))
);

export default useCarStore;
