const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,box;
var ball, ground;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20;
var rope;

function setup() {
 var canvas =  createCanvas(800,600);
 
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(400, 580, 1000, 20);
 box1 = new Box(200, 530, 50, 50);
 box2 = new Box(200, 480, 50, 50);
 box3 = new Box(200, 430, 50, 50);
 box4 = new Box(200, 380, 50, 50);
 box5 = new Box(200, 330, 50, 50);
 box6 = new Box(200, 280, 50, 50);
 box7 = new Box(200, 230, 50, 50);
 box8 = new Box(200, 180, 50, 50);
 box9 = new Box(200, 130, 50, 50);
 box10 = new Box(200, 80, 50, 50);
 box11 = new Box(300, 80, 50, 50);
 box12 = new Box(300, 530, 50, 50);
 box13 = new Box(300, 480, 50, 50);
 box14 = new Box(300, 430, 50, 50);
 box15 = new Box(300, 380, 50, 50);
 box16 = new Box(300, 330, 50, 50);
 box17 = new Box(300, 280, 50, 50);
 box18 = new Box(300, 230, 50, 50);
 box19 = new Box(300, 180, 50, 50);
 box20 = new Box(300, 130, 50, 50);
 ball = new Ball(400, 400, 50);
 rope = new Rope(ball.body,{x: 400, y: 50});
}

function draw() {
  background("lightgreen");  

  Engine.update(engine)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ball.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})
}