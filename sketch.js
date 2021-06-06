const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var  iss, spacecraft; 
var hasDocked= false;
var issImg, spacecrafImg1,spacecrafImg2,spacecrafImg3,spacecrafImg4;

function preload(){
issImg= loadImage("images/iss.png");
spacecrafImg1= loadImage("images/spacecraft1.png");
spacecrafImg2= loadImage("images/spacecraft2.png");
spacecrafImg3= loadImage("images/spacecraft3.png");
spacecrafImg4= loadImage("images/spacecraft4.png");
bg= loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  iss= createSprite(600, 200, 50, 50);
  iss.addImage(issImg);

  spacecraft = createSprite(800,600);
  spacecraft.addImage(spacecrafImg1);
  spacecraft.scale= 0.2;
}

function draw(){
background(bg,);

if(!hasDocked){
 spacecraft.x= 535,600;
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecrafImg3);
    spacecraft.x= spacecraft.x -2;
    spacecraft.y = spacecraft.y;
  }

if(keyDown(RIGHT_ARROW)){
  spacecraft.addImage(spacecrafImg4);
  spacecraft.x= spacecraft.x +2;
  spacecraft.y = spacecraft.y;
}

if(keyDown(UP_ARROW)){
  spacecraft.addImage(spacecrafImg2);
  spacecraft.y = spacecraft.y-2;
}
}

  if(spacecraft.y <=303){
    hasDocked= true;
    spacecraft.y = 303;
    stroke("white");
    strokeWeight(6);
    fill("grey");
    textSize(25);
    text("DOCKING SUCCESSFUL!!" , 500,600);

  }

  drawSprites();
}