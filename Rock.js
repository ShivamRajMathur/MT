class Rock{
    constructor(x, y, r){
     
    
  var options = {
			isStatic:false,
			restitution :0,
            friction :1,
            density: 1.2
			}
            this.x = x;
            this.y = y;
            this.r = r
            this.image = loadImage("images/stone.png")  
            this.body = Bodies.circle(this.x, this.y, this.r/2, options);
                  
            World.add(world, this.body)      
            
    
}
fly(){
    this.sling.bodyA = null
} 

display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("white");
    imageMode(CENTER)
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
          
}
}