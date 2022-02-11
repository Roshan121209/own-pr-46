var rocketShip, rocketShipImg,  backgroundImg, ufo, meteors, background1, meteorsImg, ufoImg;
var stars, starsImg;
var meteorsG, ufoG, starsG;

var PLAY = 1;
var END = 0;
var gameState = 0;

function preload () {
  backgroundImg = loadImage("space.jpg");
  rocketShipImg = loadImage("Rocket ship.png");
  ufoImg = loadImage("Ufo.png");
  meteorsImg = loadImage("Metors.png");
  starsImg = loadImage("Star.png")
}

function setup() {
  createCanvas(800, 400);

  background1 = createSprite(400,200, 800, 400);
  background1.addImage(backgroundImg);
  background1.velocityX = -5;

  rocketShip= createSprite(40,20, 50, 50);
  rocketShip.addImage(rocketShipImg);
  rocketShip.scale = 0.1

  meteorsG = new Group();
  ufoG = new Group();
  starsG = new Group();

}

function draw() {
  background(220);

  createMeteors();
  createUfo();
  createStars();

  

  if (gameState === PLAY){
    if(background1.x < 0){
      background1.x = background1.width/8;
    }

    //code to create movements for the rocket ship.

  if (keyIsDown(DOWN_ARROW)){
    rocketShip.y = rocketShip.y + 10;
  }

  if (keyIsDown(UP_ARROW)){
    rocketShip.y = rocketShip.y - 10;
  }

  if (keyIsDown(RIGHT_ARROW)){
    rocketShip.x = rocketShip.x + 10;
  }

  if (rocketShip.x > 800){
    rocketShip.x = 750;
  }

  if (meteorsG.isTouching(rocketShip)){
    meteorsG.destroy();
    gameState = END;
  }

}

  if (gameState === END){

}


  drawSprites();

}

function createMeteors() {
  
    if (frameCount % 80 == 0) {
    var meteors = createSprite(800, Math.round(random(50, 350), 20, 20));
    meteors.addImage(meteorsImg);
    meteors.scale = 0.1;
    meteors.velocityX = -20;
    meteors.lifetime = 270;
    meteorsG.add(meteors);
   }
}

function createUfo() {
  
  if (frameCount % 100 == 0) {
  var ufo = createSprite(800, Math.round(random(50, 350), 20, 20));
  ufo.addImage(ufoImg);
  ufo.scale = 0.2;
  ufo.velocityX = -20;
  ufo.lifetime = 270;
  ufoG.add(ufo);
 }
}

function createStars() {
  
  if (frameCount % 175 == 0) {
  var stars = createSprite(800, Math.round(random(50, 350), 50, 50));
  stars.addImage(starsImg);
  stars.scale = 0.02;
  stars.velocityX = -20;
  stars.lifetime = 270;
  starsG.add(stars);
 }
}

