export const calculateDaysBetweenDates = (startDate: any, endDate: any) => {
  // Parse the input strings into Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the time difference in milliseconds
  //@ts-ignore
  const timeDifference = end - start;

  // Convert milliseconds to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
