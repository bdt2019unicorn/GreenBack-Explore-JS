export var Learn = Vue.component
(
    "LearnComponent", 
    {
        props: ["tree", "current_tab", "db_top_key", "db_key_title", "tree"], 
        template:
        `
            <Information :data="tree[db_top_key+current_tab.toLowerCase()]">
            </Information>

        `
    }
); 