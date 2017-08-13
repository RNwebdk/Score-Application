var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;


var resetButton = document.querySelector("#reset");
var limitInput = document.querySelector("#limit");
var winingDisplay = document.querySelector("#winnerNumber")
var gameOver = false;
var winnerScore = 5;

// Game reset
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
}

// Limit score
limitInput.addEventListener("change", function(){
	// just to show we can use the "this" keyword here
	// winingDisplay.textContent = limitInput.value;
	winingDisplay.textContent = this.value;
	// same here
	// winnerScore = limitInput.value;
	winnerScore = Number(this.value);
	reset();
});

resetButton.addEventListener("click", function(){
	reset();
});

// Player
function playerCount(button, output, score){
	
	button.addEventListener('click', function(){
		if (!gameOver) {
			score++;
			if (winnerScore === score) {
				gameOver = true;
				output.classList.add('winner');
			}
			output.textContent = score;
		}else{
			reset(score);
		}
	});
}


playerCount(p1Button, p1Display, p1Score);
playerCount(p2Button, p2Display, p2Score);


// THE CODE I WANT TO REFACTOR
// p1Button.addEventListener("click", function(){
// 	if (!gameOver) {
// 		p1Score++;
// 		if (winnerScore === p1Score) {
// 			gameOver = true;
// 			p1Display.classList.add('winner');
// 		}	
// 		p1Display.textContent = p1Score;
// 	}
	
// });

// p2Button.addEventListener("click", function(){
// 	if (!gameOver) {
// 		p2Score++;
// 		if (winnerScore === p2Score) {
// 			gameOver = true;
// 			p2Display.classList.add('winner');
// 		}	
// 		p2Display.textContent = p2Score;
// 	}
	
// });