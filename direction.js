function Directions(destination_graphic)
{
    var support_functions = 
    {
        DrawDirectionOnMap(current_location_point)
        {
            var support_functions = 
            {
                CreateGraphic(point)
                {
                    return new window.ArcGis.Graphic 
                    (
                        {
                            geometry: point, 
                            symbol: 
                            {
                                type: "simple-marker",
                                color: "blue",  
                                size: "8px"
                            }
                        }
                    ); 
                }, 
                RemoveIrrelevantPoints(points)
                {
                    window.map_view.graphics.removeAll();
                    points.forEach
                    (
                        point => 
                        {
                            window.map_view.graphics.add(point); 
                        }
                    );
                }, 
                GetDirection(points)
                {
                    var routeTask = new window.ArcGis.RouteTask
                    (
                        {
                            url: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World/solve"
                        }
                    );
        
                    var routeParams = new window.ArcGis.RouteParameters
                    (
                        {
                            stops: new window.ArcGis.FeatureSet
                            (
                                {
                                    features: points
                                }
                            ),
                            returnDirections: true
                        }
                    );
        
                    routeTask.solve(routeParams)
                    .then
                    (
                        function(data)
                        {
                            data.routeResults.forEach
                            (
                                function(direction)
                                {
                                    direction.route.symbol = 
                                    {
                                        type: "simple-line",
                                        color: "blue",
                                        width: 3
                                    }
                                    window.map_view.graphics.add(direction.route); 
                                }
                            ); 
                        }
                    ); 
                }
            }
            return new Promise
            (
                (resolve,reject)=>
                {
                    console.log("this runs after the other promise resolve, after finding the point destination"); 
                    var current_location_graphic = support_functions.CreateGraphic(current_location_point); 
                    var points = [current_location_graphic, destination_graphic]; 
                    support_functions.RemoveIrrelevantPoints(points); 
                    support_functions.GetDirection(points); 
                    resolve(); 
                }
            ); 
        }
    }
    window.dectect_current_location.then(support_functions.DrawDirectionOnMap); 
}


function FindDirectionToPoint()
{
    window.map_view.on 
    (
        "click", 
        function(event)
        {
            var support_functions = 
            {
                PointDestination(response)
                {
                    return new Promise 
                    (
                        (resolve, reject)=>
                        {
                            console.log(response); 
                            console.log("this run after the hit test"); 
                            for (let index = 0; index < response.results.length; index++) 
                            {
                                let graphic = response.results[index].graphic; 
                                if(window.map_view.graphics.includes(graphic))
                                {
                                    resolve(graphic); 
                                }
                            }
                            reject(); 
                        }
                    ); 
                }
            }
            var screen_point = event.screenPoint; 
            window.map_view.hitTest(screen_point).then(PointDestination).then(Directions); 
        }
    ); 
}