function GameModel() {
}

GameModel.prototype.setData = function(data) {
	this._data = data;
};

GameModel.prototype.getData = function(data) {
	return this._data;
};

GameModel.prototype.update = function(data) {
	var data = this._data,
		rows = [];
	for (var i = 0, l = data.length; i < l; i++) {
		columns = [];
		for (var j = 0, k = data[i].length; j < k; j++) {
			columns.push(this._checkCell(i, j));
		}
		rows.push(columns);
	}
	
	this.setData(rows);
};

GameModel.prototype._checkCell = function(y, x) {
	/*Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	Any live cell with two or three live neighbours lives on to the next generation.
	Any live cell with more than three live neighbours dies, as if by overcrowding.
	Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.*/
	
	var neighbours = 0,
		data = this._data,
		result = false,
		current = data[y][x];
		
	if (data[y][x-1]) {
		neighbours++;
	}
	if (data[y][x+1]) {
		neighbours++;
	}
	
	if (data[y-1]) {
		if (data[y-1][x-1]) {
			neighbours++;
		}
		if (data[y-1][x]) {
			neighbours++;
		}
		if (data[y-1][x+1]) {
			neighbours++;
		}
	}
	
	if (data[y+1]) {
		if (data[y+1][x-1]) {
			neighbours++;
		}
		if (data[y+1][x]) {
			neighbours++;
		}
		if (data[y+1][x+1]) {
			neighbours++;
		}
	}
	
	if (neighbours < 2) {
		result = false;
	}
	if (neighbours == 2 && current) {
		result = true;
	}
	if (neighbours == 3) {
		result = true;
	}
	if (neighbours > 3) {
		result = false
	}
	
	return result;
};