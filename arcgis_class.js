function ArcGis()
{
    return new Promise
    (
        (resolve, reject)=>
        {
            require
            (
                ["esri/Map","esri/views/MapView","esri/Graphic", "esri/tasks/RouteTask","esri/tasks/support/RouteParameters","esri/tasks/support/FeatureSet","esri/geometry/Point", "esri/widgets/Locate", "esri/widgets/Directions"], 
                function(Map, MapView, Graphic, RouteTask,RouteParameters,FeatureSet, Point, Locate, Directions) 
                {
                    resolve
                    (
                        {
                            Map: Map, 
                            MapView: MapView,
                            Graphic: Graphic, 
                            RouteTask: RouteTask,
                            RouteParameters: RouteParameters,
                            FeatureSet: FeatureSet, 
                            Point: Point,
                            Locate: Locate,
                            Directions: Directions
                        }
                    );
                }
            );
        }
    ); 
}

export var ArcGisClass = ArcGis(); 

