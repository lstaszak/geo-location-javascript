var bb_successCallback;
var bb_errorCallback;
function handleBlackBerryLocation()
{
	if (bb_successCallback && bb_errorCallback)
	{
		if(blackberry.location.latitude==0 && blackberry.location.longitude==0)
		{
			bb_errorCallback({message:"Permission denied", code:1});
		}
		else
		{
			bb_successCallback({coords: {latitude:blackberry.location.latitude,longitude:blackberry.location.longitude}});
		}
		//since blackberry.location.removeLocationUpdate();
		//is not working as described http://na.blackberry.com/eng/deliverables/8861/blackberry_location_removeLocationUpdate_568409_11.jsp
		//the callback are set to null to indicate that the job is done
		
		bb_successCallback = null;
		bb_errorCallback = null;		
	}
		 
}

var geo_position_js=function() {



	var pub = {};		
	var provider=null;

	
	pub.getCurrentPosition = function(successCallback,errorCallback,options)
	{
		
		provider.getCurrentPosition(successCallback, errorCallback,options);	
		
	}

	pub.init = function()
	{
		
		try
		{
			if (typeof(geo_position_js_simulator)!="undefined")
			{
				provider=geo_position_js_simulator;
			}		
			else if (typeof(navigator.geolocation)!="undefined")
			{
				provider=navigator.geolocation;
			}
			else if(typeof(window.google)!="undefined")
			{						
				provider=google.gears.factory.create('beta.geolocation');
											
			}
			else if(typeof(window.blackberry)!="undefined" && blackberry.location.GPSSupported)
			{

				// set to autonomous mode
				blackberry.location.setAidMode(2);
				
				//override default method implementation				
				pub.getCurrentPosition = function(successCallback,errorCallback,options)
				{
					
					//passing over callbacks as parameter didn't work consistently 
					//in the onLocationUpdate method, thats why they have to be set
					//outside
					bb_successCallback=successCallback;
					bb_errorCallback=errorCallback;
					//function needs to be a string according to
					//http://www.tonybunce.com/2008/05/08/Blackberry-Browser-Amp-GPS.aspx
					blackberry.location.onLocationUpdate("handleBlackBerryLocation()");
					blackberry.location.refreshLocation();	

				}
				provider=blackberry.location;
					
			}
		}
		catch (e){ console.log(e); }		
		
		
		return  provider!=null;
	}
	

	return pub;
}();