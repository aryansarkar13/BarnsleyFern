var n=0;
var c=4;
function setup() {
  createCanvas(400, 400);
	background(n%256);
}

function draw() {
  //var n=0;
 
  translate(200,200);
	var r,phi;
	colorMode(HSB);

	if(n<4700)
	{
	r=c*sqrt(n);
	phi=n*2.3998277;
	
	var x=r*cos(phi);
	var y=r*sin(phi);
	noStroke();
	fill(phi%256,255,255);
	ellipse(x,y,4,4);
    
			n++;
	}
	

	
}