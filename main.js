function preload(){
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot(){
    save('MoustachePic.png');
}

function modelLoaded(){
    console.log('PoseNet is Initalized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("lip x ="+ results[0].pose.nose.x);
        console.log("lip y = "+results[0].pose.nose.y);
    }
}