function TrackMyLocation(button)
{
    var ClosePopUpAndLetUserGo = function()
    {
        var close_button = $("div.esri-popup__main-container.esri-widget.esri-popup--is-collapsible header div.esri-popup__header-buttons div.esri-popup__button[title='Close']"); 
        try 
        {
            close_button[0].click(); 
            alert("Your challenge is started. You can start going to the tree now");
        }
        catch(error)
        {
            console.log(error.message); 
        }
    }

    var tree = JSON.parse($(button).attr("data-tree")); 
    ClosePopUpAndLetUserGo(); 
    window.location_widget.graphic.geometry = null; 
    window.track_widget.on 
    (
        "track",
        function()
        {
            const max_distance_to_destination = 50; 
            var DistanceTowardDestination =function()
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
                        longitude: window.track_widget.graphic.geometry.longitude, 
                        latitude: window.track_widget.graphic.geometry.latitude
                    }
                }; 
                return 1000* Distance(points_object); 
            }
            var distance_in_m = DistanceTowardDestination(); 
            if(distance_in_m<=max_distance_to_destination)
            {
                window.track_widget.stop(); 
                window.location_widget.locate(); 
                alert("Congratuations! You have reached the tree. You can start collecting seeds now");
                window.seed_collection.tree = tree.tree_types; 
                window.seed_collection_controller.show = true;  
            }
        }
    ); 
    window.track_widget.start();
}



function ChangeComponent(button) 
{
    window.seed_collection.current_component = button.getAttribute("data-current_component"); 
    window.seed_collection.db_top_key = button.getAttribute("data-db_top_key"); 
    window.seed_collection.show = true; 
}

function ShowHideSubIcon()
{
    var display =
    {
        "none": "block",
        "block": "none"
    }
    var current_status = $("#seed_collection_sub_icon").css("display"); 
    $("#seed_collection_sub_icon").css("display",display[current_status]); 
}