var box1
var box2
function setup() {
  createCanvas(800,400);
  box1= createSprite(400, 200, 50, 50);
  box2=createSprite(600,200,60,50);
box1.shapeColor="red";
box2.shapeColor="blue";
box1.velocityX=5;
box2.velocityX=-7
}

function draw() {
  background(255,255,255);  
bounceoff (box1,box2)
  drawSprites();
}