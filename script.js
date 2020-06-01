// VOORBEELD: https://jsbeginners.com/javascript-number-guessing-game/

// 1. Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam.  "Welkom! Wat is je naam?"
// 2. Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

const maxTries = 5;

let name = prompt("Hi there! What's your name?");
console.log(name);

// 3. Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

alert(`Hi ${name}! Let's play a game!`);

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};

const randomNumber = getRandomInt(0, 25);
console.log(randomNumber);

for (counter = 1; counter <= maxTries; counter++) {
  let userNumber = parseInt(prompt('Please guess a number between 0 and 25'));
  alert(`You have guessed ${userNumber}!`);
  console.log(userNumber);

  if (userNumber === randomNumber) {
    alert(`You have won the game, ${name}!`);
    confirm(`Play again?`);
    window.location.reload(true); // break;
  } else if (counter >= maxTries) {
    alert(`You have run out of attemps, ${name}!`);
    confirm(`Play again?`);
    window.location.reload(true); // break;
  } else {
    confirm(`Wrong!! Dit was poging nummer ${counter}. Guess again, ${name}!`);
  }
}
