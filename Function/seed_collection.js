// import {Li} from "./SeedCollection/list_item_component.js"; 
import {Information} from "./SeedCollection/information_component.js"; 


var seed_collection = new Vue 
(
    {
        el: "#seed_collection", 
        data: 
        {
            title: "Seed Collection", 
            menu: ["Collect","Store"], 
            current_tab: "Collect", 
            tree: {}
        }, 
        component:
        {
            "Information": Information, 
            // "ListItem": Li
        }, 
        methods: 
        {
            ButtonClass(item)
            {
                let btn_class = ["btn", "btn-light", "col-" + Math.floor(12/this.menu.length)]; 
                if(this.current_tab==item)
                {
                    btn_class.push("active"); 
                }
                return btn_class; 
            },


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
                    `
                }
            }    
        },
    }
); 