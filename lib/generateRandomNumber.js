export function generateRandomNumber(minNumber, maxNumber, exclude) {
  const randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  if (exclude === randomNumber) {
    return generateRandomNumber(minNumber, maxNumber, exclude);
  } else {
    return randomNumber;
  }
}
