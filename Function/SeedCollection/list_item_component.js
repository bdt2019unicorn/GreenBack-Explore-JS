const Vue = require("vue").default; 
export var Li = Vue.extends
(
    {
        props: ["value"], 
        template: "<li>@{{value}}</li>"
    }
); 