class Drop {

    constructor(x,y) {

        var options = {
            "restitution": 0.2,
            "friction": 0.8,
            "density": 1,

            "isStatic": false,
        }

        this.body = Bodies.circle(x,y,3,options);
        
        World.add(world, this.body);
    }
    
    display() {

        //console.log(this.body);

        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,6,6);
    }
}