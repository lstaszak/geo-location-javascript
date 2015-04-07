The simulator helps in the development phase of projects. It lets you simulate a user on a certain location or a moving user without being at those places in the real world.

## Usage ##
First you need to include the simulator library
```
<script src="js/geo_position_js_simulator.js" type="text/javascript" charset="utf-8"></script>
```
then create an array whose elements are simple hashs with latitude/longitude and the duration of the stay in seconds. Example: if you have 2 those entries, the second entry gets activated as the current location after the duration of the first one has expired.
```
locations=new Array();
locations.push({ coords:{latitude:41.399856290690956,longitude:2.1961069107055664},duration:5000 });
locations.push({ coords:{latitude:41.400634242252046,longitude:2.1971797943115234},duration:5000 });
locations.push({ coords:{latitude:41.40124586762545,longitude:2.197995185852051},duration:5000 });	
```
Lastly initialize the simulator and do that before you initialize the toolkit.
```
geo_position_js_simulator.init(locations);
```
Check it out in action:
  * [Simulates a moving user in an embedded google map(v3), requires advanced browsers ](http://www.merkwelt.com/people/stan/geo_js/sample_with_map_and_simulated_user.html)