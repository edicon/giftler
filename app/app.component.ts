import {Component} from "@angular/core";

import application = require("application");

@Component({
  selector: "gf-main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {

}
/*
application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

application.on(application.suspendEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.resumeEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.exitEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.lowMemoryEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.uncaughtErrorEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});

application.start({ moduleName: "main-page" });
*/