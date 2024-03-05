import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
