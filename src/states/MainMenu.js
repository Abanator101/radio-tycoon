import Phaser from 'phaser'
import OverviewScene from '../scenes/OverviewScene'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    var overviewScene = this.game.add.existing(new OverviewScene(this.game))
    overviewScene.scale.setTo(2.0, 2.0)

    var logo = this.add.sprite(this.game.world.centerX,
      this.game.world.centerY * 0.95, 'logo')
    logo.scale.setTo(5.0, 5.0)
    logo.anchor.setTo(0.5)

    var playButton = this.add.button(this.game.world.centerX,
      this.game.world.centerY * 1.6, 'button-play', () => {
        this.state.start('InGame')
      }, this, 0, 0, 1, 0)

    playButton.scale.setTo(4.0, 4.0)
    playButton.anchor.setTo(0.5)
    //
    var playText = this.add.text(this.game.world.centerX * 1.04,
      this.game.world.centerY * 1.6, 'Play', {
        font: '20px Press Start 2P',
        fill: '#FAFAFA',
        smooth: false
      })
    playText.anchor.setTo(0.35)
    // TODO: fix shadow
    playText.setShadow(-2, 2, 'rgba(180, 50, 50, 1)')

    playButton.onInputDown.add(() => {
      playText.setShadow(-2, 2, 'rgba(194, 80, 80, 1)')
    }, this)

    playButton.onInputUp.add(() => {
      playText.setShadow(-2, 2, 'rgba(180, 50, 50, 1)')
    }, this)
  }

  render () {}
}
