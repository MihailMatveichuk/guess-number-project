import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

import { COLORS } from '../constants';

export function PrimaryButton({ children: title, onPress }) {
  const pressHandler = () => {
    onPress();
  };

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: COLORS.secondaryDarkPressed, radius: 28 }}
    >
      <View onPress={onPress} style={styles.container}>
        <Text style={styles.butonText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    overflow: 'hidden',
  },
  butonText: {
    color: 'white',
  },
  pressed: {
    opacity: 0.7,
  },
});
