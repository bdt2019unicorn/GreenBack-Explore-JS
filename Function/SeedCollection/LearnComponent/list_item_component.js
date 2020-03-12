export var ListItem = Vue.component
(
    "ListItem", 
    {
        props: ["value"], 
        template: 
        `
            <li class="list-group-item borderless">

                <div class="row">

                    <div class="col-2 d-flex">
                        <i class="fas fa-lightbulb align-self-center"></i>
                    </div>
                    <div class="col-10 bg-secondary rounded d-flex">
                        <p class="text-white align-self-center">
                            {{value}}
                        </p>
                    </div>
                    
                </div>

            </li>
        `
    }
); 