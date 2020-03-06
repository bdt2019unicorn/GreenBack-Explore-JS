export var Li = Vue.extend
(
    {
        props: ["value"], 
        template: "<li>@{{value}}</li>"
    }
); 