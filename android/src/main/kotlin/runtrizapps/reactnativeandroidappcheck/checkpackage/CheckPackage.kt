package runtrizapps.reactnativeandroidappcheck.checkpackage

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.module.annotations.ReactModule
import android.widget.Toast
import com.facebook.react.bridge.ReactMethod

@ReactModule(name = CheckPackage.reactClass)
class CheckPackage(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

  companion object {
    const val reactClass = "RNAACheckPackage"
  }

  override fun getName(): String {
    return reactClass
  }

  @ReactMethod
  fun show(message: String) {
    Toast.makeText(reactApplicationContext, message, Toast.LENGTH_LONG).show()
  }
}
