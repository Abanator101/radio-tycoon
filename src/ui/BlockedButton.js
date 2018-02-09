import Phaser from 'phaser'

export default class extends Phaser.Button {
  constructor (game, x, y, key, startBlocked, callback, callbackContext,
    blockedFrame, overFrame, outFrame, downFrame, upFrame) {
    super(game, x, y, key, callback, callbackContext, overFrame, outFrame,
      downFrame, upFrame)
    this._enabledFrames = [overFrame, outFrame, downFrame, upFrame]
    this._blockedFrames = new Array(4).fill(blockedFrame)
    this.blocked = startBlocked
  }

  get blocked () {
    return this._blocked
  }

  set blocked (value) {
    this._blocked = value
    this.input.enabled = !value
    if (value) {
      this.setFrames(...this._blockedFrames)
    } else {
      this.setFrames(...this._enabledFrames)
    }
  }
}
