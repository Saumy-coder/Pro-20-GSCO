var edges,rightEdge,leftEdge,topEdge,bottomEdge;

function setup() {
  rightEdge=createSprite(800,200,10,400)
  rightEdge.visible=false;
  leftEdge=createSprite(10,200,10,400)
  leftEdge.visible=false;
  topEdge=createSprite(400,0,800,10)
  topEdge.visible=false;
  bottomEdge = createSprite(400,400,800,10)
  bottomEdge.visible=true;

  edges=[leftEdge,rightEdge,topEdge,bottomEdge]
}

function isTouching(object1,object2) {
    if (abs(object1.x - object2.x)< object2.width/2 + object1.width/2
      && abs(object1.y - object2.y) < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }

function bounceOffEdges(object01){
  if(Math.abs(object01.x-edges[0].x)<object01.width/2+edges[0].width/2){
    movingRect.velocityX=movingRect.velocityX*-1
  }
  if(Math.abs(object01.x-edges[1].x)<object01.width/2+edges[1].width/2){
    movingRect.velocityX=movingRect.velocityX*-1
  }
  if(Math.abs(object01.y-edges[2].y)<object01.height/2+edges[2].height/2){
    movingRect.velocityY=movingRect.velocityY*-1
  }
  if(Math.abs(object01.y-edges[3].y)<object01.height/2+edges[3].height/2){
    movingRect.velocityY=movingRect.velocityY*-1
  }
}
  