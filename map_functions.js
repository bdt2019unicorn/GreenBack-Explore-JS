import {InnitizeMap} from "./innitialize_map.js"; 
import {AddLocationWidget} from "./add_location_widget.js"; 

InnitizeMap.then
(
    function(view_and_arcgis_class)
    {
        return new Promise 
        (
            (resolve, reject)=>
            {
                window.map_view = view_and_arcgis_class.view; 
                window.ArcGis = view_and_arcgis_class.ArcGis; 
                AddLocationWidget(window.ArcGis.Locate, window.map_view); 
                resolve(); 
            }
        ); 
    }
).then 
(
    function()
    {
        GetDataAroundLocation(); 
    }
);