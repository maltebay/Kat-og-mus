//Spillers bevægelse
let playerPosX;
let playerPosY;
let playerSpeed;
//Musens bevægelse
let x;
let y;
let speed = 1.5;
let a = speed;
let b = 0;
let d = 50;

//Text
let smiley = ":)";
let angry = ">:(";
let startGame = "Du er her";

function setup() {
  createCanvas(800, 600);
  //Ved at sætte x og y til random giver vi musen en tilfældig startposition
  x = random(0, width);
  y = random(0, height);
  //playerPosX og Y i dette tilfælde bestemmer hvor katten/spilleren starter
  playerPosX = 100;
  playerPosY = 100;
  frameRate(165);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  circle(x, y, d);
  fill(0, 255, 0);
  circle(playerPosX, playerPosY, 50);
  x += speed * a;
  y += speed * b;
  fill(0);
  text(smiley, playerPosX, playerPosY);
  text(startGame, 73, 50, 200, 100);
  text(angry, x, y);
  //kalder på border og keyPressed
  border();
  keyPressed();
}

function border() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = random(-3, 3);
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = random(-3, 3);
  }
  if (y + d / 2 >= height) {
    a = random(-3, 3);
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = random(-3, 3);
    b = speed;
  }
}

//nummerene heviser til forskellige taster på tastaturet
function keyPressed() {
  if (keyIsDown(40)) {
    playerPosY += speed;
  }
  if (keyIsDown(38)) {
    playerPosY -= speed;
  }
  if (keyIsDown(37)) {
    playerPosX -= speed;
  }
  if (keyIsDown(39)) {
    playerPosX += speed;
  }
}
