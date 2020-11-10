package com.zifty.plugins.gps;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import static android.net.ConnectivityManager.*;

@NativePlugin
public class TreadsGps extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod
    public void checkStatus(PluginCall call) {
        // { dataSaver: string, ignoreBatteryOptimization: string }
        String batt = "unknown";
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            PowerManager pm = (PowerManager) getContext().getSystemService(Context.POWER_SERVICE);
            if (pm.isIgnoringBatteryOptimizations(getContext().getPackageName())) {
                batt = "true";
            } else {
                batt = "false";
            }
        }

        String data = "unknown";
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            ConnectivityManager connMgr = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
            switch (connMgr.getRestrictBackgroundStatus()) {
                case RESTRICT_BACKGROUND_STATUS_ENABLED:
                    // The app is whitelisted. Wherever possible,
                    // the app should use less data in the foreground and background.
                    data = "false";
                    break;

                case RESTRICT_BACKGROUND_STATUS_WHITELISTED:
                    // Background data usage is blocked for this app. Wherever possible,
                    // the app should also use less data in the foreground.
                    data = "true";
                    break;

                case RESTRICT_BACKGROUND_STATUS_DISABLED:
                    // Data Saver is disabled. Since the device is connected to a
                    // metered network, the app should use less data wherever possible.
                    data = "disabled";
                    break;
            }
        }

        JSObject ret = new JSObject();
        ret.put("dataSaver", data);
        ret.put("ignoreBatteryOptimization", batt);
        call.success(ret);
    }

    @PluginMethod
    public void requestIgnoreBatteryOptimization(PluginCall call) {
        boolean success = false;
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                Intent intent = new Intent();
                intent.setAction(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.setData(Uri.parse("package:" + getContext().getPackageName()));
                getContext().startActivity(intent);

                JSObject ret = new JSObject();
                ret.put("success", true);
                call.success(ret);
            }else {
                call.error("Battery optimizations not available");
            }
        } catch (Exception e) {
            call.error("Battery optimizations failed");
        }
    }

    @PluginMethod
    public void requestIgnoreDataSaver(PluginCall call) {
        boolean success = false;
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                Intent intent = new Intent();
                ConnectivityManager connMgr = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);

                intent.setAction(Settings.ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.setData(Uri.parse("package:" + getContext().getPackageName()));
                getContext().startActivity(intent);

                JSObject ret = new JSObject();
                ret.put("success", true);
                call.success(ret);
            }else {
                call.error("Data Saver not available");
            }
        } catch (Exception e) {
            call.error("Data Saver failed");
        }
    }
}
