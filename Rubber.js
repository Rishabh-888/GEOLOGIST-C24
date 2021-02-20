class Rubber{
    constructor(x, y) {
        var options = {
            restitution:1.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;
        World.add(world, this.body);
      }
      display(){
    
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("black")
        fill("red");
        ellipse(0, 0, this.radius);
        pop();
      }
}