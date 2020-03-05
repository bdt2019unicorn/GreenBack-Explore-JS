import {ArcGisClass} from "./arcgis_class.js"; 

export var InnitizeMap = ArcGisClass.then
(
    function(ArcGis)
    {
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
                        zoom: 13
                    }
                );
                window.map_view = view; 
                window.ArcGis = ArcGis; 
                resolve(); 
            }
        ); 
    }
); 

