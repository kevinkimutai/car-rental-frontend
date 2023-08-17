type CarOrderDetails = {
  year?: string;
  make?: string;
  model?: string;
  class?: string;
  fuel_type?: string;
  price?: number;
  paint?: string;
};

export const calculateTotalPrice = (carArray: CarOrderDetails[]) => {
  let totalPrice = 0;

  for (const car of carArray) {
    totalPrice += car.price!;
  }

  return totalPrice;
};
