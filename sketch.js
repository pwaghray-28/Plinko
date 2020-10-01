const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions = []
var plinko = []
var particles = []

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,height,480,20);
    for(var k = 0; k <=width; k = k + 80){
      divisions.push(new Divisions(k, height-300/2,10,300))
    }
    for(var j = 40; j <=width; j = j + 50){
      plinko.push(new Plinko(j,100,10))
    }
    for(var j = 15; j <=width - 10; j = j + 50){
      plinko.push(new Plinko(j,150,10))
    }
    for(var j = 40; j <=width; j = j + 50){
      plinko.push(new Plinko(j,200,10))
    }
    for(var j = 15; j <=width - 10; j = j + 50){
      plinko.push(new Plinko(j,250,10))
    }
    for(var j = 40; j <=width; j = j + 50){
      plinko.push(new Plinko(j,300,10))
    }
    for(var j = 15; j <=width - 10; j = j + 50){
      plinko.push(new Plinko(j,350,10))
    }
    for(var j = 40; j <=width; j = j + 50){
      plinko.push(new Plinko(j,400,10))
    }
  }

function draw() {
  Engine.update(engine)
  background(0,0,0);  
 ground.display();
 for(var k = 0;k< divisions.length;k++){
   divisions[k].display()
 }
 for(var k = 0;k< plinko.length;k++){
  plinko[k].display()
}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10))
}
for(var k = 0;k< particles.length;k++){
  particles[k].display()
}
}