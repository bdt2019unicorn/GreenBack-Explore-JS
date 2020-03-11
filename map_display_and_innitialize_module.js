import {InnitizeMap} from "./Map Module/innitialize_map.js"; 
import {AddLocationWidget} from "./Map Module/add_location_widget.js"; 

InnitizeMap.then(DetectCurrentLocation).then 
(
    function(point)
    {
        window.map_view.center = point;
        var location_widget = AddLocationWidget(window.ArcGis.Locate, window.map_view); 
        return location_widget.locate().then(()=>{console.log("ha ha ha ha ha");}); 
        // return new Promise 
        // (
        //     (resolve, reject)=>
        //     {
        //         GetDataAroundLocation();
        //         FindDirectionToPoint(); 
        //         resolve(); 
        //     }
        // );
    }
); 