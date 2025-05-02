import UIKit

@objc(KeepAwakeModule)
class KeepAwakeModule: NSObject {
  @objc func awakeOn() {
    DispatchQueue.main.async {
      UIApplication.shared.isIdleTimerDisabled = true
    }
  }
  @objc func awakeOff() {
    DispatchQueue.main.async {
      UIApplication.shared.isIdleTimerDisabled = false
    }
  }
  @objc static func requiresMainQueueSetup() -> Bool { true }
}
