export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <div class="row">
                <div class="col-2">
                    <i class="fas fa-lightbulb"></i>
                <div>
                <div class="col bg-secondary">
                    {{value}}
                <div>
            </div>
        `
    }
); 