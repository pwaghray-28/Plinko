class Plinko{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic:true})
        World.add(world,this.body)
        this.r = radius
    }
    display(){
        var pos = this.body.position
        push()
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
    }
}