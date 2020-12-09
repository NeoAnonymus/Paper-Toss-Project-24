class ball{
    constructor(x,y,radius){
        var option={
            isStatic:false
            ,restitution:0.3
            ,density:12.2
            ,friction:0.5
        }
        this.body=Matter.Bodies.circle(x,y,radius,option)
        this.radius = radius
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        
        fill(255)
        circle(pos.x,pos.y,this.radius)
    }   
}