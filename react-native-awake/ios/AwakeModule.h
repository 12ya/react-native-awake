#ifndef AwakeModule_h
#define AwakeModule_h

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTTurboModule.h>
#define RCT_BRIDGE_MODULE_INTERFACE RCTTurboModule
#else
#import <React/RCTBridgeModule.h>
#define RCT_BRIDGE_MODULE_INTERFACE RCTBridgeModule
#endif

@interface AwakeModule : NSObject <RCT_BRIDGE_MODULE_INTERFACE>
@end

#endif
