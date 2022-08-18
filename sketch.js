
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine
var ball,world;
var groundobj;

var leftSide,rightSide;



function preload()
{
	pushImg = loadImage("push.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		airFriction:0,
		restitution:0.3,
		density:0,
		isStatic:false
	}

	var groundobj_options = {
		airFriction:0,
		restitution:0,
		isStatic:true
	}
var render = Render.create({ element: document.body, engine: engine, 
	options: { width: 1200, height: 700, wireframes: false } }); Render.run(render);


	

	groundobj = Bodies.rectangle(400,380,800,20 , groundobj_options);
	World.add(world,groundobj);
	leftSide = Bodies.rectangle(500,300,20,120 , groundobj_options);
	World.add(world,leftSide);
	rightSide = Bodies.rectangle(700,300,20,120 , groundobj_options );
	World.add(world,rightSide);

	ball = Bodies.circle(450,10,10,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
	

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //drawSprites();

  rect(groundobj.position.x , groundobj.position.y , 800,20)
  rect(leftSide.position.x , leftSide.position.y , 20,120)
  rect(rightSide.position.x , rightSide.position.y , 20,120)  

  ellipse(ball.position.x , ball.position.y ,10,10); 

  
}

function keyPressed() 
{
	if (keyCode === UP_ARROW)
	{
		Hforce();
		Vforce()
	}
}



function Hforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function Vforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}