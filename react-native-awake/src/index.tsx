import { useEffect } from 'react';
import { NativeModules } from 'react-native';

// Direct access to the native module
const { AwakeModule } = NativeModules;

console.log('Available Native Modules:', Object.keys(NativeModules));
console.log('AwakeModule:', AwakeModule);

// Simple error checking for module availability
if (!AwakeModule) {
  console.error('AwakeModule not found in NativeModules!');
}

/**
 * React Native Awake library
 * Prevents the device screen from going to sleep
 */
export const useAwake = (): void => {
  useEffect(() => {
    if (!AwakeModule) {
      console.error('AwakeModule not available');
      return;
    }

    AwakeModule.awakeOn();

    // Cleanup function
    return () => {
      if (!AwakeModule) return;
      AwakeModule.awakeOff();
    };
  }, []);
};

/**
 * Manually enable keeping the screen awake
 */
export const keepAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.awakeOn !== 'function') {
    console.error('AwakeModule.awakeOn not available');
    return false;
  }
  return AwakeModule.awakeOn();
};

/**
 * Manually disable keeping the screen awake
 */
export const releaseKeepAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.awakeOff !== 'function') {
    console.error('AwakeModule.awakeOff not available');
    return false;
  }
  return AwakeModule.awakeOff();
};

/**
 * Check if screen is currently being kept awake
 */
export const isAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.isAwake !== 'function') {
    console.error('AwakeModule.isAwake not available');
    return false;
  }
  return AwakeModule.isAwake();
};

// Default export for backwards compatibility
export default {
  useAwake,
  keepAwake,
  releaseKeepAwake,
  isAwake,
};
