import { Text, View, StyleSheet } from 'react-native';
import { useAwake } from 'react-native-awake';

export default function App() {
  useAwake();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Awake</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
