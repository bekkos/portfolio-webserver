const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var _speed = 100;
var _size = 6;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


class Node {
    constructor(value, xPos, yPos) {
        this.value = value;
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    add(node) {
        this.vertices.push(node);
    }

    createEdge(a, b) {
        this.edges.push({
            'aNode': a,
            'bNode': b,
            'distance': this.calculateDistance(a,b)
        });
    }

    calculateDistance(a, b) {
        let distance = 1;
        if(a.xPos > b.xPos) {
            distance += a.xPos-b.xPos;
        }
        if(a.yPos > b.yPos) {
            distance += a.yPos-b.yPos;
        }
        if(a.xPos < b.xPos) {
            distance += b.xPos-a.xPos;
        }
        if(a.yPos < b.yPos) {
            distance += b.yPos-a.yPos;
        }
        return distance;
    }


    drawGraph() {
        ctx.lineWidth = 1;
        for(let i = 0; i < this.vertices.length; i++) {
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            ctx.arc(this.vertices[i].xPos, this.vertices[i].yPos, _size, 0, 2 * Math.PI);
            ctx.fill();
            ctx.font = "15px Arial";
            ctx.fillStyle = "#ff0000";
            ctx.textBaseline = "top";
            ctx.fillText(this.vertices[i].value, this.vertices[i].xPos + 5, this.vertices[i].yPos);
        }
        for(let i = 0; i < this.edges.length; i++) {
            ctx.beginPath();
            ctx.moveTo(this.edges[i]['aNode'].xPos,this.edges[i]['aNode'].yPos);
            ctx.lineTo(this.edges[i]['bNode'].xPos, this.edges[i]['bNode'].yPos);
            ctx.strokeStyle = "#FFF";
            ctx.stroke();
        }
    }

    checkIfVertexHasEdge(n) {
        let found = false;
        for(let i = 0; i < this.edges.length; i++) {
            if(this.edges[i]['aNode'] == n || this.edges[i]['bNode'] == n) found = true;
        }
        return found;
    }

    checkIfVertexHasEdgeTo(a, b) {
        for(let i = 0; i < this.edges.length; i++) {
            if(this.edges[i]['aNode'] == a || this.edges[i]['bNode'] == a) {
                if(this.edges[i]['aNode'] == b || this.edges[i]['bNode'] == b) return true;
            }
        }
        return false;
    }

    getAllNeighbours(node)  {
        let neighbours = [];
        for(let i = 0; i < this.edges.length; i++) {
            if(this.edges[i]['aNode'] === node['node']) {
                let nNode = {
                    'node': this.edges[i]['bNode'],
                    'distance': this.edges[i]['distance'],
                    'prevNode': node
                }
                neighbours.push(nNode);
                
            }
            
            if(this.edges[i]['bNode'] === node['node']) {
                let nNode = {
                    'node': this.edges[i]['aNode'],
                    'distance': this.edges[i]['distance'],
                    'prevNode': node
                }
                neighbours.push(nNode);
            }
            
        }
        return neighbours;
    }

    getAllNeighboursForResults(node)  {
        let neighbours = [];
        for(let i = 0; i < this.edges.length; i++) {
            if(this.edges[i]['aNode'] === node) {
                neighbours.push(this.edges[i]['bNode']);
            }
            
            if(this.edges[i]['bNode'] === node) {
                neighbours.push(this.edges[i]['aNode']);
            }
            
        }
        return neighbours;
    }

    generateEdges(limit) {
        for(let i = 0; i < limit; i++) {
            let a = this.vertices[Math.floor(Math.random() * this.vertices.length)];
            let b = this.vertices[Math.floor(Math.random() * this.vertices.length)];
            if(a == b) continue;
            if(this.checkIfVertexHasEdgeTo(a,b)) continue;
            this.createEdge(a,b);
        }
        // for(let i = 0; i < this.vertices.length; i++) {
        //     if(!this.checkIfVertexHasEdge(this.vertices[i])) {
        //         this.vertices.splice(i,1);
        //     }
        // }
    }

    getNextInQueue(arr) {
        let shortestDistance = 9999999999;
        let nextNodeIndex;
        let nextNode = null;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]['distance'] < shortestDistance) {
                shortestDistance = arr[i]['distance'];
                nextNodeIndex = i; 
                nextNode = arr[i];
            }
        }

        arr.splice(nextNodeIndex, 1);
        return nextNode;
    }

    
    djikstra(start, stop) {
        let queue = [];
        let visited = [];
        
        let s = {
            'node': start,
            'distance': 0,
            'prevNode': null
        }
        queue.push(s);

        let previousNode = {
            'node': null,
            'distance': 0,
            'prevNode': null
        };
        while(queue.length != 0) {
            let activeNode = this.getNextInQueue(queue);
            let aB = false;
            for(let j = 0; j < visited.length; j++) {
                if(activeNode['node'].value == visited[j]['node'].value) aB = true;
            }
            if(aB) continue;
            let neighbours = this.getAllNeighbours(activeNode);
            for(let i = 0; i < neighbours.length; i++) {
                let alreadyVisited = false;
                for(let j = 0; j < visited.length; j++) {
                    if(visited[j]['node'].value == neighbours[i]['node'].value) {
                        alreadyVisited = true;
                    }
                }
                if(!alreadyVisited) {
                    queue.push(neighbours[i]);
                }
            }

            activeNode['distance'] = activeNode['distance'] + previousNode['distance'];
            visited.push(activeNode);

            previousNode = activeNode;
        }
        let found = false;
        visited.forEach(e => {
            
            if(e['node'] == stop) {
                found = true;
                let s = "The shortest distance from " + start.value + " to " + stop.value + " is " + e['distance'];
                let path = []
                let activeNode = e;
                path.push(e['node'].value);
                while(activeNode['node'].value > start.value) {
                    activeNode = activeNode['prevNode'];
                    path.push(activeNode['node'].value);
                }
                this.drawResult(s, path);
            }
            
        })
        
        if(!found) {
            this.drawResult("", []);
        }
    }

    drawResult(s, arr) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "top";
        ctx.beginPath();
        if(arr.length == 0) {
            ctx.fillText("No path found, try again.", 50, 50);
            return;
        }
        ctx.fillText(s, 50, 50);
        ctx.fillText("The shortest path is " + arr.join('-'), 50, 70);
        let itr = 0;
        setInterval(() => {
            if(itr == arr.length-2) {
                var highestTimeoutId = setTimeout(";");
                for (var i = 0 ; i < highestTimeoutId ; i++) {
                    clearTimeout(i); 
                }
            }

            
            
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(this.vertices[arr[itr]].xPos, this.vertices[arr[itr]].yPos);
            ctx.lineTo(this.vertices[arr[itr+1]].xPos, this.vertices[arr[itr+1]].yPos);

            ctx.strokeStyle = "#ffe208";
            ctx.stroke();

            if(itr < arr.length-1) {
                ctx.lineWidth = 1;
                let neighbours = this.getAllNeighboursForResults(this.vertices[arr[itr]]);
                neighbours.forEach(e => {
                    let pathNode = false;
                    for(let i = 0; i < arr.length; i++) {
                        if(e.value == arr[i]) pathNode = true;
                    }
                    if(!pathNode) {
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[arr[itr]].xPos, this.vertices[arr[itr]].yPos);
                        ctx.lineTo(e.xPos, e.yPos);
                        ctx.strokeStyle = "#ff0808";
                        ctx.stroke();
                    }
                })
            }

            ctx.fillStyle = "#46eb34";
            ctx.beginPath();
            ctx.arc(this.vertices[arr[itr+1]].xPos, this.vertices[arr[itr+1]].yPos, _size * 2, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "#ffe208";
            ctx.beginPath();
            ctx.arc(this.vertices[arr[itr]].xPos, this.vertices[arr[itr]].yPos, _size * 2, 0, 2 * Math.PI);
            ctx.fill();

            if(itr < 2) {
                ctx.fillStyle = "#0810ff";
                ctx.beginPath();
                ctx.arc(this.vertices[arr[0]].xPos, this.vertices[arr[0]].yPos, _size * 2, 0, 2 * Math.PI);
                ctx.fill();
            }

            itr++;
        }, _speed);
    }
}


function loop(s, start, stop) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,innerWidth,innerHeight);
    let g = new Graph()
    let size = s;
    for(let i = 0; i < size; i++) {
        let n = new Node(i, Math.floor((Math.random()+0.12) * (window.innerWidth/1.25)), Math.floor((Math.random()+0.12) * (window.innerHeight/1.25)));
        g.add(n);
    }
    g.generateEdges(size * 2);
    g.drawGraph();
    g.djikstra(g.vertices[start], g.vertices[stop-1]);
}


function generate() {
    let size = document.getElementById("size").value;
    let start = document.getElementById("start").value;
    let stop = document.getElementById("stop").value;
    let aSpeed = document.getElementById("speed").value;
    if(start != 0 || stop !=0) {
        if(start > stop || start == stop || start == stop-1){
            alert("Start can not be greater or equal to stop - 1. Reverse order.");
            return;
        }
    }
    if(aSpeed != 0) {
        _speed = aSpeed;
    }
    if(size == 0) size = 150;
    if(start == 0) start = 0;
    if(stop == 0) stop = 101;
    _size = 6;
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    loop(size, start, stop);
}

loop(150, 0, 101);