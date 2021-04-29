import { Router } from 'wpe-lightning-sdk'
import routes from './lib/routes'
import Authentication from './lib/Authentication.js'

const ws = new WebSocket("wss://uy0itxiqb1.execute-api.us-east-1.amazonaws.com/Test");

var scope = null;

ws.onopen = function(e) {
  // alert("[OPEN] Connection established");
};

ws.onmessage = function(event) {
  // alert(`[MESSAGE] Data received from server: ${event.data}`);
  var msg = JSON.parse(event.data);
  let notification = msg.push_type;

  if(msg.push_type == 'NACamera-movement' || msg.push_type == 'NACamera-person')
    notification = msg.message;

  var notify = function (tag) {
    scope.tag("NotificationElement")
      .patch({ 
        smooth:{ y: [-200, { duration: 2, delay: 1, timingFunction: 'ease-out' } ]}
      });
  }

  scope.tag("NotificationElement")
    .patch({ 
      smooth:{ 
        y: [
          20, 
          { 
            duration: 2, 
            delay: 0, 
            timingFunction: 'ease-out' 
          } 
        ]
      }, 
      text: {
        text: "New Notification: " + notification
      }
    });
  
  window.setTimeout(notify, 4000);
  console.log(msg);
};

ws.onclose = function(event) {
  if (event.wasClean) {
    alert(`[CLOSE] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    alert('[CLOSE] Connection died');
  }
};

ws.onerror = function(error) {
  alert(`[ERROR] ${error.message}`);
};

export default class App extends Router.App {
  _setup () {
    Router.startRouter(routes)
  }

  static _template () {
    return {
      ...super._template(),
      NotificationElement: {
        x: 100,
        y: -100,
        text: {
          text: ""
        }
      }
    }
  }

  _construct () {
    this._Authentication = new Authentication(this)
    scope = this
	}

	$getAuthentication () {
		return this._Authentication
	}
}
