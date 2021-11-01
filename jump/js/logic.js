// GLOBALS
var cnvs = document.getElementById("game");
var ctx = cnvs.getContext("2d");
var gameLoop;
var toDraw = [];
var wallSpeed = 2;



// Key monitoring
var pressedKeys = {};
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }


// RENDERER
class RenderEngine {
    constructor() {
        this.toDraw = [];
    }
    renderLoop() {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        this.toDraw.map((i) => {
            i.draw();
        })
        
    } // renderLoop
} // Render Engine



// PLAYER
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.radius = 15;
        this.diameter = this.radius * 2;
        this.yVelocity = 0;
        this.jump = false;
        this.score = 0;
    }

    update() {
        let cols = this.checkForCollision();
        this.move(cols);
        this.gravity();
        this.score++;
    }

    checkForCollision() {
        let cols = [];
        if (this.x <= (0 + this.radius)) cols.push("left");
        if (this.x >= (cnvs.width - this.radius)) cols.push("right");
        if (this.y <= (0 + this.radius)) cols.push("up");
        if (this.y >= (cnvs.height-this.radius)) cols.push("down");
        return cols;
    }

    move(cols) {
        if(pressedKeys[37] && !cols.includes("left")) this.x -= this.speed; // Venstre piltast
        if(pressedKeys[39] && !cols.includes("right")) this.x += this.speed; // Høyre piltast
        if(pressedKeys[40] && !cols.includes("down")) this.y += this.speed; // Piltast ned
        if(pressedKeys[32] && cols.includes("down") && this.jump === false) this.jump = !this.jump; // Space
    }

    gravity() {
        let cols = this.checkForCollision();
        if(this.jump) {
            this.yVelocity -= 6;
            if(Math.floor(this.yVelocity) < 5) this.jump = false;
            this.y += this.yVelocity;
            return;
        }

        if(!cols.includes("down")) {
            this.yVelocity += 0.1;
        } else {
            this.yVelocity = 0;
        }
        
        this.y += this.yVelocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0 , 2 * Math.PI);
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + this.score, 50, 50);
        if(localStorage.getItem("highscore") != null) {
            ctx.fillText("Highscore: " + localStorage.getItem("highscore"), 50, 100);
        }
    }
}

// WALL
class Wall {
    constructor() {
        this.height = 400;
        this.width = 10;
        this.x = cnvs.width - 50;
        this.y = cnvs.height - (Math.random() * 100); 
        this.speed = 2;
        this.tag = "wall";
    }

    update() {
        this.move();
    }

    move() {
        this.x -= wallSpeed;
    }

    draw() {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


const startGame = () => {
    this.cnvs.height = window.innerHeight;
    this.cnvs.width = window.innerWidth;
    wallSpeed = 2;
    // Define instance of player.
    const p = new Player(cnvs.width / 2, cnvs.height / 2);

    const wallOne = new Wall();
    // Define instance of render engine.
    const r = new RenderEngine();
    // Add player to render engines "toDraw" array.
    r.toDraw.push(p);
    r.toDraw.push(wallOne);
    game(r);
} // startGame


const endGame = (score) => {
    clearInterval(gameLoop);
    alert("Game over!\n Your score: " + score);
    if(score > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", score);
    } 
    startGame();
} // endGame

const makeWall = (renderEngine) => {
    w = new Wall();
    renderEngine.toDraw.push(w);
}

const game = (renderEngine) => {
    let iteration = 0;
    let nextSpawn = 120;
    let gameOver = false;
    // GAME LOOP
    gameLoop = setInterval(() => {
        renderEngine.renderLoop();
        renderEngine.toDraw.map((i) => {
            if(i.x < 50 && i.tag == "wall") {
                renderEngine.toDraw.splice(1,1);
            }
            let p = renderEngine.toDraw[0];
            if(p.x + p.radius > i.x && p.x < i.x + i.width && p.y + p.radius > i.y) {
                gameOver = true;
            }
            i.update();
        });
        // If ESC -> Quit.
        if(pressedKeys[27]) {
            endGame();
        }


        if(iteration >= nextSpawn) {
            makeWall(renderEngine);
            wallSpeed += 0.2;
            if(nextSpawn > 60) nextSpawn--;
            iteration = 0;
        } else {
            iteration++;
        }

        if(gameOver) {
            endGame(renderEngine.toDraw[0].score);
        }
    }, 16.7); // 60 FPS
} // game

startGame();