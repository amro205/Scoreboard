// You must declare a declaration to manipulate the textContent later on.
let scoreHuman = document.getElementById("human__title");
let scoreRobot = document.getElementById("robot__title");
let reset_result = 0;
// Set the default number of the variable you want to be added into a function.
let humanTeam = 0;
function human() {
	// This addition assignment equal the variable humanTeam set to + it's current number and additional 1. To check if this work use the console.log() This has no effect in the visual aspect, it's only related to the btn clicks.
	humanTeam += 1;
	// The textContent will change the text inside the h3 to the "humanTeam" result, a number in this case.
	scoreHuman.textContent = humanTeam;
}
function human2() {
	humanTeam += 2;
	scoreHuman.textContent = humanTeam;
}
function human3() {
	humanTeam += 3;
	scoreHuman.textContent = humanTeam;
}

robotTeam = 0;
function robot() {
	robotTeam += 1;
	scoreRobot.textContent = robotTeam;
}
function robot2() {
	robotTeam += 2;
	scoreRobot.textContent = robotTeam;
}
function robot3() {
	robotTeam += 3;
	scoreRobot.textContent = robotTeam;
}
