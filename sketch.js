
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var n=0;

function preload(){
  bgImg = loadImage("bg.gif")
  Bgmusic = loadSound("bg.mp3");
  boyImg = loadImage("boy.png")
  
  walk = loadAnimation("boy.png","boy1.png","boy2.png","boy3.png");
  walk.playing=true;
  stickImg = loadImage("stick.jpeg")
  obstacle1 = loadAnimation("gorillia.png","gorillia1.png","gorillia 2.png","gorillia3.png")
  obstacle2 = loadAnimation("leopard.png","leopard1.png","leopard2.png","leopard3.png")
  obstacle3 = loadAnimation("lion.png","lion1.png","lion2.png","lion3.png")
  obstacle4 = loadAnimation("wolf.png","wolf1.png","wolf2.png","wolf3.png")
  obstacle5 = loadAnimation("panther.png","panther2.png","panther3.png")
}

function setup() {
  createCanvas(1500,800);

  engine = Engine.create();
  world = engine.world;
  boy = createSprite(70,650,90,180)
  boy.scale=0.5
  boy.addAnimation('walking',walk);
  stick = createSprite(150,610,50,20);
  stick.scale=0.1;
  stick.addImage(stickImg)
obstaclesGroup = new Group();
}

function draw() 
{
  background(51);
  image(bgImg, 0, 0, width, height);
 
  Engine.update(engine);
  if(!Bgmusic.isPlaying()){
    Bgmusic.play();
    Bgmusic.setVolume(1.5);
  }

  fill("green");
  textAlign("center");
  textSize(40);
  text("WILD RUNNER", width / 2, 100);
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(600,705,10,40);
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
     case 1: obstacle.addAnimation("obst1",obstacle1)
             obstacle.scale=0.5;
             break;
      case 2: obstacle.addAnimation("obst2",obstacle2)
      obstacle.scale=0.9;
              break;
      case 3: obstacle.addAnimation("obst3",obstacle3)
      obstacle.scale=0.5;
              break;
      case 4: obstacle.addAnimation("obst4",obstacle4)
      obstacle.scale=0.5;
              break;
      case 5: obstacle.addAnimation("obst5",obstacle5)
      obstacle.scale=0.5;
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.9;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
