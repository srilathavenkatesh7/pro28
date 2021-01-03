class Mango{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':1
        }
        this.body=Bodies.circle(x,y,35,options);
        this.x=x;
        this.y=y;
        this.image=loadImage ("mango.png");
        World.add (world,this.body);
    }


display (){
 push ();
 imageMode (CENTER);
translate (this.body.position.x,this.body.position.y)
image (this.image,0,0,35,35);
pop ();
}
}