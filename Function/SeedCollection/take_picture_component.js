



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

                    <div class="col-6" align="left">
                        <button class="btn btn-primary">X</button>
                    </div>

                    <div class="col-6" align="right">
                        <button class="btn btn-link" hidden>V</button>
                    </div>

                    <br>

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