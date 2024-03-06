import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants';

export function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    width: width < 380 ? '90%' : '80%',
    padding: width < 380 ? 20 : 30,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
