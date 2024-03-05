import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';

import { Card, PrimaryButton, Title } from '../components';
import { COLORS } from '../constants';

export function StartGameScreen({ onPickPageNumber }) {
  const [numberValue, setNumberValue] = useState('');

  const handleNumberChange = (enteredText) => {
    setNumberValue(enteredText);
  };
  const confirmNumber = () => {
    const chosenNuber = parseInt(numberValue);
    if (isNaN(chosenNuber) || chosenNuber <= 0) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetNumber,
        },
      ]);
    }
    setNumberValue('');
    onPickPageNumber(chosenNuber);
  };

  const resetNumber = () => {
    setNumberValue('');
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>
          Insert a number between 1 and 99
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={numberValue}
          onChangeText={handleNumberChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 100,
    alignItems: 'center',
    gap: 50,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
    color: COLORS.primary,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: COLORS.primary,
    textAlign: 'center',
  },
});
