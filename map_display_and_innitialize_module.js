import {InnitizeMap} from "./Map Module/innitialize_map.js"; 
import {AddLocationWidget} from "./Map Module/add_location_widget.js"; 

InnitizeMap.then(DetectCurrentLocation).then 
(
    function(point)
    {
        window.map_view.center = point;
        var location_widget = AddLocationWidget(window.ArcGis.Locate, window.map_view); 
        return new Promise 
        (
            (resolve, reject)=>
            {
                GetDataAroundLocation();
                FindDirectionToPoint(); 
                resolve(location_widget); 
            }
        ).then 
        (
            function(location_widget)
            {
                window.map_view.when 
                (
                    function()
                    {
                        location_widget.locate(); 
                    }
                ); 
                // console.log(location_widget); 
                // console.log("I should be working now"); 
                // return location_widget.locate(); 
                // window.location_widget = location_widget; 
            }
        );
    }
); 