export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="row">

                    <div class="col-3 d-flex">
                        <i class="fas fa-lightbulb align-self-center"></i>
                    </div>
                    <div class="col-9 bg-secondary rounded">
                        <p class="text-white">
                            {{value}}
                        </p>
                    </div>
                    
                </div>

            </li>
        `
    }
); 