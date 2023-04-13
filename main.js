function setup() {
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
background('gray');
}
function modelloaded() {
console.log('PoseNet is intialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}