let butterfly;
let pxl = 10;    //pixel size

function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();

  butterfly = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000

}

function draw() {

  butterfly.position(mouseX-270, mouseY-270);

  heart0()
  heart1()

}

function heart0() {

  push();

  //center points for our heart
  let xCenter = width/2;
  let yCenter = height/2;

  //center points for our drawing with rectMode(CORNER)
  let x = xCenter-pxl/2;
  let y = yCenter;

  fill("#FF0087");
  rect(x-2*pxl,y-4*pxl,5*pxl,7*pxl);
  rect(x-6*pxl,y-4*pxl,4*pxl,4*pxl);
  rect(x+3*pxl,y-4*pxl,4*pxl,4*pxl);
  rect(x-4*pxl,y-6*pxl,3*pxl,2*pxl);
  rect(x+2*pxl,y-6*pxl,3*pxl,2*pxl);
  rect(x-4*pxl,y,2*pxl,2*pxl);
  rect(x+3*pxl,y,2*pxl,2*pxl);
  rect(x-5*pxl,y,pxl,pxl);
  rect(x-5*pxl,y-5*pxl,pxl,pxl);
  rect(x-1*pxl,y-5*pxl,pxl,pxl);
  rect(x+1*pxl,y-5*pxl,pxl,pxl);
  rect(x+5*pxl,y-5*pxl,pxl,pxl);
  rect(x+5*pxl,y,pxl,pxl);
  rect(x-3*pxl,y+2*pxl,pxl,pxl);
  rect(x+3*pxl,y+2*pxl,pxl,pxl);
  rect(x-2*pxl,y+3*pxl,pxl,pxl);
  rect(x+2*pxl,y+3*pxl,pxl,pxl);
  rect(x,y+5*pxl,pxl,pxl);
  rect(x-1*pxl,y+3*pxl,3*pxl,2*pxl);

  pop();

}

function heart1() {

  push();

  //center points for our heart
  var xCenter = width/2;
  var yCenter = height/2;

  //center points for our drawing with rectMode(CORNER)
  var x = xCenter-pxl/2;
  var y = yCenter;

  fill("#E400FF");
  rect(x-2*pxl,y-4*pxl,5*pxl,7*pxl);
  rect(x-6*pxl,y-4*pxl,4*pxl,4*pxl);
  rect(x+3*pxl,y-4*pxl,4*pxl,4*pxl);
  rect(x-4*pxl,y-6*pxl,3*pxl,2*pxl);
  rect(x+2*pxl,y-6*pxl,3*pxl,2*pxl);
  rect(x-4*pxl,y,2*pxl,2*pxl);
  rect(x+3*pxl,y,2*pxl,2*pxl);
  rect(x-5*pxl,y,pxl,pxl);
  rect(x-5*pxl,y-5*pxl,pxl,pxl);
  rect(x-1*pxl,y-5*pxl,pxl,pxl);
  rect(x+1*pxl,y-5*pxl,pxl,pxl);
  rect(x+5*pxl,y-5*pxl,pxl,pxl);
  rect(x+5*pxl,y,pxl,pxl);
  rect(x-3*pxl,y+2*pxl,pxl,pxl);
  rect(x+3*pxl,y+2*pxl,pxl,pxl);
  rect(x-2*pxl,y+3*pxl,pxl,pxl);
  rect(x+2*pxl,y+3*pxl,pxl,pxl);
  rect(x,y+5*pxl,pxl,pxl);
  rect(x-1*pxl,y+3*pxl,3*pxl,2*pxl);

  pop();

}
