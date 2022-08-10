var player, playerStaticImg;
var goal,goalImg;
var ball, ballImg
var bg;
var playerImg, playerOppoImg, playerOppoImg1;
var playerOppo,playerOppo1;

// other players
// ball sprite movable
// bg pic

function preload(){
//bg=loadImage("21095964(1).jpg");

ballImg=loadImage("p1.png");
goalImg=loadImage("GoalNETT(1).png");
playerImg=loadAnimation("animationKick(1).png","animationKick(2).png","animationKick(3).png","animationKick(4).png");
playerStaticImg=loadAnimation("animationKick(1).png");
playerOppoImg= loadAnimation("animationKick(1).png","animationKick(2).png","animationKick(3).png","animationKick(4).png");
playerOppoImg1= loadAnimation("animationKick(1).png","animationKick(2).png","animationKick(3).png","animationKick(4).png");
}
function setup(){
  createCanvas(windowWidth,700)
  
player=createSprite(140,350,100,100)
player.addAnimation("static",playerStaticImg);
player.scale=2.9;

goal=createSprite(1100,150,410,50);
goal.addImage(goalImg)
goal.scale=1;
//goal.debug=true;
goal.setCollider("rectangle",0,0,400,30)

ball=createSprite(750,610,50,50);
ball.addImage(ballImg);
ball.scale=0.15;

}
function draw (){
  background("darkGreen");
 // goal.visible=false;
 
  console.log(mouseX,mouseY);
if (keyIsDown(RIGHT_ARROW)){
    player.x+=10;
}
if (keyIsDown(LEFT_ARROW)){;
  player.x-=10
}
if (keyIsDown(DOWN_ARROW)){
  player.y+=10
}
if (keyIsDown(UP_ARROW)){
  player.y-=10
}
if(keyDown("space") && player.isTouching(ball)){
 // player.addAnimation("kicking",playerImg)
 // player.changeAnimation("kicking",playerImg)
  ball.velocityX=3;
  ball.velocityY=-3;

}
if (ball.collide(goal)){
  ball.velocityX=0
  ball.velocityY=0
}

  drawSprites();
  text(mouseX+ ","+mouseY, mouseX,mouseY);

}

