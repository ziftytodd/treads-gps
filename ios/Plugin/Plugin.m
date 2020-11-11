//
//  Plugin.m
//  Plugin
//
//  Created by Todd Miller on 11/10/20.
//  Copyright © 2020 Max Lynch. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(TreadsGps, "TreadsGps",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(keepWebviewAwake, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(checkStatus, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(requestIgnoreBatteryOptimization, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(requestIgnoreDataSaver, CAPPluginReturnPromise);
)

