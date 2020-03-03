function TrackMyLocation(destination)
{
    console.log(destination);
    return; 
    var track_my_location = navigator.geolocation.watchPosition
    (
        function(location)
        {
            var points_object = 
            {
                destination: 
                {
                    // longitude: point_location_graphic.geometry.longitude, 
                    // latitude: point_location_graphic.geometry.latitude
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