import { Lightning, Router } from "wpe-lightning-sdk"

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
let imageURL = ''
export default class Recordings extends Lightning.Component {

  static _template() {
    return {
      Background: {
        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
      },
      Image: {
        mount: 0,
        x: 300,
        y: 180,
        scale: 1,
        src: imageURL,
        alpha: 1
      },
      Label: {
        x: 960,
        y: 50,
        mount: 0.5,
        text: {
          text: 'Live Snapshot',
          textColor: 0xaa000000
        }
      },
      Explanation: {
        x: 960,
        y: 100,
        mount: 0.5,
        alpha: 0.5,
        text: {
          fontSize: 27,
          textAlign: 'center',
          lineHeight: 35,
          text: 'press enter for a picture.\npress up to go back home.',
          textColor: 0xaa000000
        }
      }
    }
  }

  get authentication () {
    return this.fireAncestors('$getAuthentication')
  }

  _handleEnter() {
    console.log("Image will load in a second...");

    const camData = this.authentication.getCamera()
    // console.log(camData)

    let myHeaders = new Headers();
    myHeaders.append('X-Requested-With', 'XMLHttpRequest')
    myHeaders.append('Content-Type', 'image/jpeg')
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      // cache: 'default'
    };

    fetch(proxyUrl + camData.vpn_url + '/live/snapshot_720.jpg?t=' + new Date().getTime(), myInit)
      .then(response => response)
      .then(contents => {
        console.log(contents)
        this.tag("Image").patch({
          src: contents.url
        })
      })
      .then(console.log("Image is loaded."))
      .catch(console.error())
  }

  _handleUp() {
    Router.navigate('home')
  }
}
