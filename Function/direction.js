function DetectCurrentLocation()
{
    return new Promise
    (
        (resolve,reject)=>
        {
            var current_location_functions = 
            {
                SuccessGettingLocation(location)
                {
                    resolve(new window.ArcGis.Point(location.coords.longitude,location.coords.latitude)); 
                }, 
                ErrorGettingLocation(error=null)
                {
                    resolve(new window.ArcGis.Point(174.7633, -36.8485)); 
                }
            }
            if(navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(current_location_functions.SuccessGettingLocation, current_location_functions.ErrorGettingLocation); 
            }
            else 
            {
                current_location_functions.ErrorGettingLocation(); 
            }
        }
    ); 
} 


function CreateGraphicCurrentLocation(point)
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
}

function Directions(destination_graphic)
{
    var support_functions = 
    {
        DetectCurrentLocation()
        {
            window.location_widget.goToLocationEnabled = false; 
            return window.location_widget.locate(); 
        },

        CreateGraphicCurrentLocation(location)
        {
            window.location_widget.goToLocationEnabled = true; 
            var graphic = new window.ArcGis.Graphic 
            (
                {
                    geometry: [location.coords.longitude,location.coords.latitude], 
                    symbol: 
                    {
                        type: "simple-marker",
                        color: "blue",  
                        size: "8px"
                    }
                }
            ); 
            return new Promise
            (
                (resolve,reject)=>
                {
                    resolve(graphic); 
                }
            ); 
        },

        PutRelevantGraphics(current_location_point)
        {
            return new Promise
            (
                (resolve,reject)=>
                {
                    var RemoveIrrelevantPoints = function(points)
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
                    }; 
                    var current_location_graphic = CreateGraphicCurrentLocation(current_location_point); 
                    var points = [current_location_graphic, destination_graphic]; 
                    RemoveIrrelevantPoints(points); 
                }
            );  
        }, 
        GetDirection(points)
        {
            var routeTask = new window.ArcGis.RouteTask
            (
                {
                    url: "https://utility.arcgis.com/usrsvcs/appservices/1TLoNZMLIA0xLPxN/rest/services/World/Route/NAServer/Route_World/solve"
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

    // DetectCurrentLocation().then(support_functions.PutRelevantPoints).then(support_functions.GetDirection);
    // support_functions.StartTracking();  
    // graphic.geometry
    // var current_location = support_functions.DetectCurrentLocation(); 
    // console.log(current_location);
    // current_location.then
    // (
    //     function(data)
    //     {
    //         console.log(data); 
    //     }
    // );

    support_functions.DetectCurrentLocation().then(support_functions.CreateGraphicCurrentLocation).then
    (
        function(current_location_graphic)
        {
            console.log(current_location_graphic); 
        }
    ); 

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