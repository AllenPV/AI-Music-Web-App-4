Avengers = "";
HarryPotter = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    Avengers = loadSound("The Avengers Theme Song.mp3");
    HarryPotter = loadSound("music.mp3");
}

function setup() {
    Canvas = createCanvas(400, 400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("model is loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function draw() {
    image(Video, 0, 0, 400, 400);
}