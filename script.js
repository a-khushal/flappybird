let lowerDistX = 100;
let upperDistX = 150;
const obstSpacing = 250;

function init() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const backgroundImg = new Image();
    const groundImg = new Image();
    const lowerObst = new Image();
    const upperObst = new Image();

    backgroundImg.src = "public/background.png";
    groundImg.src = "public/ground.png";
    lowerObst.src = "public/lower.png";
    upperObst.src = "public/upper.png"

    let imagesLoaded = 0;
    const totalImages = 4;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            startGame(ctx, width, height, backgroundImg, groundImg, lowerObst, upperObst);
        }    
    }

    backgroundImg.onload = imageLoaded;
    groundImg.onload = imageLoaded;
    lowerObst.onload = imageLoaded;
    upperObst.onload = imageLoaded;
}

function startGame(ctx, width, height, backgroundImg, groundImg, lowerObst, upperObst) {
    const lowerObstacles = [
        { x: lowerDistX + obstSpacing * 4, y: Math.floor(Math.random() * 181 + 100) },
        { x: lowerDistX + obstSpacing * 3, y: Math.floor(Math.random() * 181 + 100)},
        { x: lowerDistX + obstSpacing * 2, y: Math.floor(Math.random() * 181 + 100) },
        { x: lowerDistX + obstSpacing, y: Math.floor(Math.random() * 181 + 100) },
        { x: lowerDistX, y: Math.floor(Math.random() * 181 + 100) }
    ]

    const upperObstacles = [
        { x: upperDistX + obstSpacing * 4, y: Math.floor(Math.random() * 181 + 100) },
        { x: upperDistX + obstSpacing * 3, y: Math.floor(Math.random() * 181 + 100)},
        { x: upperDistX + obstSpacing * 2, y: Math.floor(Math.random() * 181 + 100) },
        { x: upperDistX + obstSpacing, y: Math.floor(Math.random() * 181 + 100) },
        { x: upperDistX, y: Math.floor(Math.random() * 181 + 100) }
    ]

    function drawGround() {
        ctx.drawImage(groundImg, 0, height - 100, width, 100);
    }

    function drawLowerObstacle() {
        lowerObstacles.forEach(obstacle => {
            ctx.drawImage(lowerObst, obstacle.x, height - 100 - obstacle.y, 75, obstacle.y);
        });
    }

    function drawUpperObstacle() {
        upperObstacles.forEach(obstacle => {
            ctx.drawImage(upperObst, obstacle.x, 0, 75, obstacle.y);
        });
    }

    function loop() {
        update();
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(backgroundImg, 0, 0, width, height);
        drawGround();
        drawLowerObstacle();
        drawUpperObstacle();
        window.requestAnimationFrame(loop);
    }

    function update() {
        lowerObstacles.forEach(obstacle => {
            obstacle.x -= 2;

            if (obstacle.x < -75) {
                obstacle.x = 150 + obstSpacing * (lowerObstacles.length - 1);
            }
        });

        upperObstacles.forEach(obstacle => {
            obstacle.x -= 2;

            if (obstacle.x < -75) {
                obstacle.x = 150 + obstSpacing * (lowerObstacles.length - 1);
            }
        });
    }

    loop();
}

window.onload = init;