function GetDirectionPointsAndWork()
{
    var random_variation = Math.random()*Math.random(); 
    var points = 
    [
        new window.ArcGis.Point(174.816448-random_variation, -36.902955+random_variation),
        new window.ArcGis.Point(174.7633+ random_variation, -36.8485+random_variation)
    ]; 
    var graphics = []; 
    points.forEach(element => {
        var graphic = new window.ArcGis.Graphic 
        (
            {
                geometry: element, 
                symbol: 
                {
                    type: "simple-marker",
                    color: "blue",  
                    size: "8px"
                }
            }
        ); 
        graphics.push(graphic); 
    });
    GetDirection(graphics, window.map_view); 
}


function GetDirection(points, view)
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
                    view.graphics.add(direction.route); 
                }
            ); 
        }
    ); 
}



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
        }
    }

    window.dectect_current_location. 
    then
    (
        function(current_location_point)
        {
            var current_location_graphic = support_functions.CreateGraphic(current_location_point); 
            console.log(current_location_graphic); 
            console.log(current_location_point); 
            var uid = button.getAttribute("data-uid"); 
            console.log(uid); 
            var point_location_graphic = support_functions.FindCurrentGraphic(uid); 
            console.log(point_location_graphic); 
        }
    ); 
}