export const GETCARDATAAPI = async (make, model, fuelType, limit, year) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}${
    model === "" ? "" : `&model=${model}`
  }&fuel_type=${fuelType}&limit=${limit}&year=${year}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {}
};
export const GETEVCARDATA = async (fuelType) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?fuel_type=${fuelType}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {}
};

export const GETIMAGEAPI = (
  make,
  model,
  year,
  fuelType,
  paint,
  angle,
  zoom
) => {
  const url = `https://cdn.imagin.studio/getImage?customer=${
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY
  }&make=${make}&modelFamily=${model}&modelYear=${year}&paintDescription=${paint}&powerTrain=${fuelType}&angle=${angle}&zoomType=${
    zoom ? "fullscreen" : "default"
  }`;
  return url;
};

const paintDescriptions = [
  "lightning yellow",
  "brilliant-red-metallic",
  "blue electra",
  "radiant green",
  "metallic clay orange",
  "brilliant-purple-metallic",
  "brilliant-silver-metallic",
  "brilliant-bronze-metallic",
  "python green",
  "emotional red metallic",
];

export const getRandomPaintDescription = () => {
  const randomIndex = Math.floor(Math.random() * paintDescriptions.length);
  return paintDescriptions[randomIndex];
};

export const calculateDailyRate = ( year, cc) => {
  // Arbitrary base daily rate
  const baseDailyRate = 18;


  // Arbitrary depreciation rate
  const depreciationRate = 0.05;

  // Arbitrary extra daily charge for higher CC
  const extraCCCharge = cc > 1000 ? Math.floor((cc - 1000) / 100) * 5 : 0;

  // Arbitrary extra daily charge for newer cars
  const currentYear = new Date().getFullYear();
  const yearsDifference = Math.max(0, 5 - (currentYear - year));
  const extraYearCharge = yearsDifference * 10;

  // Calculate the depreciated value of the car
  const depreciatedValue = baseDailyRate * (1 - depreciationRate) * (currentYear - year);

  // Calculate the total daily rate including extras
  const dailyRate = Math.max(depreciatedValue + extraCCCharge + extraYearCharge, 20);

  return Math.ceil(dailyRate);
}

// Example usage:
const dailyRate = calculateDailyRate("Tesla", 2020, 1500, "Model 3");
console.log(`The daily hire rate for this car is $${dailyRate}.`);
