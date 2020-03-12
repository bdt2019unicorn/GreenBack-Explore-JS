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
                </div>
                <div class="col-10 bg-secondary text-white rounded-circle">
                    {{value}}
                </div>
                <div class="col-12">
                    <br>
                </div>
            </div>
        `
    }
); 