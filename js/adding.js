// adding numbers in rows:
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
