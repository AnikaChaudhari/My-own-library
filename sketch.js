var fixed,moving;

function setup(){

createCanvas(1200,800);
fixed=createSprite(400,100,50,80);
fixed.shapeColor="green";
fixed.debug=true;
moving=createSprite(400,800,80,30);
moving.shapeColor="green";
moving.debug=true;

moving.velocityX=-5;
fixed.velocityX=5;


}
function draw(){
background(0);
moving.x=World.mouseX;
moving.y=World.mouseY;
bounceOff(moving,fixed)


drawSprites();
}

function bounceOff(o1,o2)
{
  if(o1.x-o2.x<o1.width/2+o2.width/2
    && o2.x-o1.x < o1.width/2+o2.width/2)
{
  o1.velocityX=o1.velocityX*(-1)
  o2.velocityX=o2.velocityX*(-1)
}
if(o1.y-o2.y<o1.height/2+o2.height/2&&
o2.y-o1.y<o1.height/2+o2.height/2)
{o1.velocityY=o1.velocityY*(-1)
  o2.velocityY=o2.velocityY*(-1)

}  
}
