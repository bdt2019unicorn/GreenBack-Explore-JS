import {InnitizeMap} from "./innitialize_map.js"; 
import {AddLocationWidget} from "./add_location_widget.js"; 

InnitizeMap.then(DetectCurrentLocation).then 
(
    function(point)
    {
        window.map_view.center = point;
        return new Promise 
        (
            (resolve, reject)=>
            {
                AddLocationWidget(window.ArcGis.Locate, window.map_view); 
                GetDataAroundLocation();
                resolve(); 
            }
        ). 
        then(FindDirectionToPoint); 
    }
); 