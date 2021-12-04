noseX=0;
noseY=0;

function preload(){
    the_image=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas=createCanvas(300,275);
    canvas.center();
    video=createCapture(VIDEO);
    video.set(300,275);
    video.hide();

    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}



function take_snapshot(){
    save('myFilterimage.png');
}

function model_loaded(){
console.log("model has been loaded");
}

function gotPoses(results) {
    if(results.length > 0) {

        console.log(results); 
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15; 


        }
    }
function draw(){
image(video, 0, 0, 300, 300); 
image(the_image, noseX, noseY, 30, 30); 
}