class Preloader extends Phaser.Scene {
  constructor(){
    super('Preloader')
  }

  preload () {
    this.facebook.once('startgame', this.startGame, this);

    //use for preloading assets

    /*this.facebook.showLoadProgress(this);
    this.load.image('zero2', 'assets/zero-two.png');
    this.load.image('stats', 'assets/stats.png');*/

    this.facebook.gameStarted();
  }

  startGame () {
    this.scene.start('MainMenu');
  }

}
