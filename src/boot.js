FBInstant.initializeAsync().then(function() {
  var config = {
    type: phaser.AUTO,
    width: window.innerwidth,
    height: window.innerheight,
  };

  new Phaser.Game(config);
});
