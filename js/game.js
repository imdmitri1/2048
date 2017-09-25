
function Game(string){
  this.new = string       // || "000000000000" Math.random()  - generate random string
  this.array = this.new.split("").map(Number);
}

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

Game.prototype.moveDown = function(){
  this.vertical_arrays().each
}

Game.prototype.moveUp= function(){

}

Game.prototype.moveRigth = function(){

}

Game.prototype.moveLeft = function(){

}
game = new Game('0000202000000000')
