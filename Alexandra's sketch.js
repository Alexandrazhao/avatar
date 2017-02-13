/**
*Alexandra Zhao <yz3514@bard.edu>
*Feb 12 2017
*IDEA 135
*Avatar Sketch
*i did it by myself
*I am trying to draw a abstract painting and with some classical color. At the same time, the axial symmetry can make this painting more classical but interesting. Compare with the textual nature of the code, running a program is more colorful and interesting. It is like a discovery, when you finish writing the code, you cannot wait to see your program on the webside. 
*/

function setup() {
createCanvas(500,500);
strokeWeight(8)  

    
  
}

function draw() {
background(200);
fill(255,0,0);
ellipse(10,10,20,20);
fill(0,255,0);
ellipse(10,490,20,20);
    fill(0,0,255);
ellipse(490,10,20,20);
    fill(100,100,233);
ellipse(490,490,20,20);
    if(mouseIsPressed) {
    fill(0);} else{fill(200);}
        ellipse(mouseX, mouseY,50,50);
    fill(200,30,50);
    rect(30,30,50,50);
    fill(50,50,50);
    rect(420,420,50,50);
    fill(0,200,0);
    rect(30,420,50,50);
    fill(233,233,233);
    rect(420,30,50,50);
    
    
    
    
   
   
}