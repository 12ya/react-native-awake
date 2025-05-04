import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  awakeOn(): Promise<boolean>;
  awakeOff(): Promise<boolean>;
  isAwake(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AwakeModule');
