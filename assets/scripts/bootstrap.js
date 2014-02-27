var life = new GameOfLife();
life.initialise();

document.getElementById('reset').addEventListener("click", function() {
	life.reset();
}, false);

document.getElementById('pause').addEventListener("click", function() {
	life.pause();
}, false);