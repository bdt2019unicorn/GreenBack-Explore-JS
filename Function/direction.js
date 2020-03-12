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

        GraphicalLocation(location)
        {
            window.location_widget.goToLocationEnabled = true; 
            var graphic = new window.ArcGis.Graphic 
            (
                {
                    geometry: new window.ArcGis.Point(location.coords.longitude,location.coords.latitude), 
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

        RemoveIrrelevantGraphics()
        {
            var irrelevant_graphics = []; 
            window.map_view.graphics.items.forEach 
            (
                graphic=>
                {
                    if(graphic.geometry.type!="point")
                    {
                        irrelevant_graphics.push(graphic); 
                    }
                }
            ); 
            window.map_view.removeMany(irrelevant_graphics); 
        }, 
        GetDirection(current_location_graphic)
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
                            features: [current_location_graphic,destination_graphic]
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

    support_functions.RemoveIrrelevantGraphics(); 

    support_functions.DetectCurrentLocation().then(support_functions.GraphicalLocation).then(support_functions.GetDirection); 

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