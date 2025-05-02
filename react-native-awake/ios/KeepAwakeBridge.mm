#import <React/RCTBridgeModule.h>
// #import <React/RCTTurboModule.h>
#import <ReactCommon/RCTTurboModule.h>

@interface RCT_EXTERN_MODULE (KeepAwakeModule, NSObject)
RCT_EXTERN_METHOD(awakeOn)
RCT_EXTERN_METHOD(awakeOff)
@end
