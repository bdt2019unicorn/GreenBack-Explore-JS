function Directions(destination_graphic)
{
    var support_functions = 
    {
        PutRelevantPoints(current_location_point)
        {
            return new Promise
            (
                (resolve,reject)=>
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
                            resolve(points); 
                        }
                    }
                    var current_location_graphic = support_functions.CreateGraphic(current_location_point); 
                    var points = [current_location_graphic, destination_graphic]; 
                    support_functions.RemoveIrrelevantPoints(points); 
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
            ).catch(function(error){console.log(error);}); 
        }
    }

    window.dectect_current_location.then(support_functions.PutRelevantPoints).then(support_functions.GetDirection); 
}


function FindDirectionToPoint()
{
    window.map_view.on 
    (
        "click", 
        function(event)
        {
            let PointDestination = function(response)
            {
                return new Promise 
                (
                    (resolve, reject)=>
                    {
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
            window.map_view.hitTest(event.screenPoint).then(PointDestination).then(Directions); 
        }
    ); 
}