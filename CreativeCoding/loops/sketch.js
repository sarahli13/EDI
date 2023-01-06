function setup() {//runs once
  createCanvas (720,720); //creates a canvas 720x720
  background(78,99,73);
}

function draw() {//runs in a loop
  fill(78,99,73);
  strokeWeight(8)
  translate(60,60);//new origin at 60,60
  for(var i=0; i<600; i+=300){
    for (var j=0; j<600; j+=300){
      quad(i,j,
           i+300,j,
           i+300,j+300,
           i,j+300);
    }
  }
  // for(var i=0; i<2; i++){
  //   for (var j=0; j<2; j++){
  //     quad(i*300,j*300,
  //          i*300+300,j*300,
  //          i*300+300,j*300+300,
  //          i*300,j*300+300);
  //   }
  // }
}
