const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
        for(let i = 0; i < this.vertices.length; i++) {
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            ctx.arc(this.vertices[i].xPos, this.vertices[i].yPos, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.font = "30px Arial";
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
        visited.forEach(e => {
            if(e['node'] == stop) {
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
        
    }

    drawResult(s, arr) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "top";
        ctx.beginPath();
        ctx.fillText(s, 50, 50);
        ctx.fillText("The shortest path is " + arr.join('-'), 50, 70);
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
    g.djikstra(g.vertices[start], g.vertices[stop]);
}


function generate() {
    let size = document.getElementById("size").value;
    let start = document.getElementById("start").value;
    let stop = document.getElementById("stop").value;
    if(size == 0) size = 20;
    if(start == 0) start = 0;
    if(stop == 0) stop = 19;
    loop(size, start, stop);
}

loop(20, 1, 19);