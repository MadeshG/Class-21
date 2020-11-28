var fixedRect, movingRect;
var gameobj1,gameobj2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1 = createSprite(200,200,50,80)
  gameobj1.shapeColor = "orange"
  gameobj2 = createSprite(100,500,50,80)
  gameobj2.shapeColor = "purple"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,gameobj2)){
  movingRect.shapeColor = "red";
  gameobj2.shapeColor = "red";
 } else{
  movingRect.shapeColor = "green";
  gameobj2.shapeColor = "purple";
 }

 
  drawSprites();
}
