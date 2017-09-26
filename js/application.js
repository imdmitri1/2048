var game;

$(document).ready(function() {
    game = new Game
    game.updateBoard();

  Mousetrap.bind('enter', function() {
    game = new Game
    game.updateBoard();
  });

  Mousetrap.bind('up', function() {
    game.moveUp();
    game.updateBoard();
  });

  Mousetrap.bind('left', function() {
    game.moveLeft();
    game.updateBoard();
  });

  Mousetrap.bind('right', function() {
    game.moveRight();
    game.updateBoard();
  });

  Mousetrap.bind('down', function() {
    game.moveDown();
    game.updateBoard();
  });

});
