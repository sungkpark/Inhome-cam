import { Lightning, Router, MediaPlayer } from "wpe-lightning-sdk";

let stream_url = 'https://stream-eu1-bravo.dropcam.com/nexus_aac/851d9bea5db44dfc8ac7c4e144ba11bf/playlist.m3u8?public=QzorHunzFn'

export default class Doorbell extends Lightning.Component {
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
          text: 'Google Nest Hello Doorbell'
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
          text: 'Press left to go back home'
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
    this.tag('MediaPlayer').open(stream_url)
  }

  $mediaplayerPlay() {
    this.tag('Background').setSmooth('alpha', 0)
  }

  $mediaplayerStop() {
    this.tag('Background').setSmooth('alpha', 1)
  }

  _handleLeft() {
    this.tag('MediaPlayer').close()
    Router.navigate('home')
  }
}
