var iss, spacecraft, bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg = loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  scimg = loadImage("images/spacecraft1.png");
  scimg1 = loadImage("images/spacecraft1.png");
  scimg2 = loadImage("images/spacecraft2.png");
  scimg3 = loadImage("images/spacecraft3.png");
  scimg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 130);
  iss.addImage(issimg);
  iss.scale = 0.75;
}

function draw() {
  background(bg); 
  spacecraft.addImage(scimg);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2;

  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg1);
  }  

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft = spacecraft.x-1;
  } 

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft = spacecraft.x+1;
  }  

  if(spacecraft.y <=(iss.y+70) && spacecraft.x <=(iss.x-10)){
    hasDocked = true;
    textSize(25)
    fill("white");
    text("Docking Successful!",400,150);
  }  

  drawSprites();
}