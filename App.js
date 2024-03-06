import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';

import { GameOverScreen, StartGameScreen } from './screens';
import { GameScreen } from './screens';
import { useState } from 'react';
import { COLORS } from './constants';

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameOverScreen, setGameOverScreen] = useState(false);
  const [countRound, setCountRound] = useState(0);

  const [isFontsLoading] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!isFontsLoading) {
    return <AppLoading />;
  }

  const handleStartPage = (pickedNumnberOfPage) => {
    setUserNumber(() => pickedNumnberOfPage);
  };
  const handleGameOverPage = (numberOfRounds) => {
    setGameOverScreen(true);
    setCountRound(numberOfRounds);
  };

  const handleStartNewGame = () => {
    setCountRound(0);
    setGameOverScreen(false);
    setUserNumber(null);
  };

  let screen = <StartGameScreen onPickPageNumber={handleStartPage} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        isGameOver={handleGameOverPage}
        setCountRound={setCountRound}
        count={countRound}
      />
    );
  }

  if (gameOverScreen && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        countRound={countRound}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
