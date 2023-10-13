const play = document.querySelector("#button");

play.onclick = () => {
    location.href = "./StartPage.html";
};


// GameOver.js
// document.addEventListener("DOMContentLoaded", function () {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);

//   playerScoreElem.innerHTML = localStorage.getItem("playerScore");
//   console.log(localStorage.getItem("playerScore"));
//   computerScoreElem.innerHTML = localStorage.getItem("computerScore");

//   // playerScoreElem.innerHTML = `<h2>${playerScore}</h2>`;
//   // computerScoreElem.innerHTML = `<h2>${computerScore}</h2>`;

//   const playAgainButton = document.getElementById("button");
//   playAgainButton.addEventListener("click", function () {
//     // Add the URL of the game page here
//     window.location.href = "./GameOver.html";
//   });
// });



const playerName = document.getElementById('player1');
const playerScore = document.getElementById('score');
const compScore = document.getElementById('compScore');

playerName.innerHTML = localStorage.getItem('userName');
playerScore.innerHTML = localStorage.getItem('playerScore');
compScore.innerHTML = localStorage.getItem('computerScore');
