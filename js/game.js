function Game(string){
  this.new = string || _.shuffle([0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0]).join("")
  this.array = this.new.split("").map(Number);
}

Game.prototype.moveDown = function(){
  this.collapseDown()
  this.addDown()
  this.addNumber()
  return this.array
}

Game.prototype.moveUp= function(){
  this.collapseUp()
  this.addUp()
  this.addNumber()
  return this.array
}

Game.prototype.moveRigth = function(){
  this.collapseRight()
  this.addRight()
  this.addNumber()
  return this.array
}

Game.prototype.moveLeft = function(){
  this.collapseLeft()
  this.addLeft()
  this.addNumber()
  return this.array
}

