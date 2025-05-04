import { useEffect } from 'react';
import { NativeModules } from 'react-native';

const { AwakeModule } = NativeModules;

if (!AwakeModule) {
  console.error('AwakeModule not found in NativeModules!');
}

export const useAwake = (): void => {
  useEffect(() => {
    if (!AwakeModule) {
      console.error('AwakeModule not available');
      return;
    }

    AwakeModule.awakeOn();

    return () => {
      AwakeModule.awakeOff();
    };
  }, []);
};

export const keepAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.awakeOn !== 'function') {
    console.error('AwakeModule.awakeOn not available');
    return false;
  }
  return AwakeModule.awakeOn();
};

export const releaseKeepAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.awakeOff !== 'function') {
    console.error('AwakeModule.awakeOff not available');
    return false;
  }
  return AwakeModule.awakeOff();
};

export const isAwake = async (): Promise<boolean> => {
  if (!AwakeModule || typeof AwakeModule.isAwake !== 'function') {
    console.error('AwakeModule.isAwake not available');
    return false;
  }
  return AwakeModule.isAwake();
};

export default {
  useAwake,
  keepAwake,
  releaseKeepAwake,
  isAwake,
};
