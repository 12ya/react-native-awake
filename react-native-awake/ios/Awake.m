#import "Awake.h"
#import <React/RCTUtils.h>

@implementation Awake

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(awakeOn:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    [UIApplication sharedApplication].idleTimerDisabled = YES;
    resolve(@(YES));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

RCT_EXPORT_METHOD(awakeOff:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    [UIApplication sharedApplication].idleTimerDisabled = NO;
    resolve(@(YES));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

RCT_EXPORT_METHOD(isAwake:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    BOOL isAwake = [UIApplication sharedApplication].idleTimerDisabled;
    resolve(@(isAwake));
  } @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}

@end
