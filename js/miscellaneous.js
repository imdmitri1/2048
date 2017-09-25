
Game.prototype.horizontal_arrays = function(){
  array = this.array.slice();
  var results = [];
  while (array.length) {
    results.push(array.splice(0, 4));
  }
  return results;
}

Game.prototype.vertical_arrays = function(){
     return _.zip.apply(_, this.horizontal_arrays())
}

Game.prototype.addNumber = function(){
  var n = false;
  do {
    random = Math.floor(Math.random() * 16) + 1
    if (this.array[random] === 0){
      this.array[random] = 2
      n = true;
    }
  }
  while (!n);
  return this.array
}
