
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var log1,ground;
var ball1,ball2,ball3,ball4,ball5;
var  rope,rope2,rope3,rope4,rope5;
var box,box2,box3,box4,box5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,400,800,20)
log1=new Log(300,200,300,30);


ball1=new Cradel(300,300,22,15)

ball2=new Cradel(300,300,22,25)

ball3=new Cradel(300,300,22,35)

ball4=new Cradel(300,300,22,45)

ball5=new Cradel(300,300,22,55)

box=new Box(170,200,10,10)
box2=new Box(290,200,10,10)
box3=new Box(360,200,10,10)
box4=new Box(430,200,10 ,10)

box5=new Box (230,200,10,10)



rope=new Slingshot(box.body,ball1.body)
rope2=new Slingshot(box3.body,ball3.body)
rope3=new Slingshot(box2.body,ball2.body)


rope5=new Slingshot(box4.body,ball4.body)
rope4=new Slingshot(box5.body,ball5.body)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  strokeWeight(1)
  
 log1.display();
 ball1.display();
 ball2.display();
 ball3.display();
 
 ball5.display();

box.display();
 box2.display();
 box3.display();

 box5.display();
 rope.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 box4.display();
ball4.display();


 ground.display();
}



