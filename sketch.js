
let img;

function preload() {
  // Small base64 image (1x1 red dot)
  const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
  img = loadImage(base64);
}

function setup() {
  createCanvas(100, 100, SVG);
  noLoop();
}

function draw() {
  background(255);
  image(img, 0, 0, 100, 100);

  stroke(0);
  fill(255, 0, 0);
  ellipse(50, 50, 50, 50);

  setTimeout(() => {
    save("svg-export-test.svg");
  }, 500);
}
