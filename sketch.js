var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  box.velocityX = 3;
  box.shapeColor = "red"
}

function draw() {
  background(30);
  if (keyIsDown("LEFT_ARROW")) {
    box.position.x -= 2;
  }
  drawSprites();
}




