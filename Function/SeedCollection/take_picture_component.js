



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
                <button class="top-right">V</button>
                <button class="top-left">X</button>
                
                <div class="row">
                    <div class="col-12" style="background-color:red;">
                    </div>
                    <div class="col-12" style="background-color:blue;">
                    </div>
                </div>
            </div>

        `,
        methods: 
        { 
        },
    }, 
); 