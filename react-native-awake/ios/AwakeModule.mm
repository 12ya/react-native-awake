#import "AwakeModule.h"
#import <UIKit/UIKit.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTUtils.h>
#import <ReactCommon/turbomodule/core/interface.h>
#endif

@implementation AwakeModule
RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)awakeOn:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
#else
RCT_EXPORT_METHOD(awakeOn:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
#endif
{
  @try {
    [UIApplication sharedApplication].idleTimerDisabled = YES;
    resolve(@(YES));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)awakeOff:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
#else
RCT_EXPORT_METHOD(awakeOff:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
#endif
{
  @try {
    [UIApplication sharedApplication].idleTimerDisabled = NO;
    resolve(@(YES));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)isAwake:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
#else
RCT_EXPORT_METHOD(isAwake:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
#endif
{
  @try {
    BOOL isAwake = [UIApplication sharedApplication].idleTimerDisabled;
    resolve(@(isAwake));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeAwakeModuleSpecJSI>(params);
}
#endif

@end
