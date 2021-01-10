class Roof 
{
    constructor(x,y)
    {
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(this.x, this.y, options)
    }

    display()
    {
        var bobpos=this.body.position;
        var bobObject=this.body.radius(70);
        push()
        translate(bobpos.x, bobpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        pop()
    }
}