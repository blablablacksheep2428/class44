var mainHero,heroImage,aliens
var backGround,groundImg;


function preload(){
 heroImage = loadImage("MainCharecter1lol.png")
 groundImg = loadImage("Saturn1.png")
}
function setup(){
 createCanvas(500,500)
  backGround = createSprite(250,250,500,500)
  backGround.addImage("hacks",groundImg);
  backGround.scale = 7
  backGround.velocityX = -5
  mainHero = createSprite(10,250,10,10)
  mainHero.addImage("hero",heroImage)
  mainHero.scale = 0.2
 
}
function draw(){
  if(keyDown("w")||keyDown(UP_ARROW)){
    mainHero.velocityY=-5
  }
 
 drawSprites()
}