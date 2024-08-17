let lowerDistX = 200;
let upperDistX = 200;
let birdSpeedY = 0;
let gameStarted = false;
const obstSpacing = 300;

function init() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    let birdHeightY = height / 2;
    const birdDistX = 20;

    const backgroundImg = new Image();
    const groundImg = new Image();
    const lowerObst = new Image();
    const upperObst = new Image();
    const birdImg = new Image();

    backgroundImg.src = "public/background.png";
    groundImg.src = "public/ground.png";
    lowerObst.src = "public/lower.png";
    upperObst.src = "public/upper.png";
    birdImg.src = "public/bird.png";

    let imagesLoaded = 0;
    const totalImages = 5;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            startGame(ctx, width, height, backgroundImg, groundImg, lowerObst, upperObst, birdImg, birdHeightY, birdDistX);
        }    
    }

    backgroundImg.onload = imageLoaded;
    groundImg.onload = imageLoaded;
    lowerObst.onload = imageLoaded;
    upperObst.onload = imageLoaded;
    birdImg.onload = imageLoaded;
}

function startGame(ctx, width, height, backgroundImg, groundImg, lowerObst, upperObst, birdImg, birdHeightY, birdDistX) {
    const lowerObstacles = [
        { x: lowerDistX + obstSpacing * 4, y: Math.floor(Math.random() * 186 + 100) },
        { x: lowerDistX + obstSpacing * 3, y: Math.floor(Math.random() * 186 + 100)},
        { x: lowerDistX + obstSpacing * 2, y: Math.floor(Math.random() * 186 + 100) },
        { x: lowerDistX + obstSpacing, y: Math.floor(Math.random() * 186 + 100) },
        { x: lowerDistX, y: Math.floor(Math.random() * 186 + 100) }
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

    function drawBird() {
        ctx.drawImage(birdImg, birdDistX, birdHeightY, 50, 50);
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
    
    ctx.drawImage(backgroundImg, 0, 0, width, height);
    drawGround();
    drawBird();
    drawLowerObstacle();
    drawUpperObstacle();

    function loop() {
        updateObstacle();
        updateBird();
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(backgroundImg, 0, 0, width, height);
        drawGround();
        drawBird();
        drawLowerObstacle();
        drawUpperObstacle();
        window.requestAnimationFrame(loop);
    }

    function updateObstacle() {
        lowerObstacles.forEach(obstacle => {
            obstacle.x -= 2;

            if (obstacle.x < -75) {
                obstacle.x = 150 + obstSpacing * (lowerObstacles.length - 1);
            }

            if (birdHeightY >= height - 100 - obstacle.y && (birdDistX + 50 >= obstacle.x && birdDistX <= obstacle.x + 75)) {
                birdHeightY = height / 2; 
                birdSpeedY = 0;    
                restart();         
            }
        });

        upperObstacles.forEach(obstacle => {
            obstacle.x -= 2;

            if (obstacle.x < -75) {
                obstacle.x = 150 + obstSpacing * (lowerObstacles.length - 1);
            }

            if (birdHeightY <= obstacle.y && (birdDistX + 50 >= obstacle.x && birdDistX <= obstacle.x + 75)) {
                birdHeightY = height / 2; 
                birdSpeedY = 0;    
                restart();         
            }
        });
    }

    function updateBird() {
        birdSpeedY += 0.15;
        birdHeightY += birdSpeedY;

        document.addEventListener("keydown", (e) => {
            if(e.keyCode == 38) {
                birdSpeedY = -4;
            }
        })

        if(birdHeightY >= height - 100 || birdHeightY <= 0) {
            birdHeightY = height / 2;
            birdSpeedY = 0;
            restart();         
        } 
    }

    document.addEventListener("keypress", (e) => {
        if (!gameStarted) {
            gameStarted = true; 
            loop();
        }
    }); 

    function restart() {
        window.location.reload();
    }
}

window.onload = init;