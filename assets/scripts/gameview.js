function GameView(element) {
	this._element = element;
}

GameView.prototype.setModel = function(model) {
	var data = model.getData(),
		docFrag = document.createDocumentFragment();
	this._element.innerHTML = '';
	this._model = model;
	for (var i = 0, l = data.length; i < l; i++) {
		for (var j = 0, k = data[i].length; j < k; j++) {
			cell = GameView.CELL.cloneNode();
			cell.className = data[i][j] ? 'cell light' : 'cell';
			cell.id = 'td-' + i + '-' + j;
			
			docFrag.appendChild(cell);
		}
	}
	
	this._element.appendChild(docFrag);
};

GameView.prototype.update = function() {
	var data = this._model.getData();
	for (var i = 0, l = data.length; i < l; i++) {
		for (var j = 0, k = data[i].length; j < k; j++) {
			document.getElementById('td-' + i + '-' + j).className = data[i][j] ? 'cell light' : 'cell';
		}
	}
};

GameView.CELL = document.createElement('div');