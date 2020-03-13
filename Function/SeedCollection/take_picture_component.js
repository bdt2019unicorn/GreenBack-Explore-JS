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
                video_canvas_class: "col align-self-center picture-video-canvas"
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
                                hidden
                                ref="canvas"
                            >
                            
                            </canvas>

                        </div>

                        <div class="row d-flex">

                        <img 
                            v-show="show_picture" 
                            :class="this.video_canvas_class" 
                            ref="img"
                            src=""
                        >
                        
                        </img>

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
<<<<<<< HEAD
                DrawPictureToCanvas:
                {
                    var context = this.$refs.canvas.getContext('2d');
                    var width = this.$refs.video.videoWidth; 
                    var height = this.$refs.video.videoHeight; 
                    this.$refs.canvas.width = width; 
                    this.$refs.canvas.height = height; 
                    context.drawImage(this.$refs.video, 0, 0, width, height);
                }

                this.$refs.img.src = this.$refs.canvas.toDataURL('image/jpeg'); 
=======
                var context = this.$refs.canvas.getContext('2d');
                var width = this.$refs.video.videoWidth; 
                var height = this.$refs.video.videoHeight; 
                console.log("width, height",(width,height)); 
                this.$refs.canvas.width = width; 
                this.$refs.canvas.height = height; 
                context.drawImage(this.$refs.video, 0, 0, width, height);
>>>>>>> parent of b950e8a... Update take_picture_component.js
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


var learn_styles = "position: absolute; display: block; right: 3%; top: 7%; width: 80vw; height: 60vh;"; 
// common-popup main-components learn-term-components learn-component 
var term_styles = "position: absolute; display: block; right: 3%; top: 7%; width: 80vw; height: 80vh;"; 
// common-popup main-components learn-term-components term-component 
var picture_styles = "position: absolute; display: block; top: 7%; width: 100vw; height: 93vh;"; 
// common-popup main-components picture-component  
var congrat_styles = "position: absolute; display: block; top: 25%; left: 25%; width: 40vw;"; 
// common-popup congrat-component   

//when take picture is here, no need to show the header. Make sure the show is gone. 
// style="height: 93vh;" - picture component style
// video and canvas width: 50vw; height: 50vh;

