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
                }, 
                video_canvas_class: "col align-self-center"
            };
        },
        template: 
        `

            <div class="full-width full-page card">

                <div class="card-header bg-secondary">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6" align="left">
                                <button class="btn" @click="show_picture=false"><i class="far fa-times-circle"></i></button>
                            </div>
        
                            <div class="col-6" align="right">
                                <button 
                                    class="btn" 
                                    :disabled="!show_picture"
                                    data-db_top_key="congratuations" 
                                    data-current_component="CongratulationsComponent"
                                    onclick="ChangeComponent(this)"
                                >
                                    <i :class="tick_picture_icon[show_picture]"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body bg-secondary">
                    <div class="container-fluid">
                        <div class="row d-flex">

                            <video 
                                v-show="!show_picture" 
                                :class="this.video_canvas_class" 
                                ref="video" 
                                autoplay
                            >
                            
                            </video>

                        </div>

                        <div class="row d-flex">

                            <canvas 
                                v-show="show_picture" 
                                :class="this.video_canvas_class" 
                                ref="canvas"
                            >
                            
                            </canvas>

                        </div>

                        <div class="row">

                            <div class="col-2"></div>
                            <div class="col text-white" align="center">
                                <br>
                                <p>When shooting, be sure <br>
                                the subject’s image is in focus</p>
                            </div>
                            <div class="col-2"></div>
                        </div>

                    </div>
                </div>

                <div class="card-footer bg-light" align="center">
                    <button class="btn" @click="TakePicture"><i class="fas fa-camera"></i></button>
                </div>

            </div>

        `,
        mounted() 
        {
            var video = this.$refs['video'];
            RunCamera(video); 
        },
        methods: 
        { 
            TakePicture: function(event)
            {
                var context = this.$refs.canvas.getContext('2d');
                var width = this.$refs.video.offsetWidth; 
                var height = this.$refs.video.offsetHeight; 
                this.$refs.canvas.width = width; 
                this.$refs.canvas.height = height; 
                context.drawImage(this.$refs.video, 0, 0, width, height);
                this.show_picture = true; 
            }
        },
    }, 
); 


function RunCamera(video)
{
    var constraint = 
    {
        video: true
    }
    var get_media = navigator.mediaDevices.getUserMedia(constraint); 
    get_media.then 
    (
        function(stream)
        {
            video.srcObject = stream;
            video.play();
        }
    ); 
}

function SavePicture(canvas)
{
    var dataURI = canvas.toDataURL('image/jpeg');
    var a = document.createElement("a"); 
    a.download = dataURI; 
    a.href = dataURI; 
    a.click(); 
}