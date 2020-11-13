class PlayerDetails extends Phaser.Scene {
  constructor() {
    super({
      key: 'PlayerDetails',
      active: false,
    });
  }

  create() {
    this.add.bitmapText(400, 400, 'azo', this.facebook.playerName).setOrigin(0.5);
    this.facebook.loadPlayerPhoto(this, 'player').once('photocomplete', this.addPlayerPhoto, this);
  }

  addPlayerPhoto(key) {
    this.add.image(400, 200, key);
  }
}
