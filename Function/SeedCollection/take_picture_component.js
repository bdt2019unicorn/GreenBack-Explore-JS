



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

            <div class="full-width full-page card">

                <div class="card-header bg-secondary">
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

                <div class="card-body bg-secondary">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-2"></div>
                            <video class="col" ref="video" autoplay></video>
                            <div class="col-2"></div>


                        </div>

                        <div class="row">

                            <div class="col-2"></div>
                            <canvas class="col" ref="canvas"></canvas>
                            <div class="col-2"></div>
                        </div>

                    </div>
                </div>

                <div class="card-footer bg-light" align="center">
                    <button>Take picture</button>
                </div>

            </div>

        `,
        methods: 
        { 
        },
    }, 
); 