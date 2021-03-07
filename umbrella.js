class Umbrella {
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;

        this.image = loadImage("proc41images/images/Walking Frame/walking_1.png");

        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,300,300);
    }
}