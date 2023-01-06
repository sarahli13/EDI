function setup() {//runs once
  createCanvas (720,720); //creates a canvas 720x720
  background(78,99,73);
}

function draw() {//runs in a loop
  fill(78,99,73);
  strokeWeight(8)
  translate(60,60);//new origin at 60,60
  quad(0,0,
       300,0,
       300,300,
       0, 300);
  quad(300,0, //add 300 in x direction
       600,0,
       600,300,
       300, 300);
  quad(0,300,
       300,300,
       300,600,
       0, 600);
  quad(300,300, //add 300 in x direction
       600,300,
       600,600,
       300, 600);
}
