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
            var points = {}; 
            points.current_location.longitude = ChangeToRadian(points_object.current_location.longitude); 
            points.current_location.latitude = ChangeToRadian(points_object.current_location.latitude); 

            points.destination.longitude = ChangeToRadian(points_object.destination.longitude); 
            points.destination.latitude = ChangeToRadian(points_object.destination.latitude); 

            return points; 
        }, 
        CalculateDistance(points)
        {
            var sin2halfangles = function(angle1,angle2)
            {
                return Math.pow
                (
                    Math.sin
                    (
                        (points.current_location.latitude - points.destination.latitude)/2
                    ),
                    2
                ) 
            }
            const earth_radius = 6378; 
            return 2 * earth_radius * 
                Math.asin
                (
                    sin2halfangles(points.current_location.latitude,points.destination.latitude)
                    + 
                    Math.cos(points.current_location.latitude) * Math.cos(points.destination.latitude) * sin2halfangles(points.destination.longitude, points.current_location.longitude)
                ); 
        }
    }; 
    Object.freeze(points_object); 
    var points = support_functions.ConvertObject(points_object); 
    console.log("points object changed"); 
    console.log(points_object); 
    console.log("---------------------------");
    console.log("//////////////////////");
    console.log(points); 
    console.log("+++++++++++++++++++++++++"); 
    return 0; 
    return support_functions.CalculateDistance(points_object); 
}
