import {ButtonController} from "./SeedCollectionController/button_controller.js"; 

window.seed_collection_controller = new Vue 
(
    {
        el: "#seed_collection_controller", 
        data: 
        {
            show: false, 
            controller: ["information_icon","seed_collection_icon","paper_icon"], 
            seed_collection_icon: 
            {
                "add_seeds_icon": 
                {
                    "db_top_key": "term_condition",
                    "current_component": "TermConditionComponent"
                },
                "colection_storage_icon": 
                {
                    "db_top_key": "",
                    "current_component": "LearnComponent"
                },
                "tips_icon": 
                {
                    "db_top_key": "tips_",
                    "current_component": "LearnComponent"
                }
            }
        },
    }
); 