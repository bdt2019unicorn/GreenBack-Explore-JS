function Directions(button)
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
                    resolve(point_location_graphic); 
                }
            ); 
        }, 
        ChangeButtonAttributes(point_location_graphic)
        {
            button.setAttribute("hidden",true); 
            var btn = document.createElement("button"); 
            btn.addEventListener("click", TrackMyLocation(point_location_graphic)); 
            console.log(btn); 
            btn.click(); 
        }
    }


    window.dectect_current_location.then(support_functions.DrawDirectionOnMap).then(support_functions.ChangeButtonAttributes); 
}

function TrackMyLocation(point_location_graphic)
{
    console.log("it goes here now"); 
    var track_my_location = navigator.geolocation.watchPosition
    (
        function(location)
        {
            var points_object = 
            {
                destination: 
                {
                    longitude: point_location_graphic.geometry.longitude, 
                    latitude: point_location_graphic.geometry.latitude
                }, 
                current_location: 
                {
                    longitude: location.coords.longitude, 
                    latitude: location.coords.latitude
                }
            }; 
            var distance_in_m = 1000* Distance(points_object); 
            console.log(distance_in_m); 
        }
    ); 
}