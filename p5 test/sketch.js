let x,y,r,g,b

function setup() {
  createCanvas(400, 400)
  background(2)
}

function draw() {
 
  r = random (105)
  g = random (100)
  b = random (100)
  x = random (400)
  y = random (400)
  noStroke();
  fill (r,g,b,200)
  circle(x,y,20)
}
  