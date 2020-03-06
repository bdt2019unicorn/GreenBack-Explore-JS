export var Learn = Vue.component
(
    "LearnComponent", 
    {
        template:
        `
            <Information :data="tree[db_top_key+current_tab.toLowerCase()]">
            </Information>

        `
    }
); 