Include library in your html page:
```
<script src="http://code.google.com/apis/gears/gears_init.js" type="text/javascript"></script>
<script src="geo.js" type="text/javascript" ></script>
```

Check if the phone is supported and get the coordinates
```
//determine if the handset has client side geo location capabilities
if(geo_position_js.init()){
   geo_position_js.getCurrentPosition(success_callback,error_callback);
}
else{
   alert("Functionality not available");
}
```

The callback parameters are _aligned_ to the [W3 Geolocation API Specification](http://dev.w3.org/geo/api/spec-source.html). The success\_callback parameter provides at least:
```
{coords:{latitude:theLatitude,longitude:theLongitude},timestamp:whenTheLocationWasRetrieved}
```
The error\_call callback parameter provides at least:
```
{message:AMessageDescribingTheError,code:theErrorCode}
```

Both callback parameters can contain more information if the acutal platform provides more.

### Opening Map Clients ###

To open a map with latitude and longitude use:
```
geo_position_js.showMap(latitude,longitude)
```
On Blackberry this open blackberry maps since google maps is not natively supported. For all other operating systems it simply opens a google maps URL that triggers the native maps client on iOS and android OS. Windows Mobile 7 currently has no mechnanism to launch the native Bing Maps ([details](http://stackoverflow.com/questions/4598189/url-conventions-for-maps-on-windows-phone-7))

### Sample URLs ###

  * [Very simple page that provides a status alert box ](http://www.merkwelt.com/people/stan/geo_js/sample.html)
  * [Show the users location in an embedded google map(v3), requires advanced browsers ](http://www.merkwelt.com/people/stan/geo_js/sample_with_map.html)
  * [Simulates a moving user in an embedded google map(v3), requires advanced browsers ](http://www.merkwelt.com/people/stan/geo_js/sample_with_map_and_simulated_user.html)