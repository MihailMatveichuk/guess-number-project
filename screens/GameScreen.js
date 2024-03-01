import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Title, PrimaryButton } from '../components';
import { COLORS } from '../constants';
import { generateRandomNumber } from '../lib';
import { getNextGuessNumber } from '../lib/getNextGuessNumber';

export function GameScreen({ userNumber }) {
  const minNumber = 1;
  const maxNumber = 100;

  const low = 'lower';
  const high = 'higher';

  const possibleNumber = generateRandomNumber(minNumber, maxNumber, userNumber);

  const [currentGuess, setCurrentGuess] = useState(possibleNumber);

  return (
    <View style={styles.pageContainer}>
      <Title>Opponent's Guess</Title>
      <Text style={styles.number}>{currentGuess}</Text>
      <View style={styles.mainContent}>
        <Text style={styles.question}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            onPress={() =>
              setCurrentGuess(
                getNextGuessNumber.bind(null, high, currentGuess, userNumber)
              )
            }
          >
            <Icon name="arrowup" size={30} color={COLORS.primary} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() =>
              setCurrentGuess(
                getNextGuessNumber.bind(null, low, currentGuess, userNumber)
              )
            }
          >
            <Icon name="arrowdown" size={30} color={COLORS.primary} />
          </PrimaryButton>
        </View>
        <View>
          <Text>Log Rounds</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  question: {
    fontSize: 20,
    color: COLORS.primary,
  },
  mainContent: {
    alignItems: 'center',
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
