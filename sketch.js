function setup() {
  createCanvas(800,600);
  
}

function draw() {
  
  background(220,220,220); // if I put in the the setup, I will see infinite ellipses
  
  fill(255,0,0); //red
  rect(50,50,200,300);
  
  fill(0,0,255); //blue
  rect(50,50,200,100);
  
  fill(255,255,0); //yellow
  rect(100,180,200,100);
  
  ellipse(width/2,height/2,150,150) //the position depends on the sketch (w/x,h/x,w,h)
  ellipse( (width/4)*3, height*0.75, 150, 150)
  

 // ellipse(mouseX,mouseY,50,50); //if I don't put a background, it will do infinite ellipses (it is done anyway, but it's covered)
  line(pmouseX,pmouseY,mouseX,mouseY); // la linea si allunga seguendo il mouse, senza il background possiamo disegnare
 line(pmouseX,pmouseY,50,50); // la linea si allunga a partire da un punto fisso
}