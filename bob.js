class Bob{
    constructor(x, y){
        var options = {
            restitution: 1.0,
            density: 1.0,
            friction: 1.0,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 40, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke('black');
        fill('#DC143C');
        ellipse(pos.x, pos.y, 40);
    }
}