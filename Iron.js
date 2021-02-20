class Iron{
    constructor(x, y) {
        var options = {
          restitution:0.8,
          friction:10,
          density:1
        }
        this.body = Bodies.rectangle(x, y,70, 50, options);
        this.width =70;
        this.height =50;
        
        World.add(world, this.body);
      }
      display(){
    
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(255, 173, 75);
        rect(0,0, this.width, this.height);
        pop();
      }
}