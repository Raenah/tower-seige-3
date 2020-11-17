const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base, stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13,
    block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon, slingshot;

var score=0;

var backgroundImg,bg;

function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);

  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);

  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);

  block13 = new Block(600,140,30,40);

  stand1 = new Ground(600,285,200,10);

  stand2 = new Ground(900,195,200,10);

  ground = new Ground(width/2, 600, width, 50)

  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);


  polygon = new Polygon(300,190);

  slingshot = new SlingShot(polygon.body, {x: 200,y: 190});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }
  Engine.update(engine);

  textSize(20)
  fill("white");
  text("SCORE:"+score,750,40);

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
 
  block22.display();
  

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  

  noStroke();


  polygon.display();

  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
      Matter.Body.setPosition(polygon.body, {x: 300, y: 190}); 
      
  }
}


async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime; 
  var hour = datetime.slice(11,13); 

  if(hour>=06 && hour<=19){
     bg = "bg.png"; 
     } else{ 
     bg = "bg2.png"; 
 } 
 
 backgroundImg = loadImage(bg); 
 
 console.log(backgroundImg);
}
    