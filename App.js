import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text preset="h1">Hello World</Text>
      <StatusBar backgroundColor={colors.green} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
