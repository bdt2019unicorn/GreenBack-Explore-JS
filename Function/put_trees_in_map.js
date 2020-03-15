var symbol = 
{
    type: "picture-marker",
    url: "https://plantme.co.nz/img/Web2App/Explore/tree-icon.png"
}

function PopUpTemplate(tree)
{
    var support_functions = 
    {
        TreeInformation(title, information)
        {
            var paragraph = document.createElement("p"); 
            let paragraph_title = document.createElement("b"); 
            paragraph_title.innerText = title + ":"; 
            let paragraph_information = document.createElement("p"); 
            paragraph_information.innerText = information; 
            paragraph.append(paragraph_title); 
            paragraph.append(paragraph_information); 
            return paragraph; 
        }, 
        GoToThisTreeButton(tree)
        {
            var paragraph = document.createElement("p");
            let button = document.createElement("button"); 
            button.setAttribute("onclick","TrackMyLocation(this)"); 
            button.setAttribute("data-tree",JSON.stringify(tree)); 
            button.classList.add("btn","btn-circle","btn-lg"); 
            button.title = "Go to this tree"; 
            let button_icon = document.createElement("i"); 
            button_icon.classList.add("fas", "fa-walking");
            button.append(button_icon); 
            paragraph.append(button); 
            return paragraph; 
        }
    }
    var content_node = document.createElement("div"); 
    content_node.append(support_functions.TreeInformation("Type",tree.tree_types.name)); 
    content_node.append(support_functions.GoToThisTreeButton(tree)); 

    return {
        title: tree.name, 
        content: content_node
    };
}


function PutPointInTheMap(tree)
{
    var point = new window.ArcGis.Graphic 
    (
        {
            geometry: new window.ArcGis.Point(tree.longitude, tree.latitude), 
            symbol: symbol
        }
    ); 
    tree.uid = point.uid; 
    point.popupTemplate = PopUpTemplate(tree); 
    window.map_view.graphics.add(point); 
}

function GetDataAroundLocation(condition=undefined)
{
    var support_functions = 
    {
        GetAllPoints()
        {
            var url = "/Explore/all_trees";
            var points = AjaxRequest("get",url); 
            return JSON.parse(points); 
        }
    }
    var all_trees = support_functions.GetAllPoints(); 
    all_trees.forEach
    (
        tree => 
        {
            PutPointInTheMap(tree); 
        }
    );
}
