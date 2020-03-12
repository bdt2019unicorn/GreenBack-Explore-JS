export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="d-flex justify-content-between align-items-start">

                    <span style="flex-grow:2;">
                        <i class="fas fa-lightbulb flex-grow-1"></i>
                    </span>
                    <div class="bg-secondary rounded" style="flex-grow:3;">
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