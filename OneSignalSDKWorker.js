importScripts('/sw.js');
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js');
var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
      appId: "85adb3aa-ffa1-42a5-bad3-22dac283cca3",
      autoRegister: false,
      notifyButton: {
        enable: true
      }
    }]);