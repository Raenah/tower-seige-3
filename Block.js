class Block{
    constructor(x, y, width, height){
  
      var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':1.0
    }
  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
  
      World.add(world, this.body);
    }
  
    display()
    {
      if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("pink")
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
  
    else
    {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility -5;
      tint(255,this.visibility);
      pop();
      
    }
  
  }
  
    score(){
      if(this.visibility<0 && this.visibility >-1005){
        score++;
      }
    }
  
  };
  
  
  