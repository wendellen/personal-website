//ripples
var h = [10];
var r = [10];

function setup(){

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  background(181,255,244);
  smooth();
  colorMode(HSB);
  strokeWeight(40);
  noFill();

  for(var i=0;i<20;i++) {
    h[i] = map(i, 0, 50, 150, 360);
    r[i] = i*100;
  }

  butterfly = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000

}

function draw() {

  butterfly.position(mouseX-270, mouseY-270);

  translate(width/2,height/2);
  for(var i=0;i<20;i++) {
      stroke(h[i],30,100);
     ellipse(0,0,r[i],r[i]);
      r[i]=r[i]+5;
  if(r[i]>width*1.3) r[i]=0;
  }

}
