import { StyleSheet, View } from 'react-native';
import Logo from './src/components/Logo';
import Main from './src/components/Main';
export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
