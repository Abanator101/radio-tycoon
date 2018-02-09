import BlockedButton from './BlockedButton'

const DEFAULT_INITIAL_INDEX = 0

export default class extends BlockedButton {
  constructor (game, x, y, key, startBlocked, callback, callbackContext,
    blockedFrame, cycleStates) {
    super(game, x, y, key, startBlocked, () => { callback(this.cycle()) },
      callbackContext, blockedFrame,
      ...cycleStates[DEFAULT_INITIAL_INDEX].frames)
    this._cycleStates = cycleStates
    this._iterator = DEFAULT_INITIAL_INDEX
  }

  cycle () {
    this._iterator = (this._iterator + 1) % this._cycleStates.length
    var currentState = this._cycleStates[this._iterator]
    this.setFrames(...currentState.frames)
    return currentState.name
  }

  get blocked () {
    return super.blocked
  }

  set blocked (value) {
    // TODO: Find a better way to set current frames..
    this._iterator = DEFAULT_INITIAL_INDEX
    super.blocked = value
  }
}
