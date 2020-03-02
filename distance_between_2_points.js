function Distance(points_object)
{
    var support_functions = 
    {
        ConvertObject(points_object)
        {
            var ChangeToRadian = function(number)
            {
                return Math.PI * number / 180; 
            }
            var points = 
            {
                current_location: 
                {
                    longitude: 0,
                    latitude: 0
                }, 
                destination: 
                {
                    longitude: 0,
                    latitude: 0
                }
            }; 
            points.current_location.longitude = ChangeToRadian(points_object.current_location.longitude); 
            points.current_location.latitude = ChangeToRadian(points_object.current_location.latitude); 

            points.destination.longitude = ChangeToRadian(points_object.destination.longitude); 
            points.destination.latitude = ChangeToRadian(points_object.destination.latitude); 

            return points; 
        }, 
        CalculateDistance(points)
        {
            var Haversine = function(angle1,angle2)
            {
                return Math.pow
                (
                    Math.sin
                    (
                        (angle2 - angle1)/2
                    ),
                    2
                );
            }
            const earth_radius = 6378; 
            return 2 * earth_radius *
                Math.asin
                (
                    Math.sqrt
                    (
                        Haversine(points.destination.latitude,points.current_location.latitude)
                        + 
                        Math.cos(points.current_location.latitude) * Math.cos(points.destination.latitude) * Haversine(points.destination.longitude, points.current_location.longitude)
                    )
                ); 
        }
    }; 
    var points = support_functions.ConvertObject(points_object); 
    return support_functions.CalculateDistance(points); 
}
