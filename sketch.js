function setup() {
  createCanvas(4000, 4000);
   background("blue");
}

function draw() {
  stroke("black");
  fill("yellow");
  
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 100, 10);
  }
}