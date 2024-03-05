import { generateRandomNumber } from './generateRandomNumber';
import { Alert } from 'react-native';

export function getNextGuessNumber(direction, chosenNumber, userNumber) {
  let minNumber = 1;
  let maxNumber = 100;
  if (
    (direction === 'lower' && chosenNumber < userNumber) ||
    (direction === 'higher' && chosenNumber > userNumber)
  ) {
    Alert.alert('Don`t lie', 'You know that this is wrong...', [
      {
        text: 'Sorry!',
        style: 'cancel',
      },
    ]);
    return chosenNumber;
  }

  if (direction === 'lower') {
    maxNumber = chosenNumber;
  } else {
    minNumber = chosenNumber + 1;
  }

  const newRandomNumber = generateRandomNumber(
    minNumber,
    maxNumber,
    chosenNumber
  );
  return newRandomNumber;
}
