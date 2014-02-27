function GameOfLife() {
	this._model = new GameModel();
	this._controller = new GameController(this._model, document.getElementById('game'));
}

GameOfLife.prototype.initialise = function() {
	var data, columns,
		rows = [];
	
	for (var i = 0, l = GameOfLife.rows; i < l; i++) {
		columns = [];
		for (var j = 0, k = GameOfLife.columns; j < k; j++) {
			columns.push(!!Math.round(Math.random() * 1));
		}
		rows.push(columns);
	}
	this._controller.setData(rows);
	setTimeout(this._loop.bind(this),100);
};

GameOfLife.prototype._loop = function() {
	this._controller.update();
	this._timeout = setTimeout(this._loop.bind(this), 100);
};

GameOfLife.prototype.reset = function() {
	clearTimeout(this._timeout);
	this._paused = false;
	this.initialise();
};

GameOfLife.prototype.pause = function() {
	if (this._paused) {
		this._loop();
	} else {
		clearTimeout(this._timeout);
	}
	this._paused = !this._paused;
};

GameOfLife.rows = 100;

GameOfLife.columns = 100;