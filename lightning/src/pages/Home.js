import {Lightning, Router } from 'wpe-lightning-sdk'

export default class Home extends Lightning.Component {
  static _template () {
    return {
      Background: {
        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
      },
      Label: {
        x: 960,
        y: 540,
        mount: 0.5,
        text: {
          text: 'KPN POC: In-Home Smart Camera System'
        }
      },
      HomeSign: {
        x: 960,
        y: 490,
        mount: 0.5,
        text: {
          text: 'Homepage'
        }
      },
      Details: {
        x: 960,
        y: 590,
        mount: 0.5,
        alpha: 0.5,
        text: {
          fontSize: 27,
          textColor: 0xaa000000,
          text: 'Press up to go to live streams\nPress down to view recordings'
        }
      }
    }
  }

  _handleLeft () {
    Router.navigate('live_camera')
  }

  _handleRight () {
    Router.navigate('doorbell')
  }

  _handleDown () {
    Router.navigate('recordings')
  }

  _handleUp () {
    Router.navigate('grid')
  }

  pageTransition () {
    return 'fadeIn'
  }
}