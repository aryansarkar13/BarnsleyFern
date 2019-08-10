var x=0;
var y=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
function nextPoint()
{ var nextX;
  var nextY;
  var r=random(1);
  
  if(r<0.01)
  {
   nextX=0;
   nextY=0.16*y;
  }
  
  else if(r<0.86)
  {
   nextX=0.85*x + 0.04*y;
   nextY=-(0.04)*x + 0.85*y + 1.6;
  }
  
  else if(r<0.93)
  {
   nextX=0.2*x - 0.26*y;
   nextY=0.23*x + 0.22*y + 1.6;
  }
  
  else 
  {
   nextX=-(0.15)*x + 0.28*y;
   nextY=0.26*x + 0.24*y + 0.44;
  }
  x=nextX;
  y=nextY;
}
  
function drawPoint() {
  
  stroke(0,255,0);
  strokeWeight(1);
  var px=map(x,-8,8,0,width);
  var py=map(y,0,12,height,0);
  point(px,py);
}
function draw()
{
  for(var i=0;i<=20;i++)
  {
    drawPoint();
    nextPoint();
  }
}
  
 
