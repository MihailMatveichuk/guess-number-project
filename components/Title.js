import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
