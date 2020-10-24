var fixedRect, movingRect

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite (400, 200, 40, 40)
  fixedRect.shapeColor = "red";

  movingRect = createSprite ( 200, 400, 40, 40)
  movingRect.shapeColor = "red";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y= mouseY; 

  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2){

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  drawSprites();
}