import {InnitizeMap} from "./innitialize_map.js"; 
import {AddLocationWidget} from "./add_location_widget.js"; 

InnitizeMap.then
(
    function(view_and_arcgis_class)
    {
        AddLocationWidget(arcgis.Locate, view); 
        window.map_view = view_and_arcgis_class.view; 
        window.ArcGis = view_and_arcgis_class.ArcGis; 
    }
); 