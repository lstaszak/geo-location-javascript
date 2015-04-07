# Supported OS Platforms & Widget Frameworks #

  * [iOS](#iOS.md)
  * [Google Gears (Android, Windows Mobile)](#Google_Gears.md)
  * [BlackBerry OS  6](#Device_OS_6.md)
  * [BlackBerry Device Software 4.1 and greater](#Device_Software_4.1.md)
  * [Nokia Web Runtime Toolkit](#Nokia_Web_Runtime_Toolkit.md)
  * [Bondi Widgets v1.0](#Bondi_Widgets_1.0.md)
  * [webOS Application Platform](#webOS_Application_Platform.md)
  * [Torch Mobile Iris Browser](#Torch_Mobile_Iris_Browser.md)
  * [Mozilla Geode](#Mozilla_Geode.md)


**_If you think we are missing a platform please leave a comment at the bottom of this page. THANK YOU!_**


## iOS ##
Since the  release of the OS 3.0 [Geographic location classes](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariWebContent/GettingGeographicalLocations/GettingGeographicalLocations.html) are available in javascript. As with native applications the user is asked for permission per session. **Note:** This doesn't work in the simulator that ships with the SDK.

## Google Gears ##
Gears is a javascript framework available for Android, Windows Mobile (IE Mobile, Opera Mobile), Mac (Firefox, Safari), Linux and Windows . One of its cores is the [Geolocation API](http://code.google.com/apis/gears/api_geolocation.html). On the mobile phone it asks the user once for permission per site and user, so not every session as in the iPhone OS 3.0. To set the location in the Simulator that ships with the Android SDK please you need to [telnet into the SDK and issue a geo statement](http://developer.android.com/guide/topics/location/index.html), much easier then it sounds. It works _most_ of the time, sometimes you need to try multiple telnet sessions to make for android to register the location.

## BlackBerry Device OS 6 ##
Devices with BlackBerry OS 6 ship with a webkit browser that support fully supports the W3C geo specification.

## BlackBerry Device Software 4.1 ##
Since the release of the Device Software 4.1 (i.e. Bold,8800,8820,...) BlackBerry supports [javascript access to the GPS location](http://na.blackberry.com/eng/deliverables/8861/blackberry_location_568404_11.jsp). Permission is asked once per session. In order to use it on your phone make sure that in javascript location support is enabled (Browser->Options->General Properties). To set the location in the Simulator set the GPS location in the Simulate pull down menu.

## Nokia Web Runtime Toolkit ##
The [Nokia WRT ](http://www.forum.nokia.com/Technology_Topics/Web_Technologies/Web_Runtime/) is supported by the framework. Permission is asked once per session. You only need to include geo.js in your main html page. **Note**: The Nokia WRT does not provide a timestamp with the geo location. **Note**: It only works in applications, not in a regular browser session.

## webOS Application Platform ##
The [webOS](http://en.wikipedia.org/wiki/WebOS) application platform is now supported by the framework. You need to put the geo.js in your application folder and include it in the main index.html file. All [w3c position opyions](http://dev.w3.org/geo/api/spec-source.html#position-options) are supported. **Note**: It only works in applications, not in a regular browser session.

## Bondi Widgets 1.0 ##
The [Bondi Widgets framework](http://bondi.omtp.org/default.aspx) which implements the W3C geolocation API is supported.

## Torch Mobile Iris Browser ##
The [Iris Browser](http://www.irisbrowser.com/) which implements the W3C geolocation API is supported.

## Mozilla Geode ##
The [Mozilla Geode Plugin](http://labs.mozilla.com/2008/10/introducing-geode/) which implements the W3C geolocation API is supported. Only a small change for handling the incoming position had to be injected. Also if you hit "Nothing" in the browser permission dialog you won't get an error message callback, that is a general Geode issue.