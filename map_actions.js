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
                    console.log(current_location_graphic); 
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
            console.log(distance_in_m); 
            support_functions.MoveLocationPoint(); 
        }
    ); 
}