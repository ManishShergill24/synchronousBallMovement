class Form{
constructor(){
}
display(){

var title = createElement('h2')
title.html("Car Racing Game")
title.position(250,50)
var input = createInput("name")
var button = createButton("play")
var greeting = createElement('h3');
input.position(250,150);
button.position(250,200);

button.mousePressed(function(){

input.hide();
button.hide();

var name = input.value();
playerCount+=1
player.update(name)
player.update(playerCount)
greeting.html("hello "+name)
greeting.position(250,50);
})
}
}