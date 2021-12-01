const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,200,50,50);
}

function draw(){
    background("black");

    box.display();
}