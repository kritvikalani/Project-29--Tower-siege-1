class Polygon{
    constructor(x,y,radius) {
        var options= {
            isStatic: false,
            restitution: 0.5,
            friction: 0.2,
            density: 1
        }
    this.body= Bodies.circle(x,y,radius,options);
    this.body.radius= radius

    this.image= loadImage("polygon.png")

    World.add(world,this.body)
    }
    display() {
        var pos= this.body.position
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,this.body.radius*2,this.body.radius*2)
    }
}