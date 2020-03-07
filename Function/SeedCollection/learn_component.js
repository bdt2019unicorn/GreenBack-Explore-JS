export var Learn = Vue.component
(
    "LearnComponent", 
    {
        props: ["tree", "current_tab", "db_top_key", "db_key_title", "menu"], 
        template:
        `
            <template>
                <div class="row">
                    <button 
                        v-for="item in menu" 
                        :class='ButtonClass(item)'
                        @click='current_tab=item'
                    >
                        {{item}}
                    </button>
                </div>

                <Information :data="tree[db_top_key+current_tab.toLowerCase()]">
                </Information>
            </template>

        `, 
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
        },
    }
); 