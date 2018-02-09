import Phaser from 'phaser'
import OverviewScene from '../scenes/OverviewScene'
import BlockedButton from '../ui/BlockedButton'
import CycleButton from '../ui/CycleButton'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    var overviewScene = this.game.add.existing(new OverviewScene(this.game))
    overviewScene.scale.setTo(2.0, 2.0)

    var onAirButton = this.game.add.existing(new CycleButton(this.game,
      10, 60, 'button-onair', true, (state) => { console.log(state) }, this,
      0, [
        {
          name: 'off',
          frames: [1, 1, 2, 1]
        },
        {
          name: 'on',
          frames: [3, 3, 4, 3]
        }
      ]))
    onAirButton.scale.setTo(3.0, 3.0)

    var onAirButton2 = this.game.add.existing(new BlockedButton(this.game,
      10, 110, 'button-onair', false, () => {
        onAirButton.blocked = !onAirButton.blocked
      }, this, 0, 1, 1, 2, 1))
    onAirButton2.scale.setTo(3.0, 3.0)
  }

  render () {}
}
