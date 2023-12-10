// code adapted from Jacob Rivkin
// https://www.youtube.com/watch?v=hxjEl-pun7o

// GLOBAL VARIABLES
let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numCards = 3;
var speedX = 3000;
var speedY= 600;
var x;
var y;

var interactionStartedFlag = false;

const message = 'ROARR';
var messageX = 0;
var messageY = 0;

const message1 = '--> free ASMR <--';
var message1X = 0;
var message1Y = 0;

//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload() {
  


  //least efficient way, but most straightforward way
  let dino1 = loadImage('dino1.png'); // store image in a variable
  let dino2 = loadImage('dino2.png');
  let dino3 = loadImage('dino3.png');
  let dino4 = loadImage('dino4.png');
  

  
  cards = [dino1,dino2,dino3,dino4]; // store variables in an array, see top
  
// // // the most efficient way using a for loop and concatenation
// for (let i = 0; i < numCards; i++) {
// // // store each image directly into the array
// // // you must use the naming convention demonstrated - 0,1,2,3
// cards[i] = loadImage('card' + i + '.png');
// console.log();
// }
  
}

// ACTUAL SKETCH BELOW
function setup() {
  createCanvas(windowWidth, windowHeight);
  

  song = loadSound('sound2.mp3');
  textSize(32);
  messageX = width/2
  messageY = height/2
  
  message1X = 200
  message1Y = 500
  
  
  //noLoop();
}

function draw() {
  

  
    if (isMouseInsideText(message, messageX, messageY)) {
    cursor(HAND);
    fill(0, 200, 0);
    stroke(0, 200, 0);
  } else if (isMouseInsideText1(message1, message1X, message1Y)) {
    cursor(HAND);
    fill(0, 200, 0);
    stroke(0, 200, 0);
  } else {
    cursor(ARROW);
    fill(255);
    stroke(255);
  }



    rass1 = random(0,255)
    rass2 = random(0,255)
    rass3 = random(0,255)

    background(rass1, rass2, rass3);
  //draw the image from the center of the image
  imageMode(CENTER);
  // image(img, 10, 10, 50, 50);
  
  //store random image in a variable
  let randoImg = random(cards)
  //the array is put into the random function, it will choose one index value at random
  
  x = x + random(-speedX, speedX);
  y = y + random(-speedY, speedY);
  
  //draw to the canvas using the random
  //image(image, x position, y position, image width, image height)
  image(randoImg, width/2, height/2);
  
  textAlign(CENTER);
  fill(0,0,255)
  text(message, messageX, messageY);
  
  text(message1,message1X, message1Y);

  
  rectMode(CENTER);
  fill(255,0,0,80)
  //noStroke()
  rect(width/2, height/2,180,70,10)

  
}
function isMouseInsideText(message, messageX, messageY) {
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > (messageX-60) && mouseX < (messageX-60) + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;

}
function isMouseInsideText1(message1, message1X, message1Y) {
  const messageWidth1 = textWidth(message1);
  const messageTop1 = message1Y - textAscent();
  const messageBottom1 = message1Y + textDescent();

  return mouseX > (message1X-80) && mouseX < (message1X-80) + messageWidth1 &&
    mouseY > messageTop1 && mouseY < messageBottom1;

}
function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {
    window.open('https://drive.google.com/drive/folders/1NIfMMCi-UXnzcBoKvol7gql1rc0PkWBW?usp=sharing/', '_blank');
  }
  if (isMouseInsideText1(message1, message1X, message1Y)) {
    if (song.isPlaying() == false){
        song.play()
        }
  }

}
