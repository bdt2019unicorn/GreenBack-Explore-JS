



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

            <div class="full-width full-page card bg-secondary">

                <div class="card-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6" align="left">
                                <button class="btn btn-primary">X</button>
                            </div>
        
                            <div class="col-6" align="right">
                                <button class="btn btn-link">V</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col" style="background-color:red;">
                                <p>I am the video test</p>
                            </div>

                            <div class="col" style="background-color:yellow;">
                                <p>I am the canvas test</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="card-footer" align="center">
                    <button>Take picture</button>
                </div>

            </div>

        `,
        methods: 
        { 
        },
    }, 
); 