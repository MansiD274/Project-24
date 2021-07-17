class Paper {
    constructor(x, y) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2,
          isStatic:false
      }
      this.body = Bodies.eclipse(x, y, 50,50);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      eclipse(pos.x,pos.y,this.width,this.height)
    }
    
}