var frect,mrect;

function setup() {
  createCanvas(1200,1200);
  frect = createSprite(100, 100, 50, 80);
 frect.velocityY =5;
  mrect = createSprite(100, 800, 80, 30);
  mrect.velocityY= -5;
  
}

function draw() {
  background("pink"); 

  if((mrect.x-frect.x <= frect.width/2 + mrect.width/2 )
  &&(frect.x-mrect.x <= frect.width/2 + mrect.width/2 )
  && (frect.y-mrect.y <= frect.height/2 + mrect.height/2)
  && (mrect.y-frect.y <= frect.height/2 + mrect.height/2)) {
    frect.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else{
    frect.shapeColor = "green";
    mrect.shapeColor = "green";   
  }

  if ((mrect.x-frect.x <= frect.width/2 + mrect.width/2 )
  &&(frect.x-mrect.x <= frect.width/2 + mrect.width/2 )){
    frect.velocityX = frect.velocityX *(-1);
    mrect.velocityX = frect.velocityX *(-1); 
  }
  if ((mrect.y-frect.y <= frect.height/2 + mrect.height/2 )
  &&(frect.y-mrect.y <= frect.height/2 + mrect.height/2 )){
    frect.velocityY = frect.velocityY *(-1);
    mrect.velocityY = frect.velocityY *(-1); 
  }
  drawSprites();
}