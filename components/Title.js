import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: COLORS.primary,
    borderColor: 'white',
    backgroundColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 5,
    width: '90%',
    textAlign: 'center',
    paddingVertical: 10,
    alignSelf: 'center',
  },
});
