class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.clickedTowerIdx = null;
    this.setupTowers();
    this.render();
    this.clickTower();
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      let $newTower = $("<ul></ul>");
      $newTower.attr("id", `${i}`);
      for (var j = 2; j >= 0; j--) {
        const $floor = $("<li></li>");
        $floor.attr("id", `${i}${j}`);
        $newTower.append($floor);
      }
      this.rootEl.append($newTower);
    }
  }

  render() {
    const towers = this.game.towers;
    $("li").removeClass();

    for (var i = 0; i < towers.length; i++) {
      let tower = towers[i];
      // console.log(tower);
      for (var j = 0; j < tower.length; j++) {
        let floor = tower[j];
        // console.log(floor);
        if (floor === 1) {
          let smallFloor = $(`#${i}${j}`);
          // console.log(smallFloor);
          smallFloor.addClass("small");
        } else if (floor === 2) {
          let mediumFloor = $(`#${i}${j}`);
          mediumFloor.addClass("medium");
        } else if (floor === 3) {
          let largeFloor = $(`#${i}${j}`);
          largeFloor.addClass("large");
        }
      }
    }
  }

  clickTower() {
    $(this.rootEl).on("click", "ul", e => {
      const currentTowerId = $(e.currentTarget).attr("id");

      if (this.clickedTowerIdx === null) {
        this.clickedTowerIdx = currentTowerId;
      } else {
        if (this.game.isValidMove(this.clickedTowerIdx, currentTowerId)) {
          this.game.move(this.clickedTowerIdx, currentTowerId);
          this.clickedTowerIdx = null;
        } else {
          alert("Invalid move");
        }
      }
      this.render();
      if (this.game.isWon()) {
        alert("you win!");
      }
    });
  }

}


module.exports = HanoiView;
