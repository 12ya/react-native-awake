import { useEffect } from 'react';
import AwakeModule from './NativeAwake';

/**
 * React Native Awake library
 * Prevents the device screen from going to sleep
 */
export const useAwake = () => {
  useEffect(() => {
    console.log('AwakeModule.awakeOn()');
    AwakeModule.awakeOn();
    return () => {
      console.log('AwakeModule.awakeOff()');
      AwakeModule.awakeOff();
    };
  }, []);
};
