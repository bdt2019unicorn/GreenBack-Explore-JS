import * as learn_component from "./SeedCollection/learn_component.js"; 
import * as term_condition_component from "./SeedCollection/term_condition_component.js"; 
import * as take_picture_component from "./SeedCollection/take_picture_component.js"; 
import * as congratuations_component from "./SeedCollection/congratuations_component.js"; 

window.term_condition_store_track = term_condition_component.CreateStoreTrack();

window.seed_collection = new Vue 
(
    {
        el: "#seed_collection", 
        data: 
        {
            menu: ["Collect","Store"], 
            db_top_key: "", 
            db_key_title: 
            {
                "": "Collection and Storage", 
                "tips_": "Tips", 
                "term_condition": "",
                "congratuations": "CONGRATUATIONS!"
            },
            current_component: "LearnComponent", 
            tree: {}
        },
        watch: 
        {
            tree()
            {
                try 
                {
                    this.db_key_title["term_condition"] = "Warning before collecting " + this.tree.type + " cones!"; 
                }
                catch
                {
                    this.db_key_title["term_condition"] = ""; 
                }
            }    
        },
    }
); 