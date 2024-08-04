// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext("2d");

// const width = canvas.width;
// const height = canvas.height;

// let keys = [38];

// let backgroundImg = new Image();
// backgroundImg.src = "public/background.png";

// backgroundImg.onload = function() {
//     ctx.drawImage(backgroundImg, 0, 0, width, height);
// }

// let birdImg = new Image();
// birdImg.src = "public/bird.png";

// birdImg.onload = function() {
//     backgroundImg.drawImage(birdImg, 15, 300 - 75, 75, 75);
// }

// let groundImg = new Image();
// groundImg.src = "public/ground.png";

// groundImg.onload = function() {
//     backgroundImg.drawImage(groundImg, 0, height - 100, width, 100);
// }

// let upperObst1 = new Image();
// upperObst1.src = "public/upper.png";

// upperObst1.onload = function() {
//     backgroundImg.drawImage(upperObst1, 100, 0, 75, 250);
// }

// let upperObst2 = new Image();
// birdImg.src = "public/upper.png";

// upperObst2.onload = function() {
//     ctx.drawImage(upperObst2, 15, 300 - 75, 75, 75);
// }

// let upperObst3 = new Image();
// birdImg.src = "public/upper.png";

// upperObst3.onload = function() {
//     ctx.drawImage(upperObst3, 15, 300 - 75, 75, 75);
// }

// let lowerObst1 = new Image();
// lowerObst1.src = "public/lower.png";

// lowerObst1.onload = function() {
//     backgroundImg.drawImage(lowerObst1, 70, height - 100 - 200, 75, 200);
// }

// let lowerObst2 = new Image();
// birdImg.src = "public/lower.png";

// lowerObst2.onload = function() {
//     ctx.drawImage(lowerObst2, 15, 300 - 75, 75, 75);
// }

// let lowerObst3 = new Image();
// birdImg.src = "public/lower.png";

// lowerObst3.onload = function() {
//     ctx.drawImage(lowerObst3, 15, 300 - 75, 75, 75);
// }


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let keys = [38];

let backgroundImg = new Image();
backgroundImg.src = "public/background.png";

backgroundImg.onload = function() {
    ctx.drawImage(backgroundImg, 0, 0, width, height);
    drawBird();
    drawGround();
    drawUpperObstacle();
    drawLowerObstacle();
}

function drawBird() {
    let birdImg = new Image();
    birdImg.src = "public/bird.png";

    birdImg.onload = function() {
        ctx.drawImage(birdImg, 15, 300 - 75, 75, 75);
    }
}

function drawGround() {
    let groundImg = new Image();
    groundImg.src = "public/ground.png";

    groundImg.onload = function() {
        ctx.drawImage(groundImg, 0, height - 100, width, 100);
    }
}

function drawUpperObstacle() {
    let upperObst1 = new Image();
    upperObst1.src = "public/upper.png";

    upperObst1.onload = function() {
        ctx.drawImage(upperObst1, 100, 0, 75, 250);
    }
}

function drawLowerObstacle() {
    let lowerObst1 = new Image();
    lowerObst1.src = "public/lower.png";

    lowerObst1.onload = function() {
        ctx.drawImage(lowerObst1, 70, height - 100 - 200, 75, 200);
    }

    let lowerObst2 = new Image();
    lowerObst2.src = "public/lower.png";

    lowerObst2.onload = function() {
        ctx.drawImage(lowerObst2, 500, height - 100 - 200, 75, 200);
    }

    let lowerObst3 = new Image();
    lowerObst3.src = "public/lower.png";

    lowerObst3.onload = function() {
        ctx.drawImage(lowerObst3, 280, height - 100 - 200, 75, 200);
    }
}
