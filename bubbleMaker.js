// ARRAY OF OBJECTS -- impractical method
// function setup() {
//     createCanvas(700, 700)
//     background(50)
//     stroke(255)
//     noFill()
// }

// let bubbles = []
// for(let i = 0; i < 100; i++){
//     bubbles[i] = {
//         x: Math.random() * 700,
//         y: Math.random() * 700,
//         diameter: Math.random()*50 + 10,
//         display: function() {
//             circle(this.x,this.y,this.diameter)
//         },
//         move: function() {
//             this.x += Math.random() * 10 - 5
//             this.y += Math.random() * 10 - 5
//         }
//     }
// }
// function draw() {
//     background(50)
//     for(bubble of bubbles){
//         bubble.move()
//         bubble.display()
//     }
// }

// ARRAY OF OBJECTS USING CONSTRUCTOR FUNTIONS
// BUBBLE MAKERRRRRRRR
let bubbles = []

function setup() {
    createCanvas(300, 700)
    background(50)
    noStroke()
    noFill()
}

function Bubble(x,y) {
    this.x = x
    this.y = y
    this.col = 255
    this.diameter = Math.random() * 20 + 5
    this.lifespan = Math.random() * 80 + 50

    this.display = function() {
        fill(this.col, this.lifespan)
        circle(this.x, this.y, this.diameter)
        if(this.lifespan < 0 || this.y < 0)
            return false
        else
            return true
    }
    this.update = function() {
        this.x += Math.random()*10 - 5
        this.y += Math.random()*15 - 14
        this.lifespan -= 1
    }
    this.clicked = function() {
        if(dist(mouseX, mouseY, this.x, this.y) < this.diameter/2){
            this.lifespan = 0
            return true
        }
    }
}
function touchMoved() {
    bubbles.push(new Bubble(mouseX, mouseY))
}



// function mousePressed() {
//     for(let i = bubbles.length-1; i>=0;  i--){
//         if(bubbles[i].clicked())
//             break
//     }
// }

function draw() {
    background(50)
    for(let i = bubbles.length-1; i>=0; i--) {
        bubbles[i].update()
        if(!bubbles[i].display()) {
            bubbles.splice(i,1)
            i--
        }
    }
}