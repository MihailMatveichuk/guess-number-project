import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components';

export function StartGameScreen() {
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
    Alert.alert('Chosen number:', ` ${chosenNuber}`, [
      {
        text: 'Okay',
        style: 'destructive',
        onPress: resetNumber,
      },
    ]);
    setNumberValue('');
  };

  const resetNumber = () => {
    setNumberValue('');
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
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
});
