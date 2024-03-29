//Assignment 3.4
//Evan Soucy

let x;
let start;
let speedY;
let y;
let flyFalling=false
let fly
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.

  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
    x=random (350) //so the sprite falls at a random point on the x-axis
  start=-25
  y=random (400)
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
    y = y + speedY;
}

function draw() {
  background("skyblue"); // BACKGROUND
  fill("brown"); //FLOOR
  strokeWeight(0);
  rect(0, 350, 400, 50);
  if (flyFalling) {
    drawFly(x,start, 0.14);
     start=start+speedY
  }
  if (start>350) {
    flyFalling=false
    start=0
  }
  
  frog(mouseX, 300, 0.14); //CATCHER


 
    
   if (fly >= height - 0.14) {
      // Reset the seed to the top of the canvas
      fly = 0;
      flyFalling = false;
    }
  }

  function frog(x, y, size) {
    push();
    translate(x, y);
    scale(size);
    fill("darkolivegreen");
    if (mouseIsPressed) {
      ellipse(110, 200, 50, 135); //left back arm
      ellipse(290, 200, 50, 135);
    } else {
      ellipse(110, 300, 50, 135); //left back arm
      ellipse(290, 300, 50, 135); // right back arm
    }
    fill("darkolivegreen");
    ellipse(200, 285, 200, 150); //body
    ellipse(200, 200, 200, 100); //head
    fill("yellow");
    if (mouseIsPressed) {
      ellipse(150, 160, 50, 50); //left eye
      ellipse(250, 160, 50, 50); //right eye
    } else {
      fill("black");
      ellipse(150, 160, 50, 50); //left eye
      ellipse(250, 160, 50, 50); //right eye
    }
    fill("white");
    ellipse(200, 225, 100, 25); //mouth
    fill("darkolivegreen");
    ellipse(160, 340, 50, 75);
    ellipse(240, 340, 50, 75);
    pop();
}
  

  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  function drawFly (x, y, size) {
    push();
  translate(x, y);
  scale (size);
  strokeWeight (5)
  fill ('grey')
  ellipse (200,200,100,100)
  fill ('white')
  ellipse (130,160,100,50)
  ellipse (270,160,100,50)
  strokeWeight (1)
  ellipse(225, 200, 35, 35)
  ellipse (180, 200, 35,35)
  fill ("black")
  ellipse(225, 200, 25, 25)
  ellipse(180, 200, 25, 25)
  strokeWeight (5)
  line(150, 200, 100, 220);
  line(150, 220, 100, 250);
  line(250, 200, 300, 220);
  line(250, 220, 300, 250);
  pop();
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.

function happyFrog(x, y, size) {
    translate(x, y);
    scale(size);
    fill("darkolivegreen");
    ellipse(100, 200, 50, 135); //left back leg
    ellipse(290, 200, 50, 135); // right back leg
    fill("darkolivegreen");
    ellipse(200, 285, 200, 150); //body
    ellipse(200, 200, 200, 100); //head
    fill("black");
    ellipse(150, 160, 50, 50); //left eye
    ellipse(250, 160, 50, 50); //right eye
    fill("white");
    ellipse(200, 225, 100, 25); //mouth
    fill("darkolivegreen");
    ellipse(160, 340, 50, 75);
    ellipse(240, 340, 50, 75);
  }

function mousePressed(){ //
  if (!flyFalling){
    flyFalling=true
    speedY=random(5,10)
    start=start+speedY
    x=random (350)
  }
}
    
 
 
