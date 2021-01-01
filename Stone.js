class stone{    
    constructor(x,y,r){
      var options = {
          //isStatic: true,
          //frictionAir: 0.005,
          //friction:1,
          density: 3.0,
          restitution: 0.2
      }
       this.body = Bodies.circle(x,y,r,options)
       
       this.radius = r;
       this.image = loadImage("polygon.png");
       World.add(world,this.body)
    }    
    display(){
        
        //fill("yellow");
        var p = this.body.position;
        var a = this.body.angle;
        
        imageMode(CENTER);
        image(this.image,p.x, p.y, this.radius*2.5, this.radius*2.5);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius)
        
    }
 }