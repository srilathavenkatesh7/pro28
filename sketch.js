
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var boy,boyimg;
var mang1,mang2,mang3,mang4,mang5,mang6,mang7;
var ston;
var sling1;

function preload()
{
	boyimg=loadImage ("boy.png");
	treeimg=loadImage ("tree.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy =createSprite(120,630,20,100);
  boy.addImage("boyim",boyimg);
 boy.scale=0.1;
tree=createSprite(600,380,550,685);
tree.addImage ("treeim",treeimg);
tree.scale=0.5;
ground1=new Ground(450,690,900,10);
ston=new Stone(70,600);
sling1=new Sling(ston.body,{x:70,y:590});
mang1=new Mango(520,200);
Engine.run(engine);
  
}

function draw() {
  Engine.update (engine);
  background(220);

  drawSprites();
 ground1.display();
 ston.display ();
 
 sling1.display ();
 

mang1.display ();

}

function mouseDragged(){
Matter.Body.setPosition(ston.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling1.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(ston.body,{x:70,y:600})
		 sling1.attach (ston.body);
	}
}

function dc(lston,lmango){
	mbp=lmango.body.position;
	sbp=lston.body.position;

	var distance=dist (sbp.x,sbp.y,mbp.x,mbp.y);
	if (distance<=lmango.r+lston.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}