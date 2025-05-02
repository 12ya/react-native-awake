import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  awakeOn(): void;
  awakeOff(): void;
}
export default TurboModuleRegistry.getEnforcing<Spec>('KeepAwakeModule');
