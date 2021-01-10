
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5; 

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(600,height,1200,20);
	
	bobObject1= new Bob(100, height,40,20);
	bobObject2= new Bob(300, height,40,20);
	bobObject3= new Bob(500, height,40,20);
	bobObject4= new Bob(700, height,40,20);
	bobObject5= new Bob(800, height,40,20);

	rope1= new Rope(bobObject1.body,roofObject.body, -bobDiameter*2,0);
	rope2= new Rope(bobObject2.body,roofObject.body, -bobDiameter*2,0);
	rope3= new Rope(bobObject3.body,roofObject.body, -bobDiameter*2,0);
	rope4= new Rope(bobObject4.body,roofObject.body, -bobDiameter*2,0);
	rope5= new Rope(bobObject5.body,roofObject.body, -bobDiameter*2,0);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	roof1.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	
	drawSprites();
 
}



