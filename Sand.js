class Sand{
    constructor(x, y, radius) {
        var options = {
            restitution:0.8,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
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
        fill("#90EE90");
        ellipse(0, 0, this.radius);
        pop();
      }
}