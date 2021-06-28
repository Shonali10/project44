var pic;

function preload(){
pic = loadImage("untitled.png");
}

function setup() {
  
  createCanvas(862, 600);
  
}

function draw() {
  background(pic)
  drawSprites();
}