function setup(){
  createCanvas(windowWidth, windowHeight);
}

function heart(s, r, g, b) {
  smooth();
  noStroke();
  fill(r, g, b);
  beginShape();
  vertex(50*s, 15*s);
  bezierVertex(50*s, -5*s, 90*s, 5*s, 50*s, 40*s);
  vertex(50*s, 15*s);
  bezierVertex(50*s, -5*s, 10*s, 5*s, 50*s, 40*s);
  endShape();
}

function draw(){
  heart(5, 255, 0, 0);

}
