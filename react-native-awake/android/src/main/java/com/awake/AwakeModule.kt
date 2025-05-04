package com.awake

import android.app.Activity
import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Promise
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = AwakeModule.NAME)
class AwakeModule(private val reactContext: ReactApplicationContext) :
  NativeAwakeSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun awakeOn(promise: Promise) {
    val activity = currentActivity
    if (activity != null) {
      try {
        activity.runOnUiThread {
          activity.window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        }
        promise.resolve(true)
      } catch (e: Exception) {
        promise.reject("ERROR", "Could not enable screen wake lock: ${e.message}")
      }
    } else {
      promise.reject("ERROR", "No activity available")
    }
  }

  override fun awakeOff(promise: Promise) {
    val activity = currentActivity
    if (activity != null) {
      try {
        activity.runOnUiThread {
          activity.window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        }
        promise.resolve(true)
      } catch (e: Exception) {
        promise.reject("ERROR", "Could not disable screen wake lock: ${e.message}")
      }
    } else {
      promise.reject("ERROR", "No activity available")
    }
  }

  override fun isAwake(promise: Promise) {
    val activity = currentActivity
    if (activity != null) {
      try {
        val flags = activity.window.attributes.flags
        val isAwake = (flags and WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON) != 0
        promise.resolve(isAwake)
      } catch (e: Exception) {
        promise.reject("ERROR", "Could not determine wake lock state: ${e.message}")
      }
    } else {
      promise.reject("ERROR", "No activity available")
    }
  }

  companion object {
    const val NAME = "AwakeModule"
  }
}
