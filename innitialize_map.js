import {ArcGisClass} from "./arcgis_class.js"; 

export var InnitizeMap = ArcGisClass.then
(
    function(ArcGis)
    {
        var dectect_current_location = new Promise
        (
            (resolve,reject)=>
            {
                var current_location_functions = 
                {
                    SuccessGettingLocation(location)
                    {
                        resolve(new ArcGis.Point(location.coords.longitude,location.coords.latitude)); 
                    }, 
                    ErrorGettingLocation(error=null)
                    {
                        resolve(new ArcGis.Point(174.7633, -36.8485)); 
                    }
                }
                if(navigator.geolocation)
                {
                    navigator.geolocation.getCurrentPosition(current_location_functions.SuccessGettingLocation, current_location_functions.ErrorGettingLocation); 
                }
                else 
                {
                    current_location_functions.ErrorGettingLocation(); 
                }

            }
        ); 

        var create_view = function(center)
        {
            window.dectect_current_location = dectect_current_location; 
            return new Promise
            (
                (resolve,reject)=>
                {
                    var view = new ArcGis.MapView
                    (
                        {
                            container: "viewDiv",
                            map: new ArcGis.Map
                            (
                                {
                                    basemap: "streets-navigation-vector"
                                }
                            ),
                            center: center,
                            zoom: 13
                        }
                    );
    
                    resolve
                    (
                        {
                            view: view, 
                            ArcGis: ArcGis
                        }
                    ); 
                }
            ); 
        }
        return dectect_current_location.then(create_view); 
    }
); 

