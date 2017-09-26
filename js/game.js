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

Game.prototype.moveRight = function(){
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

// *********** getting horizontal & vertical arrays: ***********

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

// ***************

// fix this method for not adding number if
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

Game.prototype.updateBoard = function(){
    for(var i = 0; i < 16; i++){
    $(`#c${i+1}`).text(game.array[i])
    if ($(`#c${i+1}`).text() === "0"){
      $(`#c${i+1}`).text("")   //css("visibility","hidden")
    }
  }
}

Game.prototype.gameOver = function(){
//
}

// ************* collapsing methods: ********************

Game.prototype.collapseRight = function(){
  var a = this.horizontal_arrays().map(function(line){
    for(var i=0; i < line.length; i++){
        if (line[i] === 0) {
          line.splice(i,1)
          line.unshift(0)
        }
    }
    return line
  })
  this.array = _.flatten(a);
  return a
}

Game.prototype.collapseLeft = function(){
  var a = this.horizontal_arrays().map(function(line){
    for(var i=line.length - 1; i > -1; i--){
        if (line[i] === 0) {
          line.splice(i,1)
          line.push(0)
        }
    }
    return line
  })
  this.array = _.flatten(a);
  return a
}

Game.prototype.collapseUp = function(){
  var a = this.vertical_arrays().map(function(line){
    for(var i=line.length - 1; i > -1; i--){
        if (line[i] === 0) {
          line.splice(i,1)
          line.push(0)
        }
    }
    return line
  })
  a = _.zip.apply(_, a)
  this.array = _.flatten(a);
  return a
}

Game.prototype.collapseDown = function(){
  var a = this.vertical_arrays().map(function(line){
    for(var i=0; i < line.length; i++){
        if (line[i] === 0) {
          line.splice(i,1)
          line.unshift(0)
        }
    }
    return line
  })
  a = _.zip.apply(_, a)
  this.array = _.flatten(a);
  return a
}

//************ adding numbers in rows:*****************

Game.prototype.addRight = function(){
  var a = this.horizontal_arrays().map(function(line){
    for(var i=line.length - 1; i > -1; i--){
        if (line[i] === line[i - 1]) {
          sum = line[i] + line[i - 1]
          line.splice(i, 1, sum)
          line.splice(i - 1, 1)
          line.unshift(0)
        }
    }
    return line
  })
  this.array = _.flatten(a);
  return a
}

Game.prototype.addLeft = function(){
  var a = this.horizontal_arrays().map(function(line){
    for(var i=0; i < line.length; i++){
        if (line[i] === line[i + 1]) {
          sum = line[i] + line[i + 1]
          line.splice(i, 1, sum)
          line.splice(i + 1, 1)
          line.push(0)
        }
    }
    return line
  })
  this.array = _.flatten(a);
  return a
}

Game.prototype.addUp= function(){
  var a = this.vertical_arrays().map(function(line){
    for(var i=0; i < line.length; i++){
        if (line[i] === line[i + 1]) {
          sum = line[i] + line[i + 1]
          line.splice(i, 1, sum)
          line.splice(i + 1, 1)
          line.push(0)
        }
    }
    return line
  })
  a = _.zip.apply(_, a)
  this.array = _.flatten(a);
  return a
}

Game.prototype.addDown = function(){
  var a = this.vertical_arrays().map(function(line){
    for(var i=line.length - 1; i > -1; i--){
        if (line[i] === line[i - 1]) {
          sum = line[i] + line[i - 1]
          line.splice(i, 1, sum)
          line.splice(i - 1, 1)
          line.unshift(0)
        }
    }
    return line
  })
  a = _.zip.apply(_, a)
  this.array = _.flatten(a);
  return a
}


