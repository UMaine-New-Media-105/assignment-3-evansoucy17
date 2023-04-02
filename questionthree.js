let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "deeppink",
  "lime",
  "dodgerblue",
  "gold",
  "palevioletred",
  "orangered",
  "darkseagreen",
  "mediumspringgreen",
  "seagreen",
  "paleturquoise",
  "lightseagreen",
  "aqua",
  "deepskyblue",
  "dodgerblue",
  "royalblue",
  "mediumorchid",
  "blueviolet",
  "red,",
  "maroon",
]; // an array of CSS colors]; // array of color options

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);

  // nested loops to draw flowers in a grid
  for (let i = 0; i < 5; i++) {
    // vertical repetition
    for (let j = 0; j < 5; j++) {
      // horizontal repetition
      let flowerX = 50 + j * 100;
      let flowerY = 50 + i * 100;
      let flowerColor = random(colors); // randomly select a color from the array
      drawFlower(flowerX, flowerY, 0.4, flowerColor);
    }
  }
  for (let i = 0; i < 5; i++) {
    // vertical repetition
    for (let j = 0; j < 5; j++) {
      // horizontal repetition
      let flowerX = 90 + j * 100;
      let flowerY = 70 + i * 100;
      let flowerColor = random(colors); // randomly select a color from the array
      flowerTwo(flowerX, flowerY, 0.2, flowerColor);
    }
  }
  for (let i = 0; i < 5; i++) {
    // vertical repetition
    for (let j = 0; j < 5; j++) {
      // horizontal repetition
      let flowerX = 10 + j * 100;
      let flowerY = 10 + i * 100;
      let flowerColor = random(colors); // randomly select a color from the array
      flowerThree(flowerX, flowerY, 0.2, flowerColor);
    }
  }
}

function drawFlower(x, y, size, color) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);
  noStroke(); // so all of the petals blend together
  fill(color); // randomly selected color
  for (let petalsDrawn = 0; petalsDrawn < 36; petalsDrawn++) {
    rotate(random(1, 100)); // randomly rotate the petals
    ellipse(50, 50, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}

function flowerTwo(x, y, size, color) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);
  noStroke(); // so all of the petals blend together
  fill(color); // randomly selected color
  for (let petalsDrawn = 0; petalsDrawn < 36; petalsDrawn++) {
    rotate(random(100)); // randomly rotate the petals
    ellipse(70, 70, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}
function flowerThree(x, y, size) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);
  noStroke(); // so all of the petals blend together
  fill("yellow"); //I like red flowers
  for (let petalsDrawn = 0; petalsDrawn < 36; petalsDrawn++) {
    rotate(random(100));
    ellipse(50, 50, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}
