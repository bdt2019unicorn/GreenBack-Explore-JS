onmessage = function(event)
{
    var post_data = event.data; 
    post_data = ConvertObject(post_data); 
    var distance = Distance(post_data); 
    this.postMessage(distance); 
}


function Distance(points_object)
{
    return 3963.0 * 
        Math.acos
        (
            Math.sin(points_object.current_location.latitude) * Math.sin(points_object.destination.latitude) + Math.cos(points_object.current_location.latitude) * Math.cos(points_object.destination.latitude) * Math.cos(points_object.destination.longtitude - points_object.current_location.longtitude)
        ); 
}

function ConvertObject(points_object)
{
    points_object.current_location.longtitude = ChangeToRadian(points_object.current_location.longtitude); 
    points_object.current_location.latitude = ChangeToRadian(points_object.current_location.latitude); 

    points_object.destination.longtitude = ChangeToRadian(points_object.destination.longtitude); 
    points_object.destination.latitude = ChangeToRadian(points_object.destination.latitude); 

    return points_object; 
}

function ChangeToRadian(number)
{
    return Math.PI * number / 180; 
}