class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.001,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(13, 232, 112))
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }