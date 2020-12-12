//varibles
var bullet;
var wall,thickness;
var speed;
var weight;


function setup() {
  //creates canvas
  createCanvas(1600,400);
  
  //sets speed,weight and thickness randomly
  speed=random(223,321);
  weight=random(30,52);
  thikness=random(22,83);

  //creates bullet sprite
  bullet=createSprite(50,200,50,10);
  //defines veloity x
  bullet.velocityX=speed;
  //sets the debug statement to false
  bullet.debug=false;
  //color to the bullet
  bullet.shapeColor="blue";

  //creates wall sprite
  wall=createSprite(1200,200,thickness,height/2);
  //gives the color to wall
  wall.shapeColor="white";
}


function draw() {
  //background
  background(0);
  
  //bullet touches the wall with random speeds and weights and gives color with random speeds and weights
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation > 10)
    {
      bullet.shapeColor=color("red");
    }

    if(deformation < 180 && deformation > 100)
    {
      bullet.shapeColor=color("yellow");
    }

    if(deformation < 100)
    {
      bullet.shapeColor=color("green");
    }
  }
   
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);


  if(damage>10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

  if(hasCollided(wall,bullet)) {
    textSize(100);
    text("collided",500,300);
  }

  //helps the sprites to display
  drawSprites();
}


function hasCollided(bullet,wall) {
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge >= wallLeftEdge)
{
  return true
}
return false
}