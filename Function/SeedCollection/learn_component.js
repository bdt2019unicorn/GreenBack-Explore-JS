import {ListItem} from "./LearnComponent/list_item_component.js"; 
import {Information} from "./LearnComponent/information_component.js"; 


var Learn = Vue.component
(
    "LearnComponent", 
    {
        props: ["tree","current_tab", "db_top_key", "db_key_title", "menu"], 
        template:
        `
            <div class="card-body">
                <div class="row">
                    <button 
                        v-for="item in menu" 
                        :class='ButtonClass(item)'
                        @click='current_tab=item'
                    >
                        {{item}}
                    </button>
                </div>
                <div class="row">
                    <Information :data="tree[db_top_key+current_tab.toLowerCase()]">
                    </Information>
                </div>
            </div>

        `, 
        methods: 
        {
            ButtonClass(item)
            {
                let btn_class = ["btn","btn-light", "col"]; 
                if(this.current_tab==item)
                {
                    btn_class.push("active"); 
                }
                console.log(item);
                console.log(btn_class); 
                return btn_class; 
            },
        },
    }
); 


export{ListItem, Information, Learn}; 