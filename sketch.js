
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(35, 315);
monkey.addAnimation("moving", monkey_running)
monkey.scale = 0.1

ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;

console.log(ground.x)
bananagroup = createGroup();
obstaclegroup = createGroup();

  
}


function draw() {
background("white");
if(keyDown("space")&&monkey.y >= 300) {
      monkey.velocityY = -20;}
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

if (ground.x < 0){
    ground.x = ground.width/2;
    }
  score = Math.round(frameCount/20);
  text("Score: "+ score, 200,30);
  
Food();
spawnobstacle();
drawSprites();
}
function Food(){
  if(frameCount%80 == 0){
banana = createSprite(410,random(120,200), 10, 10)
banana.addImage(bananaImage);
banana.velocityX = -5;
banana.lifetime = 500;
banana.scale = 0.1;
bananagroup.add(banana);

}
}
function spawnobstacle(){

if(frameCount%300 == 0){  
  obstacle = createSprite(600, 315  , 10, 10);
  obstacle.addImage(obstacleImage)
  obstacle.lifetime = 300;
  obstacle.velocityX = -5;
  obstaclegroup.add(obstacle)
  obstacle.scale = 0.2;
    
}
}







