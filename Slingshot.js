class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png"); 
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(71,35,0)
            strokeWeight(4);
            if(pointA.x<180){
            line(pointA.x-20, pointA.y+15, pointB.x+30, pointB.y-25);
            line(pointA.x-20, pointA.y+15, pointB.x-10, pointB.y-25);
            image(this.sling3,pointA.x-25,pointA.y,10,20);
        }
        else{
            line(pointA.x+20, pointA.y+15, pointB.x+30, pointB.y-25);
            line(pointA.x+20, pointA.y+15, pointB.x-10, pointB.y-25);
            image(this.sling3,pointA.x+25,pointA.y,10,20);
        }
            image(this.sling1,200,25);
            image(this.sling2,170,25);
        }    
    }
    
}