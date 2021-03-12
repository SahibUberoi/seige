const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var ground;
function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,300,600,20);
    b1 = new Box(600,265,50,50);
    b2 = new Box(655,265,50,50);
    b3 = new Box(710,265,50,50);
    b4 = new Box(765,265,50,50);    
    b5 = new Box(545,265,50,50);
    b6 = new Box(490,265,50,50);
    b7 = new Box(435,265,50,50);
    b8 = new Box(600,210,50,50);
    b9 = new Box(655,210,50,50);
    b10 = new Box(710,210,50,50);
    b11 = new Box(545,210,50,50);
    b12 = new Box(490,210,50,50);
    b13 = new Box(600,155,50,50);
    b14 = new Box(655,155,50,50);
    b15 = new Box(545,155,50,50);
    b16 = new Box(600,100,50,50);
    


}
function draw() {
    background(0);
    Engine.update
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

}