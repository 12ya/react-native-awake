import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import {
  keepAwake,
  releaseKeepAwake,
  isAwake as checkAwake,
  useAwake,
} from 'react-native-awake';

export default function App() {
  const [isScreenAwake, setIsScreenAwake] = useState(false);
  useAwake();

  // Use the useAwake hook to keep screen awake during component lifetime
  // useAwake();

  // Check initial state
  // useEffect(() => {
  //   checkInitialStatus();
  // }, []);

  // const checkInitialStatus = async () => {
  //   try {
  //     const status = await checkAwake();
  //     console.log('Current awake status:', status);
  //     setIsScreenAwake(status);
  //   } catch (err) {
  //     console.error('Error checking status:', err);
  //   }
  // };

  // const enableAwake = async () => {
  //   try {
  //     await keepAwake();
  //     console.log('Screen kept awake');
  //     setIsScreenAwake(true);
  //   } catch (err) {
  //     console.error('Error enabling awake:', err);
  //   }
  // };

  // const disableAwake = async () => {
  //   try {
  //     await releaseKeepAwake();
  //     console.log('Screen can sleep now');
  //     setIsScreenAwake(false);
  //   } catch (err) {
  //     console.error('Error disabling awake:', err);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>React Native Awake</Text>
        <Text style={styles.status}>
          Screen is currently: {isScreenAwake ? 'KEPT AWAKE' : 'CAN SLEEP'}
        </Text>
        <Text style={styles.note}>
          The useAwake hook is automatically keeping your screen awake.
        </Text>

        <View style={styles.buttonContainer}>
          {/* <Button
            title="Keep Screen Awake"
            onPress={enableAwake}
            disabled={isScreenAwake}
          />

          <View style={styles.spacer} />

          <Button
            title="Allow Screen to Sleep"
            onPress={disableAwake}
            disabled={!isScreenAwake}
          /> */}
        </View>
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
    marginBottom: 20,
    color: '#333',
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  note: {
    fontSize: 14,
    marginBottom: 30,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  spacer: {
    height: 15,
  },
});
