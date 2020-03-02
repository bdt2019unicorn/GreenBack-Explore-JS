var symbol = 
{
    type: "simple-marker",
    color: "red",  
    size: "8px"
}

function PopUpTemplate()
{
    var content_node = document.createElement("div"); 
    content_node.innerHTML = 
    `
        <p>Here is my content</p>
    `; 
    return {
        title: "This is my point", 
        content: content_node
    };
}


function PutPointInTheMap(map_point, popupTemplate)
{
    var point = new window.ArcGis.Graphic 
    (
        {
            geometry: map_point, 
            symbol: symbol, 
            popupTemplate: popupTemplate
        }
    ); 
    window.map_view.graphics.add(point); 
}

function GetDataAroundLocation(location, condition=undefined)
{
    var support_functions = 
    {
        GetAllPoints()
        {
            var url = "/Explore/all_trees";
            var points = AjaxRequest("get",url); 
            var points_object = JSON.parse(points); 
            console.log(points_object); 
            // return points;  
        }
    }



    var variation = 0.01; 
    var new_location = new window.ArcGis.Point(location.longitude-variation, location.latitude-variation); 
    var popupTemplate = PopUpTemplate(); 
    PutPointInTheMap(new_location, popupTemplate); 
    support_functions.GetAllPoints(); 
}
