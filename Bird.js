class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = []

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    

    if(this.body.position.x>200&&this.body.velocity.x>10){
      var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }

    for(var q = 0;q<this.trajectory.length;q++ ){
      image(this.smokeimage,this.trajectory[q][0],this.trajectory[q][1])
    } 

    super.display();
  }
}