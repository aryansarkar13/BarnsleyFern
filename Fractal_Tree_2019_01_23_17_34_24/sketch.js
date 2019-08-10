var slider;

function setup() 

{
   
createCanvas(windowWidth,windowHeight);
	 
slider=createSlider(6,PI*3,PI/6);

}

function draw()

{
    
background(51);
    
stroke(300);
	  
a=slider.value();
	  
translate(200,height);
    
branch(100);

}

function branch(len)

{
	
line(0,0,0,-len);
	
translate(0,-len);

	
if(len>4)
	
{
push();
	 
rotate(a);
	 
branch(len*0.67);
		
pop();
		
push();
	 
rotate(-a);
	 
branch(len*0.67);
		
pop();
	
}

}

	
