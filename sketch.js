var movingRect, fixedRect

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(500, 400, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(700, 600, 60, 40);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}
function draw() {
  background("lightblue");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}