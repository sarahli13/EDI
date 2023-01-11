//create a program that enables us to customize the number of squares in a grid
let gif;

function preload(){
  gif = loadImage('assets/AiBG.gif');
}

function setup() {//runs once
  createCanvas (windowWidth,windowHeight); //creates a canvas 720x720
//  background(78,99,73);
}
function draw() {//runs in a loop
  fill(78,99,73);
  strokeWeight(1);


  var num = 30; //number of sides in the array
  var sideLen = windowWidth/num; // side length variable

  translate(-150,-150);
  for(var y=0; y < 2 * windowWidth; y+=sideLen){
    for (var x=0; x < 2 * windowWidth; x+=sideLen){
      image(gif, x, y, windowWidth/num, windowWidth/num); //img for image
      // quad(i,j,
      //      i+sideLen,j,
      //      i+sideLen,j+sideLen,
      //      i,j+sideLen);
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

function windowResized(){//allow window refresh with window resizing
  resizeCanvas(windowWidth, windowHeight);


}
