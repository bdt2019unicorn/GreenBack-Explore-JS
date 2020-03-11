import {InnitizeMap} from "./Map Module/innitialize_map.js"; 
import {AddLocationWidget} from "./Map Module/add_location_widget.js"; 

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
                FindDirectionToPoint(); 
                window.location_widget.locate(); 
                resolve(); 
            }
        ); 
    }
); 