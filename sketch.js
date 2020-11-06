const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(950,350,70,70);
    box3 = new Box(700, 280, 70, 70);
    box4 = new Box(950, 280, 70, 70);
    box5 = new Box(825, 210, 70, 70);

    pig1 = new Pig(825, 350);
    pig2 = new Pig(825, 280);

    log1 = new Log(825, 300, 320, PI/2);
    log2 = new Log(825, 220, 320, PI/2);
    log3 = new Log(780, 150, 160, PI/7);
    log4 = new Log(870, 150, 160, -(PI/7))

    bird = new Bird(20, 20)

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

    ground.display();
}