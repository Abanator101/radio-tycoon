import 'pixi'
import 'p2'
import WebFont from 'webfontloader'
import Phaser from 'phaser'

import Boot from './states/Boot'
import MainMenu from './states/MainMenu'
import InGame from './states/InGame'

import config from './config'

class RadioTycoon extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null, null, false)

    this.state.add('Boot', Boot, false)
    this.state.add('MainMenu', MainMenu, false)
    this.state.add('InGame', InGame, false)

    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('Boot')
    }
  }
}

WebFont.load({
  google: {
    families: ['Press Start 2P']
  }
})

window.game = new RadioTycoon()

if (window.cordova) {
  var app = {
    initialize: function () {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  }

  app.initialize()
}
