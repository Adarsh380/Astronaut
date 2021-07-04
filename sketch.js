var bg, eat, sleep, brush, gym1, gym2, drink, bath, move;
var astronaut;

function preload() {

  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  move = loadAnimation("images/move1.png", "images/move2.png");
}

function setup() {

  createCanvas(800,400);
  astronaut = createSprite(300, 250);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  createEdgeSprites();
}

function draw() {

  background(bg);

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym1);
    astronaut.changeAnimation("gymming");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("M")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }

  drawSprites();
}