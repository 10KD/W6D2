class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard($el);
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", e => {
      const $box = $(e.currentTarget);
      this.game.playMove($box.data("pos"));
      this.makeMove($box);
      if (this.game.isOver()) {
        alert(this.game.currentPlayer.toUpperCase() + " wins!");
        $("ul").text("");
      }
    });
  }

  makeMove($square) {
    const mark = this.game.currentPlayer;
    if (mark === "x") {
      $square.addClass("white");
    } else {
      $square.addClass("yellow");
    }
    $square.text(mark);
  }

  setupBoard($el) {
    const $board = $("<ul></ul>");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const $tile = $("<li></li>").data("pos", [i, j]);
        $board.append($tile);
      }
    }
    $el.append($board);
  }
}

module.exports = View;
