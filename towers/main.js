const HanoiGame = require("./lib/game.js");
const HanoiView = require("./lib/hanoi-view.js");

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
