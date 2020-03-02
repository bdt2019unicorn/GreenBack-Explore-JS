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
            points_object.current_location.longitude = ChangeToRadian(points_object.current_location.longitude); 
            points_object.current_location.latitude = ChangeToRadian(points_object.current_location.latitude); 

            points_object.destination.longitude = ChangeToRadian(points_object.destination.longitude); 
            points_object.destination.latitude = ChangeToRadian(points_object.destination.latitude); 

            return points_object; 
        }, 
        CalculateDistance(points_object)
        {
            var sin2halfangles = function(angle1,angle2)
            {
                return Math.pow
                (
                    Math.sin
                    (
                        (points_object.current_location.latitude - points_object.destination.latitude)/2
                    ),
                    2
                ) 
            }
            const earth_radius = 6378; 
            return 2 * earth_radius * 
                Math.asin
                (
                    sin2halfangles(points_object.current_location.latitude,points_object.destination.latitude)
                    + 
                    Math.cos(points_object.current_location.latitude) * Math.cos(points_object.destination.latitude) * sin2halfangles(points_object.destination.longitude, points_object.current_location.longitude)
                ); 
        }
    }; 
    points_object = support_functions.ConvertObject(points_object); 
    return support_functions.CalculateDistance(points_object); 
}
