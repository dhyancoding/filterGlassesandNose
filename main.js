function preload() {
    clown_nose = loadImage("https://i.postimg.cc/6QghRqVg/Screenshot-2024-02-05-at-6-18-32-pm-removebg-preview.png")
    glasses = loadImage("https://i.postimg.cc/NjwwfBPx/Screenshot-2024-02-05-at-6-25-51-pm-removebg-preview.png")
}

noseX = 0
noseY = 0

eyesX = 0
eyesY = 0

function setup() {
    canvas = createCanvas(600, 450)
    canvas.center()
    v = createCapture(VIDEO)
    v.size(600, 450)
    v.hide()
    posenet = ml5.poseNet(v, model_Loaded)
    posenet.on("pose", gotResults)
}

function gotResults(result) {
    if (result.length > 0) {
        console.log("x = " + result[0].pose.nose.x)
        console.log("y = " + result[0].pose.nose.y)
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y

        console.log("x = " + result[0].pose.rightEye.x)
        console.log("y = " + result[0].pose.rightEye.y)
        eyesX = result[0].pose.rightEye.x
        eyesY = result[0].pose.rightEye.y
    }

}

function model_Loaded() {
    console.log("poseNet has been loaded")
}

function draw() {
    image(v, 0, 0, 600, 450)
    image(clown_nose, noseX-35, noseY-30, 70, 70)
    image(glasses, eyesX-50, eyesY-50, 200, 70)
}


function take_Snapshot() {
    save("filterimage.png")
}