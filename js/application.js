var game;

$(document).ready(function() {
    game = new Game
    game.updateBoard();

  Mousetrap.bind('enter', function() {
    game = new Game
    game.updateBoard();
  });

  Mousetrap.bind('up', function() {
    event.preventDefault();
    game.moveUp();
    game.updateBoard();
  });

  Mousetrap.bind('left', function() {
    event.preventDefault();
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
