export const convertMinutesToHours = (minutes) => {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  let result = ""
  if(hours !== 0) result = hours + "h";

  if (remainingMinutes !== 0) {
    result += remainingMinutes + "min";
  }

  return result;
};
