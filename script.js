let max = 20;
let min = 1;
let startCheck = document.getElementById("checkbutton");
let againCheck = document.getElementById("againbtn");
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let numberGuessedInput = document.querySelector(".guess");
let scoreNumber = document.querySelector(".score");
let highScoreCounter = 20;
let secretNumber = document.querySelector('.number')

//start again
againCheck.addEventListener("click", () => {
  numberGuessedInput.value = null 
  location.reload();

});
console.log(randomNumber);
startCheck.addEventListener("click", () => {
  let numberGuessed = document.getElementById("guessedNumber").value;

  console.log(numberGuessed);
  if (numberGuessed < randomNumber) {
    alert("Broj " + numberGuessed  + ' je premali. Probaj opet');
    scoreNumber.innerHTML = highScoreCounter - 1;
    highScoreCounter = highScoreCounter -1
  }
  if (numberGuessed > randomNumber) {
    alert("Broj " + numberGuessed  + ' je previsok. Probaj opet');
    scoreNumber.innerHTML = highScoreCounter - 1;
    highScoreCounter = highScoreCounter -1
  }
  if (numberGuessed == randomNumber) {
    alert("Tačan broj je "+ numberGuessed + " i vaš skor je " + highScoreCounter );
    secretNumber.innerHTML = numberGuessed
  }
  if(highScoreCounter === 0){
    alert('Igra je gotova , pocinjemo opet !!!')
    location.reload()
  }
});
