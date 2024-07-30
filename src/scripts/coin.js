export class Coin {
  // elements
  scoreDiv = document.querySelector('.score__coin');
  tapDiv = document.querySelector('.header__tap');
  upDiv = document.querySelector('.header__up');
  hourDiv = document.querySelector('.header__hour');
  levelDiv = document.querySelector('.level__info-levels');
  levelNameDiv = document.querySelector('.level__info-name');
  progressDiv = document.querySelector('.level__progress-line');

  // variables
  levels = [[1, 1, 10, 'Нуб'], [2, 2, 100, 'Любитель'], [3, 3, 1000, 'Профи'], [4, 5, 3000, 'Мастер'], [5, 7, 5000, 'Эксперт'], [6, 10, 10000, 'Бог']];
  
  score = Number(localStorage.getItem('score')) || 0;
  level = Number(localStorage.getItem('level')) || 1;
  tap = this.levels[this.level - 1][1];
  up = this.levels[this.level - 1][2];
  nameLevel = this.levels[this.level - 1][3];
  hour = this.tap * 3600;

  constructor() {
    this.start();
  }

  start() {
    this.setScore();
    this.setLevel();

    this.showScore();
    this.showLevel();
    this.showTap();
    this.showHour();
    this.showUp();
    this.showProgress();
    this.showNameLevel();
  }

  // score
  showScore() {
    this.scoreDiv.textContent = this.score;
  }

  setScore() {
    localStorage.setItem('score', this.score);
  }

  updateScore() {
    this.score < 10000 ? this.score += this.tap : this.score = 0;

    this.setScore();
    this.showScore();
    this.updateLevel();
  }

  // level
  setLevel() {
    localStorage.setItem('level', this.level);
  }

  updateLevel() {
    for (const [level, tap, value] of this.levels) {
      if (this.score < value) {
        this.level = level;
        this.tap = tap;
        this.up = value;
        this.hour = this.tap * 3600;
        this.nameLevel = this.levels[this.level - 1][3];

        this.setLevel();
        this.showLevel();
        this.showTap();
        this.showHour();
        this.showUp();
        this.showProgress();
        this.showNameLevel();

        return;
      };
    };
  }

  // tap
  showTap() {
    this.tapDiv.textContent = this.tap;
  }

  // hour
  showHour() {
    this.hourDiv.textContent = `+${this.hour}`;
  }

  // level
  showLevel() {
    this.levelDiv.textContent = `Уровень: ${this.level}/${this.levels.length}`;
  }

  // up
  showUp() {
    this.upDiv.textContent = this.up;
  }

  // progress
  showProgress() {
    const value = (100 * this.level) / this.levels.length;
    this.progressDiv.style.width = `${value}%`;
  }

  showNameLevel() {
    this.levelNameDiv.textContent = this.nameLevel;
  }
}