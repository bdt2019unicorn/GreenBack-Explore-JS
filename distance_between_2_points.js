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
            console.log(points_object);
            const earth_radius = 6378; 
            console.log
            (
                Math.acos
                (
                    Math.sin(points_object.current_location.latitude) * Math.sin(points_object.destination.latitude) + Math.cos(points_object.current_location.latitude) * Math.cos(points_object.destination.latitude) * Math.cos(points_object.destination.longitude - points_object.current_location.longitude)
                )
            ); 
            return earth_radius * 
                Math.acos
                (
                    Math.sin(points_object.current_location.latitude) * Math.sin(points_object.destination.latitude) + Math.cos(points_object.current_location.latitude) * Math.cos(points_object.destination.latitude) * Math.cos(points_object.destination.longitude - points_object.current_location.longitude)
                ); 
        }
    }; 
    points_object = support_functions.ConvertObject(points_object); 
    return support_functions.CalculateDistance(points_object); 
}
