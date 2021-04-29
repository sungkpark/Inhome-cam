import { Lightning, Router, MediaPlayer } from "wpe-lightning-sdk";

export default class Live_Camera extends Lightning.Component {
  static _template() {
    return {
      MediaPlayer: {
        type: MediaPlayer
      },
      Background: {
        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
      },
      Label: {
        x: 960,
        y: 590,
        mount: 0.5,
        text: {
          text: 'Live Camera stream'
        }
      },
      Explanation: {
        x: 960,
        y: 630,
        mount: 0.5,
        alpha: 0.5,
        text: {
          fontSize: 27,
          textAlign: 'center',
          textColor: 0xaa000000,
          lineHeight: 35,
          text: 'Press right to go back home'
        }
      }
    }
  }

  get authentication() {
    return this.fireAncestors('$getAuthentication')
  }

  _init() {
    this.tag('MediaPlayer').updateSettings({ consumer: this })
    this._setState('Playing')
  }

  _handleEnter() {
    const camData = this.authentication.getCamera()
    this.tag('MediaPlayer').open(camData.vpn_url + '/live/files/medium/index.m3u8')
  }

  $mediaplayerPlay() {
    this.tag('Background').setSmooth('alpha', 0)
  }

  $mediaplayerStop() {
    this.tag('Background').setSmooth('alpha', 1)
  }

  _handleRight() {
    this.tag('MediaPlayer').close()
    Router.navigate('home')
  }
}
