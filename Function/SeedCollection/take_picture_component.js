



export var TakePictureComponent = Vue.component
(
    "TakePictureComponent", 
    {
        data: function() 
        {  
            return {
                show_picture: false
            };
        },
        template: 
        `
            <div class="full-width full-page take-picture">
                
                <div class="row">
                    <div class="col-6">
                        <button class="top-right">V</button>
                    </div>

                    <div class="col-6">
                        <button class="col-6 top-left">X</button>
                    </div>
                </div>

                <div class="row">

                    <div class="col-12" style="background-color:red;">
                        <p>ha ha</p>
                    </div>
                    <div class="col-12" style="background-color:blue;">
                        <p>ha ha </p>
                    </div>
                    
                </div>
            </div>

        `,
        methods: 
        { 
        },
    }, 
); 