class Preloader extends Phaser.Scene {
  constructor(){
    super('Preloader')
  }

  preload () {
    this.facebook.once('startgame', this.startGame, this);
    this.facebook.showLoadProgress(this);
  }
}
