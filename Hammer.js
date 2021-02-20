class Hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':25,
            'density':80
        }
        this.body = Bodies.rectangle(x, y, 150, 20, options);
        this.width = 150;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
    
        var pos =this.body.position;
        var angle=this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(5);
       stroke(182, 255, 0);
       fill(0, 231, 254);
        rect(0,0, this.width, this.height);
        pop();
      }
}