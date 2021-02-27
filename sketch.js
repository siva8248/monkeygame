var monkey , monkey_running;
var banana,bananaImage,obstacle,obstacleImage;
var FoodGroup, obstacleGroup;
var score;
function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
}
function setup() {
createCanvas(500,200);
monkey=createSprite(50,160,20,50);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.05;
Ground = createSprite(200,180,700,10);
obstacleGroup = createGroup;
score=0;
}
function draw() {
background("lightblue");
spawnObstacles();
if(keyDown("space")){
  monkey.velocityY = -14;
}
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(Ground);
score = score + Math.round(getFrameRate()/60);
spawnbanana();
drawSprites();
textSize(18);
text("survial time : " +score,20,30);
}
function spawnObstacles(){
if (frameCount % 100 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6;
   obstacle.scale = 0.09;
   obstacle.lifetime = 300;
   obstacle.addImage(obstaceImage);
   obstacle.depth=Ground.depth;
   Ground.depth=Ground.depth+1;
 }
}
function spawnbanana() {
if (frameCount % 75 === 0) {
  var banana = createSprite(600,120,40,10);
  banana.y = Math.round(random(30,130));         banana.addImage(bananaImage);                 banana.scale = 0.07;
  banana.velocityX = -3;
  banana.lifetime = 200;
}
}





