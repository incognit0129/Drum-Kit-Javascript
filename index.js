buttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);

    document.addEventListener("keydown", function (event) {
      makeSound(event.key);
    });
  });
}

function makeSound(buttonInnerhtml) {
  switch (buttonInnerhtml) {
    case "w":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}
