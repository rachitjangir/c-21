var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="orange";

  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="cyan"

  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="white"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,gameObject4)){

movingRect.shapeColor = "red";
 // fixedRect.shapeColor = "red";

}
 



  drawSprites();
}

// Boolean vallues - true , False
function bounceoff(object1,object2){


if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}}