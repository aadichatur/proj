
function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = createSprite(750,350,15,15)
}

function draw() 
{
  background("blue");
  drawSprites()
  if(keyDown("left")){
    ball.x-=5
  }
  if(keyDown("right")){
    ball.x+=5
  }
  if(keyDown("up")){
    ball.y-=5
  }
  if(keyDown("down")){
    ball.y+=5
  }
}




