var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var particle=0;
var count=0;
var score=0;

var gameState,play,end
var mousePressedCount=0
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height+5,width,5);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));

      
    }


mousePressed()

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
if(mousePressedCount>1){
particle.display()
}
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("100",420,580)
   text("100",340,580)
   text("100",260,580)
   text("100",500,580)
   text("200",580,580)
   text("300",660,580)
   text("500",740,580)
   text("200",180,580)
   text("300",100,580)
   text("500",20,580)
   text("score: "+score,20,50)
   console.log(mouseX+"  "+mouseY)



   

}
function mousePressed(){
  mousePressedCount=mousePressedCount+1
  gameState=play
  if(gameState===play&&mousePressedCount>1&&count<5){
  particle=new Particle(mouseX,mouseY,10,10)
  }}
