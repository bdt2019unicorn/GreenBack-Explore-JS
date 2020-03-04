function TrackMyLocation(button)
{
    var CurrentLocationGraphic = function(uid)
    {
        for(var graphic of window.map_view.graphics.items)
        {
            console.log(graphic); 
            if((graphic.uid!=uid)&&(graphic.geometry.type=="point"))
            {
                return graphic; 
            }
            return undefined; 
        }
    }
    var tree = $(button).attr("data-tree"); 
    tree = JSON.parse(tree); 
    console.log(tree); 
    var current_location_graphic = CurrentLocationGraphic(tree.uid); 
    console.log(current_location_graphic); 
    return; 
    var track_my_location = navigator.geolocation.watchPosition
    (
        function(location)
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
            console.log(points_object); 
            var distance_in_m = 1000* Distance(points_object); 
            console.log(distance_in_m); 
        }
    ); 
}