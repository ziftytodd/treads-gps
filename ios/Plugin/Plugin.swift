import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TreadsGps)
public class TreadsGps: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }

    @objc func keepWebviewAwake(_ call: CAPPluginCall) {
      call.success([
          "success": true
      ])
    }

    @objc func checkStatus(_ call: CAPPluginCall) {
      call.success([
          "dataSaver": "unknown",
          "ignoreBatteryOptimization": "unknown"
      ])
    }

    @objc func requestIgnoreBatteryOptimization(_ call: CAPPluginCall) {
      call.success([
          "success": false
      ])
    }

    @objc func requestIgnoreDataSaver(_ call: CAPPluginCall) {
      call.success([
          "success": false
      ])
    }
}
