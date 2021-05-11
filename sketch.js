var fixedRect, movingRect,ob1,ob2,ob3,ob4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(100,100,50,50)
  ob1.shapeColor="pink"
  ob2=createSprite(200,200,50,50)
  ob2.shapeColor="yellow"
  ob3=createSprite(300,300,50,50)
  ob3.shapeColor="blue"
  ob4=createSprite(400,400,50,50)
  ob4.shapeColor="purple"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ob2)){
    movingRect.shapeColor = "green";
    ob2.shapeColor = "yellow";
  }
  else{
  movingRect.shapeColor = "red";
  ob2.shapeColor = "yellow";
  }
  drawSprites();
}
