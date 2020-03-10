



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

                <div class="full-width full-page card bg-secondary">

                    <div class="card-header">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-6" align="left">
                                    <button class="btn btn-primary">X</button>
                                </div>
            
                                <div class="col-6" align="right">
                                    <button class="btn btn-link" hidden>V</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        Content
                    </div>

                    <div class="card-footer">
                        Footer
                    </div>

                </div>
            </div>

        `,
        methods: 
        { 
        },
    }, 
); 