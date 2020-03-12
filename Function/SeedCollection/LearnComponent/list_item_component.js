export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="d-flex justify-content-between">
                
                    <i class="fas fa-lightbulb"></i>
                    <br>
                    <div class="bg-secondary round">
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