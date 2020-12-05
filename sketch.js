var survivalTime = 0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodsGroup, obstaclesGroup;
var score;
var ground;
var jungleImage,jungle;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("download-1.jpg");
  
 
}



function setup() {
  
jungle = createSprite(200,200,600,600);
  jungle.addImage("download-1",jungleImage);
  jungle.scale = 1.8;
  
ground = createSprite(400,340,1000,10);
ground.velocityX =-4;
  ground.visible = false;

  
monkey = createSprite(100,300,10,10);
monkey.addAnimation("sprite_  5",monkey_running);
monkey.scale= 0.15;
  
 foodsGroup = createGroup();
  obstaclesGroup = createGroup();
  
  
}

function draw (){
  createCanvas(400,400);
  background("white");
  
  fill("black")
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,150,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    obstaclesGroup.setVelocityXEach(0);
    foodsGroup.destroyEach();
    ground.velocityX = 0;
  }
     
     
  
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12; 
     
     }
  
  
     
     
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  var rand = Math.round (random(120,200));

  spawnFoods();
  spawnObstacles();

  drawSprites();

}
function spawnFoods(){
    if(frameCount % 80 === 0){
var banana = createSprite(500,500,20,20); banana.addImage("banana",bananaImage);
  banana.scale = (0.1);
  banana.y= Math.round(random(320,100)); 
  banana.Lifetime = 200; 
  banana.velocityX = -4;
  foodsGroup.add(banana);
    } 
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var rock = createSprite(300,310,20,20); rock.addImage("obstacle",obstacleImage);
  rock.scale = (0.2 );
  rock.velocityX = -4;
    rock.Lifetime = 100;
    obstaclesGroup.add(rock);
  }
}




