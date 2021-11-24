const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ball1, ball2, ball3, ball4, ball5;
var platform;
var ground;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(400, 590, 800, 10);

	ball1 = new Bob(300, 500);
	platform = new Roof();
	SlingShot1 = new Rope(ball1, platform);
	ball2 = new Bob(350, 500);
	ball3 = new Bob(400, 500);
	ball4 = new Bob(450, 500);
	ball5 = new Bob(500, 500);
}


function draw() {
  background(230);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);

  SlingShot1.display();
  platform.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}
function KeyPressed() {
  if(keyDown('enter')) {
    Matter.Body.applyForce(ball1.body, ball1.body.position ,{x:-50 ,y: -45});
  }
}






