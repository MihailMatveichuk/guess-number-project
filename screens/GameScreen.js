import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Title, PrimaryButton, LogContainer } from '../components';
import { COLORS } from '../constants';
import { generateRandomNumber } from '../lib';
import { getNextGuessNumber } from '../lib/getNextGuessNumber';

export function GameScreen({ userNumber, isGameOver, setCountRound, count }) {
  let minNumber = 1;
  let maxNumber = 100;

  const low = 'lower';
  const high = 'higher';

  const possibleNumber = useMemo(
    () => generateRandomNumber(minNumber, maxNumber, userNumber),
    [userNumber]
  );

  const [currentGuess, setCurrentGuess] = useState(possibleNumber);
  const [userChoices, setUserChoices] = useState([currentGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      isGameOver(userChoices.length);
    }
  }, [currentGuess, userNumber, isGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  const handleNewMoreGuess = () => {
    setCountRound((currentRound) => currentRound + 1);
    setCurrentGuess(
      getNextGuessNumber.bind(null, high, currentGuess, userNumber)
    );
    setUserChoices((prev) => [currentGuess, ...prev]);
  };
  const handleNewLessGuess = () => {
    setCountRound((currentRound) => currentRound + 1);
    setCurrentGuess(
      getNextGuessNumber.bind(null, low, currentGuess, userNumber)
    );
    setUserChoices((prev) => [currentGuess, ...prev]);
  };

  const listLength = userChoices.length;

  return (
    <View style={styles.pageContainer}>
      <Title>Opponent's Guess</Title>
      <Text style={styles.number}>{currentGuess}</Text>
      <View style={styles.mainContent}>
        <Text style={styles.question}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={handleNewMoreGuess}>
            <Icon name="arrowup" size={30} color={COLORS.primary} />
          </PrimaryButton>
          <PrimaryButton onPress={handleNewLessGuess}>
            <Icon name="arrowdown" size={30} color={COLORS.primary} />
          </PrimaryButton>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={userChoices}
            contentContainerStyle={[
              { justifyContent: 'center', alignItems: 'center' },
            ]}
            renderItem={(itemData) => (
              <LogContainer
                item={itemData.item}
                index={listLength - itemData.index}
              />
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginTop: '50%',
  },
  number: {
    fontSize: 40,
    fontFamily: 'open-sans-bold',
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
  listContainer: {
    flex: 1,
    marginBottom: '50%',
  },
});
