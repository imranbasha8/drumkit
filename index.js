
var no_of_buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_buttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInner=this.innerHTML;
  sound(buttonInner);
  buttonAnimation(buttonInner);
});
}
document.addEventListener("keypress",function(event){
 sound(event.key);
 buttonAnimation(event.key);
});

  function sound(key){
    switch(key){
    case "a":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "s":
    var tom1=new Audio("sounds/tom-2.mp3");
    tom1.play();
    break;
    case "d":
    var tom1=new Audio("sounds/tom-3.mp3");
    tom1.play();
    break;
    case "f":
    var tom1=new Audio("sounds/tom-4.mp3");
    tom1.play();
    break;
    case "j":
    var tom1=new Audio("sounds/crash.mp3");
    tom1.play();
    break;
    case "k":
    var tom1=new Audio("sounds/kick-bass.mp3");
    tom1.play();
    break;
    case "l":
    var tom1=new Audio("sounds/snare.mp3");
    tom1.play();
    break;
}
  }
function buttonAnimation(currentKey){
  var button=document.querySelector("."+currentKey);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  }, 100);
}