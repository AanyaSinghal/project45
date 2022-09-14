var standingAstronaut;
var runningAstronaut;
var jumpingAstronaut;
var star;
var backgroundImage;
var obstacle1,obstacle2;

function preload(){
    standingAstronaut = loadAnimation("assets/standingAstronaut1.png","assets/standingAstronaut2.png",
    "assets/standingAstronaut3.png","assets/standingAstronaut4.png","assets/standingAstronaut5.png");
    
    runningAstronaut = loadAnimation("assets/runningAstronaut1.png","assets/runingAstronaut2.png",
    "assets/runingAstronaut3.png","assets/runingAstronaut4.png","assets/runingAstronaut5.png",
    "assets/runingAstronaut6.png","assets/runingAstronaut7.png","assets/runingAstronaut8.png",
    "assets/runingAstronaut9.png","assets/runingAstronaut10.png","assets/runingAstronaut11.png",
    "assets/runingAstronaut12.png");

    jumpingAstronaut = loadAnimation("assets/jumpingAstronaut1.png","assets/jumpingAstronaut2.png",
    "assets/jumpingAstronaut3.png","assets/jumpingAstronaut4.png","assets/jumpingAstronaut5.png",
    "assets/jumpingAstronaut6.png")

    star = loadAnimation("assets/star1.png","assets/star2.png","assets/star3.png","assets/star4.png"
    ,"assets/star5.png","assets/star6.png")
    backgroundImage =loadImage("assets/background2.jpg")
    obstacle1 = loadImage("assets/obstacle1.png");
    obstacle2 = loadImage("assets/obstacle2.png");
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    back = createSprite(width/2,height/2);
    back.addImage(backgroundImage);
    back.scale = 4;
    astronaut = createSprite(100,height-300);
    astronaut.addAnimation("runing",runningAstronaut);
    astronaut.scale = 0.4;
    starGroup = new Group()
    }

  function draw() {
    background(0);
    astronaut.y = mouseY
    
    back.velocityX = -3 

    //background
    if (back.x < 220){
      back.x = back.width/2;
      }
    if (starGroup.isTouching(astronaut)){
      starGroup[0].destroy()
      
    }
    
    
    
      spawnObstacles()
      spawningStar()
    drawSprites()
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function spawningStar(){
  if(frameCount%100 === 0){
    starS = createSprite(width,height/2);
    starS.addAnimation("rotating star",star);
    starS.velocityX = -3;
    starS.scale = 0.2;
    starS.y = Math.round(random(100,700));
    starGroup.add(starS);

  }
}

function spawnObstacles(){
  if(frameCount%240 === 0){
    ObstacleS = createSprite(width,height/2)
    rand = Math.round(random (0,2))
    switch(rand){
      case 1:ObstacleS.addImage(obstacle1)
      break;
      case 2:ObstacleS.addImage(obstacle2)
      break;
      default:break;
    }
    ObstacleS.velocityX = -3
    ObstacleS.scale = 0.4
    ObstacleS.y = Math.round(random(100,700))
  } 
}








