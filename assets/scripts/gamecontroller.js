function GameController(model, element) {
	this._model = model;
	this._view = new GameView(element);
}

GameController.prototype.setData = function(data) {
	this._model.setData(data);
	this._view.setModel(this._model);
};

GameController.prototype.update = function() {
	this._model.update();
	this._view.update();
};