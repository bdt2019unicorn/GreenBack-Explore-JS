export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="d-flex justify-content-between">
                    <span class="bg-secondary">{{value}}</span>
                    <span><i class="fas fa-lightbulb"></i></span>
                </div>
                <div>
                    <br>
                </div>
                
            </li>
        `
    }
); 