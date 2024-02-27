import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export function PrimaryButton({ children: title, onPress }) {
  const pressHandler = () => {
    onPress();
  };

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: '#640233' }}
    >
      <View onPress={onPress} style={styles.container}>
        <Text style={styles.butonText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  butonText: {
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
});
