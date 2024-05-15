function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("green");
  fill("blue");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 20);
  }
}
