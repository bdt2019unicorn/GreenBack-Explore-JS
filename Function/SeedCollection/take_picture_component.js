export var TakePictureComponent = Vue.component
(
    "TakePictureComponent", 
    {
        data: function() 
        {  
            return {
                show_picture: false, 
                tick_picture_icon: 
                {
                    true: "far fa-check-circle", 
                    false: "far fa-circle"
                }
            };
        },
        template: 
        `

            <div class="full-width full-page card">

                <div class="card-header bg-secondary">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6" align="left">
                                <button class="btn"><i class="far fa-times-circle"></i></button>
                            </div>
        
                            <div class="col-6" align="right">
                                <button class="btn"><i :class="tick_picture_icon[show_picture]"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body bg-secondary">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-2"></div>
                            <video v-show="!show_picture" class="col" ref="video" autoplay></video>
                            <div class="col-2"></div>


                        </div>

                        <div class="row">

                            <div class="col-2"></div>
                            <canvas v-show="show_picture" class="col" ref="canvas"></canvas>
                            <div class="col-2"></div>
                        </div>

                    </div>
                </div>

                <div class="card-footer bg-light" align="center">
                    <button class="btn"><i class="fas fa-camera"></i></button>
                </div>

            </div>

        `,
        methods: 
        { 
        },
    }, 
); 