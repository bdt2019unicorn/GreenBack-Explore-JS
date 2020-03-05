function TrackMyLocation(button)
{
    var CurrentLocationGraphic = function(uid)
    {
        for(var graphic of window.map_view.graphics.items)
        {
            if((graphic.uid!=uid)&&(graphic.geometry.type=="point"))
            {
                return graphic; 
            }
            return undefined; 
        }
    }
    var tree = $(button).attr("data-tree"); 
    tree = JSON.parse(tree); 
    var current_location_graphic = CurrentLocationGraphic(tree.uid); 
    var track_my_location = navigator.geolocation.watchPosition
    (
        function(location)
        {
            const max_distance_to_destination = 50; 
            var support_functions =
            {
                DistanceTowardDestination()
                {
                    let points_object = 
                    {
                        destination: 
                        {
                            longitude: tree.longitude, 
                            latitude: tree.latitude
                        }, 
                        current_location: 
                        {
                            longitude: location.coords.longitude, 
                            latitude: location.coords.latitude
                        }
                    }; 
                    return 1000* Distance(points_object); 
                }, 
                MoveLocationPoint()
                {
                    let location_point = new ArcGis.Point(location.coords.longitude, location.coords.latitude); 
                    if(current_location_graphic==undefined)
                    {
                        current_location_graphic = CreateGraphicCurrentLocation(location_point); 
                        window.map_view.graphics.add(current_location_graphic); 
                    }
                    current_location_graphic.geometry = location_point; 
                }
            }
            var distance_in_m = support_functions.DistanceTowardDestination(); 
            support_functions.MoveLocationPoint(); 
            if(distance_in_m<=max_distance_to_destination)
            {
                navigator.geolocation.clearWatch(track_my_location);
                alert("I am here"); 
                return; 
            }
        }
    ); 
}