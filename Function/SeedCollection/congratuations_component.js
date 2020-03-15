export var CongratulationsComponent = Vue.component
(
    "CongratulationsComponent", 
    {
        template: 
        `

            <div class="card bg-light full-width">

                <div class="card-body">
                    <h1>
                        Great Job!
                    </h1>
                </div>
                <div class="card-footer" align="right">   
                    <button 
                        class="btn"
                        @click="FinishCollectingSeeds"
                    >
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>

            </div>

        `, 
        methods: 
        {
            FinishCollectingSeeds()
            {
                window.seed_collection.show = false; 
                window.seed_collection_controller.show = false; 
            }    
        },
    }, 
); 