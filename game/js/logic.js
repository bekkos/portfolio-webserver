let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const _cellSize = 16;
const _COLUMNS = Math.floor(window.innerWidth / _cellSize);
const _ROWS = Math.floor(window.innerHeight / _cellSize);

let lastGen = [];
let currentGen = [];



const render = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0, innerWidth, innerHeight);

    for(let i = 0; i < currentGen.length; i++) {
        for(let j = 0; j < currentGen[i].length; j++) {
            if(currentGen[i][j] == true) {
                ctx.fillStyle = "#fff";
                
            } else {
                ctx.fillStyle = "#000";
            }
            ctx.fillRect(16 * i, 16 * j, 16, 16);
        }
    }



    ctx.strokeStyle = '#cf3838';
    for(let y = 0; y < _COLUMNS; y++) {
        ctx.beginPath();
        ctx.moveTo(y * _cellSize, 0);
        ctx.lineTo(y * _cellSize, window.innerHeight);
        ctx.stroke();
    }

    for(let x = 0; x < _ROWS; x++) {
        ctx.beginPath();
        ctx.moveTo(0, x * _cellSize);
        ctx.lineTo(window.innerWidth, x * _cellSize);
        ctx.stroke();
    }
}


const initiateBoard = () => {
    
    for(let i = 0; i < _COLUMNS; i++) lastGen.push([]);
    for(let i = 0; i < _ROWS; i++) lastGen.push([]);
    for(let i = 0; i < lastGen.length; i++) {
        for(let j = 0; j < _ROWS; j++) {
            if(Math.floor(Math.random() * 99) > 100) {
                lastGen[i][j] = true;
            } else {
                lastGen[i][j] = false;
            }
        
        }
    }
    
    
    currentGen = lastGen;

    render();
}

const updateGame = () => {
    for(let i = 0; i < lastGen.length; i++) {
        for(let j = 0; j < lastGen[i].length; j++) {
            let alive = lastGen[i][j];
            let neighbours = 0;
            
            // Check Above
            if(j != 0 && lastGen[i][j-1] == true) {
                neighbours++;
            }
            // Check below
                if(j != lastGen[i].length - 1 && lastGen[i][j+1] == true) {
                    neighbours++;
                }
            // Check Right
                if(i != lastGen.length - 1 && lastGen[i+1][j] == true) {
                    neighbours++;
                }
            // Check Left
                if(i != 0 && lastGen[i-1][j] == true) {
                    neighbours++;
                }
            // Check Up Left
                if(j != 0 && i != 0 && lastGen[i-1][j-1] == true) {
                    neighbours++;
                }
            // Check Up Right
                if(i != lastGen.length - 1 && j != 0 && lastGen[i+1][j-1] == true) {
                    neighbours++;
                }
            // Check Down Left
                if(i != 0 && j != lastGen[i].length - 1 && lastGen[i-1][j+1] == true) {
                    neighbours++;
                }
            // Check Down Right
                if(j != lastGen[i].length - 1 && i != lastGen.length - 1 && lastGen[i+1][j+1] == true) {
                    neighbours++;
                }


            // finalize

            if(alive && neighbours == 2 || alive && neighbours == 3) {
                currentGen[i][j] = true;
                continue;
            }

            if(!alive && neighbours == 3) {
                currentGen[i][j] = true;
                continue;
            }
            

            currentGen[i][j] = false;
        }
    }

    lastGen = currentGen;
}

window.addEventListener('click', event => {
    console.log(Math.floor(event.x / _cellSize) + " | " + Math.floor(event.y / _cellSize));
    let x = Math.floor(event.x / _cellSize);
    let y = Math.floor(event.y / _cellSize);
    currentGen[x][y] = !currentGen[x][y]
    render();
});


initiateBoard();

const pause = () => {
    let highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
}

const start = () => {
    setInterval(() => {
        updateGame();
        render();
    }, 500);
}


