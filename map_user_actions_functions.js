function TrackMyLocation(button)
{
    var support_functions = 
    {
        ClosePopUpAndLetUserGo()
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
        }, 
        CurrentLocationGraphic(uid)
        {
            for(var graphic of window.map_view.graphics.items)
            {
                if((graphic.uid!=uid)&&(graphic.geometry.type=="point"))
                {
                    return graphic; 
                }
                return undefined; 
            }
        }
    }






    var tree = $(button).attr("data-tree"); 
    tree = JSON.parse(tree); 
    // var current_location_graphic = CurrentLocationGraphic(tree.uid); 
    // var track_my_location = navigator.geolocation.watchPosition
    // (
    //     function(location)
    //     {
    //         const max_distance_to_destination = 50; 
    //         var support_functions =
    //         {
    //             DistanceTowardDestination()
    //             {
    //                 let points_object = 
    //                 {
    //                     destination: 
    //                     {
    //                         longitude: tree.longitude, 
    //                         latitude: tree.latitude
    //                     }, 
    //                     current_location: 
    //                     {
    //                         longitude: location.coords.longitude, 
    //                         latitude: location.coords.latitude
    //                     }
    //                 }; 
    //                 return 1000* Distance(points_object); 
    //             }, 
    //             MoveLocationPoint()
    //             {
    //                 let location_point = new ArcGis.Point(location.coords.longitude, location.coords.latitude); 
    //                 if(current_location_graphic==undefined)
    //                 {
    //                     current_location_graphic = CreateGraphicCurrentLocation(location_point); 
    //                     window.map_view.graphics.add(current_location_graphic); 
    //                 }
    //                 current_location_graphic.geometry = location_point; 
    //             }
    //         }
    //         var distance_in_m = support_functions.DistanceTowardDestination(); 
    //         support_functions.MoveLocationPoint(); 
    //         if(distance_in_m<=max_distance_to_destination)
    //         {
    //             navigator.geolocation.clearWatch(track_my_location);
    //             alert("I am here"); 
    //         }
    //     }
    // ); 


    support_functions.ClosePopUpAndLetUserGo(); 
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