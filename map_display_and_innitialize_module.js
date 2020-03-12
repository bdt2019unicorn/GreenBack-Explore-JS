import {InnitizeMap} from "./Map Module/innitialize_map.js"; 
import {AddLocationWidget} from "./Map Module/add_location_widget.js"; 
import {AddTrackWidget} from "./Map Module/add_track_widget.js"; 


InnitizeMap.then 
(
    function()
    {
        window.location_widget = AddLocationWidget(window.ArcGis.Locate, window.map_view); 
        window.track_widget = AddTrackWidget(window.ArcGis.Track,window.map_view); 
        window.map_view.when 
        (
            function()
            {
                window.location_widget.locate(); 
                GetDataAroundLocation();
                FindDirectionToPoint(); 
            }
        );
    }
); 