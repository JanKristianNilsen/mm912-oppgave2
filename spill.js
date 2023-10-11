
const tilfeldigTall = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("guessSubmit").onclick = function () {

  const gjettetTall = document.getElementById("guessField").value;
  console.log(gjettetTall)

  if (gjettetTall == tilfeldigTall) {
    alert("Yay! You guessed it correctly in "
      + guess + " guesses!😁 ");
  }


  else if (gjettetTall > tilfeldigTall) {
    guess++;
    alert("No sorry, that was not it. Try a smaller number😇");
  } else {
    guess++;
    alert("Try a greater number. You got this!👍")
  }
}
