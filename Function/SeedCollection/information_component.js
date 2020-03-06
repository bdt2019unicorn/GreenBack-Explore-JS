// import {LI} from "./list_item_component.js"; 

export var Information = Vue.component
(
    "Information", 
    {
        props: ["data"], 
        computed: 
        {
            ItemArray: function()
            {
                return this.data!=undefined? this.data.trim().split("\n"):[]; 
            }
        },
        template:
        `
            <ul>
                <ListItem
                    v-for="item in ItemArray"
                    :value="item"
                >
                </ListItem>
            </ul>
        `
    }
); 