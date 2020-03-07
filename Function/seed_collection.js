import {Li} from "./SeedCollection/LearnComponent/list_item_component.js"; 
import {Information} from "./SeedCollection/LearnComponent/information_component.js"; 
import {Learn} from "./SeedCollection/learn_component.js"; 


var seed_collection = new Vue 
(
    {
        el: "#seed_collection", 
        data: 
        {
            menu: ["Collect","Store"], 
            current_tab: "Collect", 
            db_top_key: "", 
            db_key_title: 
            {
                "": "Seed Collection", 
                "tips_": "Tips"
            },
            current_component: "LearnComponent", 
            tree: {}
        }, 
        methods: 
        {
            //get rid of this at the end
            GiveMeAFakeTree: function()
            {
                this.tree = 
                {
                    name: "Tree 2", 
                    type: "Kauri", 
                    store: 
                    `
                        Do a
                        Do b
                        Do c
                    `,
                    collect: 
                    `
                        collect 1
                        collect 2
                        collect 3
                    `, 
                    tips_store: 
                    `
                        tips store 1
                        tips store 2 
                        tips store 3
                        tips store 4
                    `,
                    tips_collect: 
                    `
                        tips collect 1
                        tips collect 2
                        tips collect 3
                        tips collect 4
                    `
                }
            }    
        }
    }
); 

window.seed_collection = seed_collection; 