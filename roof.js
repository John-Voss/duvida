class Roof {
    constructor(){
        var options = {
            isStatic: true,
            //restitution: 1,
        }
        this.body = Bodies.rectangle(400, 50, 350, 50, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(4);
        stroke('black');
        fill('#8B008B');
        rect(pos.x, pos.y, 350, 50);
    }
}