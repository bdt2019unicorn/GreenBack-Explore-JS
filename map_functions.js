import {InnitizeMap} from "./innitialize_map.js"; 
import {AddLocationWidget} from "./add_location_widget.js"; 
import * as PutTreeOnMap from "./put_trees_in_map.js"; 


InnitizeMap.then
(
    function(view_and_arcgis_class)
    {
        var view = view_and_arcgis_class.view; 
        var arcgis = view_and_arcgis_class.ArcGis; 
        AddLocationWidget(arcgis.Locate, view); 
        PutTreeOnMap.GetDataAroundLocation
        (
            {
                longitude: view.center.longitude, 
                latitude: view.center.latitude
            }, 
            view, 
            arcgis
        ); 
        window.map_view = view; 
        window.ArcGis = arcgis; 
        window.PutTreeOnMap = PutTreeOnMap; 
    }
); 