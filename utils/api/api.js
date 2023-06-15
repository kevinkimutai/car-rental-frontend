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
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const GETIMAGEAPI = (make, model, year, fuelType, paint, angle) => {
  const url = `https://cdn.imagin.studio/getImage?customer=${process.env.NEXT_PUBLIC_IMAGIN_API_KEY}&make=${make}&modelFamily=${model}&modelYear=${year}&paintDescription=${paint}&powerTrain=${fuelType}&angle=${angle}`;
  return url;
};

const paintDescriptions = [
  "brilliant-yellow-metallic",
  "brilliant-red-metallic",
  "brilliant-blue-metallic",
  "brilliant-green-metallic",
  "brilliant-orange-metallic",
  "brilliant-purple-metallic",
  "brilliant-silver-metallic",
  "brilliant-bronze-metallic",
  "brilliant-white-metallic",
  "brilliant-pink-metallic",
];

export const getRandomPaintDescription = () => {
  const randomIndex = Math.floor(Math.random() * paintDescriptions.length);
  return paintDescriptions[randomIndex];
};
