export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="d-flex justify-content-between align-items-start">

                    <i class="fas fa-lightbulb flex-grow-1"></i>
                    <br class="flex-grow-1">
                    <div class="bg-secondary rounded flex-grow-3">
                        <p class="text-white">
                            {{value}}
                        </p>
                    </div>
                    
                </div>
                <div>
                    <br>
                </div>

            </li>
        `
    }
); 