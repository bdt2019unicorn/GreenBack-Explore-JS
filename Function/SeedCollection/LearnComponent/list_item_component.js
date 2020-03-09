export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: "<li>{{value}}</li>"
    }
); 