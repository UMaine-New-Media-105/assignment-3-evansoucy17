//Assignment 3.1 
//Evan Soucy
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
  
  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
 
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  
  
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
 
  background("skyblue");
  fill ("brown")
  strokeWeight (0)
  rect (0,350,400,50)
 frog (mouseX,300,0.14); //CATCHER

 
  function frog(x, y, size) {
  translate(x, y);
  scale (size);
     fill ("darkolivegreen")
    ellipse (110,300,50,135) //left back leg 
    ellipse (290,300,50,135) // right back leg
     fill ("darkolivegreen")
    ellipse (200,285,200,150)//body
    ellipse(200, 200, 200, 100);//head
    fill("black");
    ellipse(150, 160, 50, 50);//left eye
    ellipse(250, 160, 50, 50);//right eye
    fill("white");
    ellipse(200, 225, 100, 25);//mouth
     fill ("darkolivegreen")
    ellipse (160,340,50,75)
    ellipse (240,340,50,75)
  
}
  
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
