var car;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  speed = random(55,140);
  weight = random(400,3000);
  car.velocityX = speed;
}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * speed * height * speed/22509;
    if(deformation > 180){
      car.shapeColor = ("red");
    }
    if(deformation < 180 && deformation > 80){
      car.shapeColor = ("yellow");
    }
    if(deformation < 80){
      car.shapeColor = ("green");
    }
  }
  drawSprites();
}