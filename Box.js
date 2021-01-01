class Box extends BaseClass {
  constructor(x, y, width, height){
    
    super(x,y,width, height);

  }

  Score(){
    
    if(this.Visibility < 0 && this.Visibility > -105){
      if (this.score === 0){  
      score++;
      this.score=this.score+1;
      }
        //console.log(score)
    }
  }


  display(x){ 
    if(this.body.speed < 3){
      super.display(x);
     }
     else{
      
       World.remove(world, this.body);
       push();
       this.Visibility = this.Visibility - 5;
       tint(255,this.Visibility);    
       pop();

       

     }
     
  }
}


