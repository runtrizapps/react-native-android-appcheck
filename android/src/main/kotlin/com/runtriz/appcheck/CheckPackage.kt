package com.runtriz.appcheck

import android.content.pm.PackageManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = CheckPackage.reactClass)
class CheckPackage(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

  companion object {
    const val reactClass = "RNAACheckPackage"
  }

  override fun getName(): String {
    return reactClass
  }

  @ReactMethod
  fun checkPackage(packageName: String, promise: Promise): Boolean {
    val pm = reactApplicationContext.packageManager
    var installed = false
    try {
      pm.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES)
      installed = true
    } catch (e: PackageManager.NameNotFoundException) {
      installed = false
    }
    promise.resolve(installed)
    return installed
  }
}
