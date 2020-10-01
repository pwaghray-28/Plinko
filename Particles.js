class Particles{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{restitution:0.4})
        World.add(world,this.body)
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.r = radius
    }
    display(){
        var pos = this.body.position
        push()
        ellipseMode(CENTER)
        fill(this.color)
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
    }
}