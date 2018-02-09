import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('overview-background', 'assets/images/scene-overview.png')
    this.load.image('logo', 'assets/images/logo.png')
    this.load.spritesheet('button-play', 'assets/images/button-play.png', 40,
      16)
    this.load.spritesheet('button-onair', 'assets/images/button-onair.png', 16,
      16)
  }

  create () {
    this.state.start('MainMenu')
  }
}
