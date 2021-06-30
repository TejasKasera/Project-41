const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls = [];
var mouse;
var engine, world;


function setup(){
    var canvas = createCanvas(350,650);

    engine = Engine.create();
    world = engine.world;

    mouse = new Jt (180,500,180,300);

   
    }

function draw(){
    background("black");
    Engine.update(engine);

    

    mouse.display();
    
   if(frameCount%1===0){
    ball = new Ball(random(10,340),1,10,5);
    balls.push(ball);
   }

   for(var k=0;k<balls.length;k++){
    balls[k].display();
  }

  drawSprites();
}