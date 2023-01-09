//create a program that enables us to customize the number of squares in a grid

function setup() {//runs once
  createCanvas (windowWidth,windowHeight); //creates a canvas 720x720
//  background(78,99,73);
}

function draw() {//runs in a loop
  fill(78,99,73);
  strokeWeight(1)


  var num = 50; //number of sides in the array
  var sideLen = windowWidth/num; // side length variable

  for(var i=0; i<windowWidth; i+=sideLen){
    for (var j=0; j<windowWidth; j+=sideLen){
      quad(i,j,
           i+sideLen,j,
           i+sideLen,j+sideLen,
           i,j+sideLen);
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
