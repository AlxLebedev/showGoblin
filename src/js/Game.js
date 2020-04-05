export default class Game {
  constructor() {
    this.gameFieldSize = 16;
    this.currentCellIndex = 0;
    this.nextCellIndex = 0;
  }

  start() {
    const gameField = document.querySelector('.game-field');
    for (let i = 0; i < this.gameFieldSize; i += 1) {
      const newCell = `<div class='cell' id=cell${i}></div>`;
      gameField.insertAdjacentHTML('beforeend', newCell);
    }
    this.showGoblin();
  }

  showGoblin() {
    setInterval(() => {
      this.setRandomIndex();

      const currentCell = document.getElementById(`cell${this.currentCellIndex}`);
      const nextCell = document.getElementById(`cell${this.nextCellIndex}`);

      currentCell.innerHTML = '';
      nextCell.appendChild(this.generateNewImage());
      this.currentCellIndex = this.nextCellIndex;
    }, 1000);
  }

  setRandomIndex() {
    do {
      this.nextCellIndex = Math.floor(Math.random() * this.gameFieldSize);
    } while (this.currentCellIndex === this.nextCellIndex);
  }

  // eslint-disable-next-line class-methods-use-this
  generateNewImage() {
    const image = new Image();
    image.src = './img/goblin.png';
    image.classList.add('cell-image');
    return image;
  }
}
