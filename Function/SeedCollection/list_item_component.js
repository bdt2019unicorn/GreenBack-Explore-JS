export var Li = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: "<li>@{{value}}</li>"
    }
); 