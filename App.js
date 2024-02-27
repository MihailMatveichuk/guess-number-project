import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScreen } from './screens';

export default function App() {
  return (
    <LinearGradient
      colors={['#ddb52f', '#4e0329']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.2, y: 1.2 }}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
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
