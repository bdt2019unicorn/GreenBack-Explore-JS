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
                alert("I am here"); 
            }
        }
    ); 
    window.track_widget.start();
}



function ChangeComponent(button) 
{
    window.seed_collection.current_component = button.getAttribute("data-current_component"); 
    window.seed_collection.db_top_key = button.getAttribute("data-db_top_key"); 
}



//see if you can get rid of this at the end
function ChangeTipsAndCollection(button)
{
    var attributes = ["","tips_"]; 
    var db_top_key = button.getAttribute("data-db_top_key"); 
    window.seed_collection.db_top_key = db_top_key; 
    let new_index = (attributes.indexOf(db_top_key) + 1)%2; 
    button.setAttribute("data-db_top_key",attributes[new_index]); 
}

function GiveMeAFakeTree()
{
    console.log("I am giving you a fake tree now"); 
    try 
    {
        window.seed_collection.tree = 
        {
            name: "Tree 2", 
            type: "Kauri", 
            store: 
            `
                Store cones in a Warm and dry area
                Wait until cones crack open and reveal the winged seed
                Remove winged seeds from cone segments
                Place in clean, sterile, dry glass jar for storage
            `,
            collect: 
            `
                Look for the green, round shaped cones around its branches
                Detach cone from the healthy tree if in reach
                Place in a large paper bag or container
                With a pen or pencil, write the date and name of tree
            `, 
            tips_store: 
            `
                Cones placed in a dry room will naturally disintegrate within 5-10 days.
                To make your seeds shelf-life longer, keep them in an airtight container in the refrigerator.
                To seperate the seeds from opened cones, sieve and hand pick them from cone debris and scales.
            `,
            tips_collect: 
            `
                A good  sign for collecting is when scales first start to appear on the tree floor.
                If cones are too high, place a raised sheet or tray below the canopy to catch the seeds and cones.
                If you leave a tray or sheet, don’t forget to come back and collect it in a couple days!
            `
        };
    }
    catch(exception)
    {
        console.log(exception); 
    }
}


function PutUiInMap()
{

}


function RemoveUiMap()
{

}

function DisplayTheDiv()
{
    $("#controller").css("display","block"); 
}