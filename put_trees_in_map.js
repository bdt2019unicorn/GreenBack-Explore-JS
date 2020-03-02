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


function PutPointInTheMap(Graphic, map_point, view, popupTemplate)
{
    var point = new Graphic 
    (
        {
            geometry: map_point, 
            symbol: symbol, 
            popupTemplate: popupTemplate
        }
    ); 
    view.graphics.add(point); 
}

function GetDataAroundLocation(location, view, ArcGis, condition=undefined)
{
    var support_functions = 
    {
        GetAllPoints()
        {
            
        }
    }



    var variation = 0.01; 
    var new_location = new ArcGis.Point(location.longitude-variation, location.latitude-variation); 
    var popupTemplate = PopUpTemplate(); 
    PutPointInTheMap(ArcGis.Graphic, new_location, view, popupTemplate); 
}

export{PopUpTemplate, PutPointInTheMap, GetDataAroundLocation}

