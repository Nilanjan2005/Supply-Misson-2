class Box{
    constructor(x,y,width,height){
      var options ={
          'isStatic' : true
          
      }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        pop();
    }
}