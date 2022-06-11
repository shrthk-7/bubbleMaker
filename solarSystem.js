function setup() {
  createCanvas(700, 700)
}

let t = 0

function draw() {
  fill(50,80)
  rect(0,0,width,height)
  fill(255)
  circle(width/2, height/2, 100)
  circle(width/2+100*Math.sin(t/10), height/2+100*Math.cos(t/10 + 100),10)
  let x = width/2+300*Math.sin(t/20 + 0)
  let y = height/2+300*Math.cos(t/20 + 100)
  circle(x,y,30)
  circle(x + 80*Math.sin(t/10 + 20), y + 80*Math.cos(t/10 + 20), 10)
  t += 1
}
