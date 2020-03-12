function ArcGis()
{
    return new Promise
    (
        (resolve, reject)=>
        {
            require
            (
                ["esri/Map","esri/views/MapView", "esri/layers/GraphicsLayer", "esri/Graphic", "esri/tasks/RouteTask","esri/tasks/support/RouteParameters","esri/tasks/support/FeatureSet","esri/geometry/Point", "esri/widgets/Locate","esri/widgets/Track", "esri/widgets/Directions"], 
                function(Map, MapView,GraphicsLayer, Graphic, RouteTask,RouteParameters,FeatureSet, Point, Locate, Track, Directions) 
                {
                    resolve
                    (
                        {
                            Map: Map, 
                            MapView: MapView,
                            GraphicsLayer: GraphicsLayer, 
                            Graphic: Graphic, 
                            RouteTask: RouteTask,
                            RouteParameters: RouteParameters,
                            FeatureSet: FeatureSet, 
                            Point: Point,
                            Locate: Locate,
                            Track: Track,
                            Directions: Directions
                        }
                    );
                }
            );
        }
    ); 
}

export var ArcGisClass = ArcGis(); 

