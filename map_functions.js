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
        var button = document.createElement("button"); 
        button.innerText = "Put a graphic layer on and test for clicking"; 
        button.addEventListener
        (
            "click", 
            function(event)
            {
                console.log("We are now adding grphic layer"); 
                var graphic = new window.ArcGis.Graphic 
                (
                    {
                        geometry: new window.ArcGis.Point(174.7633, -36.8485), 
                        symbol: 
                        {
                            type: "simple-marker",
                            color: "blue",  
                            size: "18px"
                        }
                    }
                ); 
                var graphic_layer = new window.ArcGis.GraphicsLayer
                (
                    {
                        graphics: [graphic]
                    }
                ); 
                window.map_view.map.add(graphic_layer); 
            }
        ); 
        window.map_view.ui.add(button,"bottom-right"); 
    }
);