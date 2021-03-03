class Cradel{
    constructor(x, y, radius,maxSides) {
      var options = {
      
      
        'is Static':true
    }
    this.body=Bodies.circle(x,y,radius,options,maxSides)
      this.radius = radius;
      this.maxSides = maxSides;
     
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)

      fill("pink");
        circle(0,0,this.radius,this.maxSides);
      pop();
    }
  };