import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor (game) {
    super(game)

    this.create(0, 0, 'overview-background')
  }
}
