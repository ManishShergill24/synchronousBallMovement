var player,form, database;
var position;

var gameState = 0;
var playerCount = 0;
var gameOBJ;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  gameOBJ = new Game();
  gameOBJ.getState();
  gameOBJ.start();
}

function draw(){
  background("white");

  
}
