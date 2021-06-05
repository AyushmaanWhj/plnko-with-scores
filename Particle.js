class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        if(pos.y>640&&pos.y<645){
    
    if(pos.x>5&&pos.x<70){
        score=score+500 
        count=count+1
    }
    if(pos.x>85&&pos.x<150){
        score=score+300 
        count=count+1
    }
    if(pos.x>165&&pos.x<250){
        score=score+200 
        count=count+1
    }
    if(pos.x>255&&pos.x<655){
        score=score+100
        count=count+1 
    }

    if(pos.x>565&&pos.x<650){
        score=score+200 
        count=count+1
    }
    if(pos.x>645&&pos.x<730){
        score=score+300 
        count=count+1
    }
    if(pos.x>725&&pos.x<810){
        score=score+300 
        count=count+1
    }
}


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};