export var Li = Vue.extends
(
    {
        props: ["value"], 
        template: "<li>@{{value}}</li>"
    }
); 