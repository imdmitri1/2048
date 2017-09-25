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



