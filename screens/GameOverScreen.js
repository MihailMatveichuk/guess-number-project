import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';
import { PrimaryButton, Title } from '../components';
import { COLORS } from '../constants';

export function GameOverScreen({ userNumber, countRound, onStartNewGame }) {
  const { height, width } = useWindowDimensions();

  const demansionImageBackground = width < 380 || height < 400 ? 150 : 300;
  const marginTop = height < 400 ? 10 : 100;

  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View
        style={[
          styles.backgroundImage,
          {
            height: demansionImageBackground,
            width: demansionImageBackground,
            borderRadius: demansionImageBackground / 2,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        You phone needed <Text style={styles.highlightText}>{countRound}</Text>{' '}
        rounds to guess number{' '}
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <View style={{ marginTop }}>
        <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.primary,
    marginHorizontal: 10,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    fontSize: 25,
  },
});
