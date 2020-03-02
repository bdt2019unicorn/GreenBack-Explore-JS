var symbol = 
{
    type: "simple-marker",
    color: "red",  
    size: "8px"
}

function PopUpTemplate(tree)
{
    console.log(tree); 
    var content_node = document.createElement("div"); 
    content_node.innerHTML = 
    `
        <p><b>Type: </b>`+ tree.tree_types.name +`</p>
        <p><b>Tips: </b><p>`+ tree.tree_types.tips +`</p></p>
        <p><b>How to collect seed: </b><p>`+ tree.tree_types.collect +`</p></p>
        <p><b>How to store seed: </b><p>`+ tree.tree_types.store +`</p></p>
        <p><button type="button" class="btn btn-primary btn-circle btn-lg" onclick="Directions(this)"><i class="fas fa-directions"></i></button>
    `; 
    return {
        title: tree.name, 
        content: content_node
    };
}


function PutPointInTheMap(tree)
{
    // var popup_template = PopUpTemplate(tree); 
    var point = new window.ArcGis.Graphic 
    (
        {
            geometry: new window.ArcGis.Point(tree.longitude, tree.latitude), 
            symbol: symbol
            // popupTemplate: popup_template
        }
    ); 
    tree.uid = point.uid; 
    point.popupTemplate = PopUpTemplate(tree); 
    window.map_view.graphics.add(point); 
    // console.log(point); 
    // console.log(point.uid); 
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
