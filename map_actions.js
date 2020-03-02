function Directions(button)
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
        FindCurrentGraphic(uid)
        {
            uid = Number(uid); 
            for (let index = 0; index < window.map_view.graphics.length; index++) 
            {
                if(window.map_view.graphics.items[index].uid==uid)
                {
                    return window.map_view.graphics.items[index]; 
                }
            }
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

    window.dectect_current_location. 
    then
    (
        function(current_location_point)
        {
            return new Promise
            (
                (resolve,reject)=>
                {
                    var current_location_graphic = support_functions.CreateGraphic(current_location_point); 
                    var uid = button.getAttribute("data-uid"); 
                    var point_location_graphic = support_functions.FindCurrentGraphic(uid); 
                    var points = [current_location_graphic, point_location_graphic]; 
                    support_functions.RemoveIrrelevantPoints(points); 
                    support_functions.GetDirection(points); 
                    button.setAttribute("hidden", false); 
                    console.log(point_location_graphic); 
                    resolve(point_location_graphic); 
                }
            ); 
        }
    ); 
}

function TrackMyLocation()
{
    var track_my_location = navigator.geolocation.watchPosition
    (
        function(location)
        {
            console.log(location); 
        }
    ); 
}