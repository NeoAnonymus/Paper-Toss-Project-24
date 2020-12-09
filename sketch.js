
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeft,boxMiddle,boxRight;
var ground1;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(400,690,800,20)

	ball1 = new ball(150,670,25)

	boxLeft = new box(480,610,20,100)
	boxLeft.shapeColor = color(255,0,0)

	boxMiddle = new box(570,650,200,15)
	boxMiddle.shapeColor = color(255,0,0)

	boxRight = new box (680,610,20,100)
	boxRight.shapeColor = color(255,0,0)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
keyPressed();

  boxLeft.display();
  boxMiddle.display();
  boxRight.display();

  ground1.display();

  ball1.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:7,y:-75})

}

}



