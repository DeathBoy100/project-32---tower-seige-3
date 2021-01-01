
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, polysprite, polybody, polyimg;
var score = 0
var backimg = 0;
var response, responseJSON, datetime, hour;

function preload()
{
    polyimg=loadImage("polygon.png");
    getTime();
	
}

function setup(){
    createCanvas(900,700);
   
    engine = Engine.create();
    world = engine.world;
    
    
    box1 = new Box(350,575,30,40)
    box2 = new Box(380,575,30,40)
    box3 = new Box(410,575,30,40)
    box4 = new Box(440,575,30,40)
    box5 = new Box(470,575,30,40)
    box6 = new Box(380,575,30,40)
    box7 = new Box(410,575,30,40)

    box8 = new Box(350,535,30,40)
    box9 = new Box(380,535,30,40)
    box10 = new Box(410,535,30,40)
    box11 = new Box(440,535,30,40)
    box12 = new Box(440,535,30,40)

    box13 = new Box(374,495,30,40)
    box14 = new Box(404,495,30,40)
    box15 = new Box(434,495,30,40)

    box16 = new Box(405,455,30,40)
    
    boox1 = new Box(625,355,30,40)
    boox2 = new Box(655,355,30,40)
    boox3 = new Box(685,355,30,40)
    boox4 = new Box(715,355,30,40)
    boox5 = new Box(745,355,30,40)

    boox6 = new Box(655,315,30,40)
    boox7 = new Box(685,315,30,40)
    boox8 = new Box(715,315,30,40)

    boox9 = new Box(685,275,30,40)

    ground = new Ground(420,690,1200,20);
    ground1 = new Ground(410,600,260,10) 
    ground2 = new Ground(700,380,250,10)

    poly = new stone(70,300,30, 39);

    
    strokeWeight(5)


    slingshot = new throws(poly.body,{x:100,y:350})
    
}

function draw(){
  
// getTime()   

  
 Engine.update(engine);

 box1.display(1)
 box2.display(1)
 box3.display(1)
 box4.display(1)
 box5.display(1)
 box6.display(1)
 box7.display(1)
 box8.display(2)
 box9.display(2)
 box10.display(2)
 box11.display(2)
 box12.display(2)
 box13.display(3)
 box14.display(3)
 box15.display(3)
 box16.display(4)

 boox1.display(1)
 boox2.display(1)
 boox3.display(1)
 boox4.display(1)
 boox5.display(1)
 boox6.display(2)
 boox7.display(2)
 boox8.display(2)
 boox9.display(3)
 ground.display()
 ground1.display()
 ground2.display()
 poly.display();
 slingshot.display()

 box1.Score()
 box2.Score()
 box3.Score()
 box4.Score()
 box5.Score()
 box6.Score()
 box7.Score()
 box8.Score()
 box9.Score()
 box10.Score()
 box11.Score()
 box12.Score()
 box13.Score()
 box14.Score()
 box15.Score()
 box16.Score()

 boox1.Score()
 boox2.Score()
 boox3.Score()
 boox4.Score()
 boox5.Score()
 boox6.Score()
 boox7.Score()
 boox8.Score()
 boox9.Score()
 
 textSize(20)
 stroke("white");
 text("SCORE : "+ score,450,50)
 
}

function mouseDragged(){
	Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
	
}


function mouseReleased(){
	slingshot.fly();
	
}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.setPosition(poly.body, {x:100, y:350});
        slingshot.attach(poly.body);
    }
}       

async function getTime(){

    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json()
    var datetime = responseJSON.currentDateTime
    var hour = datetime.slice(11,13) 
    if(hour >= 06 && hour <= 15){
        background("lightblue") 
    } else {
        background("black")
        
    }
   console.log(JSON)

}