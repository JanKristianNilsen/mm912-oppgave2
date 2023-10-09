
let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("submitguess").onclick = function (){

let x = document.getElementById("guessField").value;

if (x == y) {
	alert("Yay! You guessed it correctly in "
	+ guess + " guesses!😁 ");
}

			
else if (x > y) {
  guess++;
  alert("No sorry, that was not it. Try a smaller number😇");
}else {
  guess++;
  alert("Try a greater number. You got this!👍")
}
<script src="spill.js"></script>
}
