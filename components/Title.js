import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import { COLORS } from '../constants';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Platform.select({ android: COLORS.primary, ios: 'white' }),
    borderColor: 'white',
    backgroundColor: Platform.select({
      android: COLORS.secondary,
      ios: 'transparent',
    }),
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
    paddingVertical: 10,
    alignSelf: 'center',
    maxWidth: '80%',
  },
});
