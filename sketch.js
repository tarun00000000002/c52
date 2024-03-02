const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var button,ball,ground,aim;
var score = 0;
var game = true;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  ground = new Ground(500,480,1000,20);
  ground2 = new Ground(10,250,20,500);
  ground3 = new Ground(990,250,20,500);
  ground4 = new Ground(500,20,1000,20);
  aim = new Aim(500,350,50,50)
  aim2 = new Aim(250,250,50,50)
  o1 = new OB(700,150,50,50)
  o2 = new OB(400,150,50,50)
  button = createImg('button.png');
  button.position(20,30);
  button.size(50,50);

  button.mouseClicked(fly);

  
  
  
}


function draw() {
  
  background("pink");
  Engine.update(engine);

  ball.show();
  aim.show();
  aim2.show()
  o1.show();
  o2.show();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();


 textSize(18);
  fill("red");
  text("Score" +score,50,225); 
  
  var collision = Matter.SAT.collides(ball.body, aim.body);
        if (collision.collided) {
          score = score +1
        }
        var collision = Matter.SAT.collides(ball.body, aim2.body);
        if (collision.collided) {
          score = score +2
        }
        if(score>=5){
          button.remove();
          background("pink")
          textSize(50);
          fill("red");
          text("YOU WIN",500,250);
        }
      

        var collision = Matter.SAT.collides(ball.body, o2.body);
        if (collision.collided) {
          score = score -2
          
        }
        var collision = Matter.SAT.collides(ball.body, o1.body);
        if (collision.collided) {
          score = score -1
        }
        if(score<=-1){
          gameOver()
        }
        
        
        
        
  

  drawSprites()
}
function fly(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
 // game =false;
}
function gameOver() {
 button.remove();
 background("pink")
  textSize(50);
 fill("red");
  text("YOU LOST",500,250);
  
}