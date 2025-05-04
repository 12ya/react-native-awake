import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { useAwake } from 'react-native-awake';

export default function App() {
  useAwake();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>React Native Awake</Text>
        <Text style={styles.note}>
          The useAwake hook is automatically keeping your screen awake.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  note: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
