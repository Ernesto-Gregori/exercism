//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGASECONDS = Math.pow(10, 9);
  const toMilliseconds = (seconds) => { return seconds * 1000; };
  return new Date(date.getTime() + toMilliseconds(GIGASECONDS));
};
