var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  // To create 3 different arrays
var particles = [];
var plinkos = [];
var divisions = [];

// To create a division height
var divisionHeight=300;

// To create a score variable
var score =0;
var particle;

// To create turns for u user to play
var turn = 0;

// To create a gamestate as play
var gameState = play;

function setup() {
  createCanvas(800, 800);
 
  // To create engine
  engine = Engine.create();
  world = engine.world;

   // To create a ground
  ground = new Ground(width/2,height,width,20);
  
   

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
   
}
 
function draw() {
  background("black");

  textSize(20)
 //text("Score : "+score,20,30);

 // To give values to buckets

  text("Score : "+score,20,30);

  text("500", 30,540);
  text("500", 110,540);
  text("500", 190,540);
  text("500", 260,540);

  text("100", 340,540);
  text("100", 420,540);
  text("100", 500,540);
  
  text("200", 580,540);
  text("200", 660,540);
  text("200", 740,540);

  // To update engines

  

  Engine.update(engine);

  // To display turns

  text("Turns:"+turn,700,30);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<300){

        score = score+500;
        particle = null;

      }

    }

   }


   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x>301&&particle.body.position.x<600){

        score = score+100;
        particle = null;

      }
    }
   } 
   
   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x>601&&particle.body.position.x<900){

        score = score+200;
        particle = null;

      }
    }
   }

   // To create condition what happens when 5 turns are over

   if(turn>=5){
    gameState = "end"
    textSize(25);
    text("Good Try,If you another turn press refresh Button",200,240);      
  }
 }


function mousePressed(){

  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}