import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';

export function LogContainer({ item, index }) {
  return (
    <View style={styles.logNumberContainer}>
      <Text style={styles.logNumber}>{`${index}: `}</Text>
      <Text style={styles.logNumber}>Guess Opportunity: {item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logNumberContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    borderWidth: 1,
    borderRadius: 50,
  },
  logNumber: {
    color: COLORS.secondary,
    fontSize: 15,
    fontFamily: 'open-sans',
  },
});
