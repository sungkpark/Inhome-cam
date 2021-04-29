let clientID = "";
let clientSecret = "";
let username = "";
let password = "";

export default class Authentication {

	constructor(app) {
		this._app = app;
		this.camera = null;
		this.events = [];
		this.access_token = null;
    	this.doAuth();
	}

	doAuth(feeditems) {
		const scope = this;
		let xhrData = new FormData();
		xhrData.append('username', username)
		xhrData.append('password', password)
		xhrData.append('grant_type', 'password')
		xhrData.append('scope', 'read_camera access_camera read_presence access_presence')

		fetch('https://api.netatmo.com/oauth2/token', { method: 'POST', headers: { 'Authorization': 'Basic ' + (window.btoa(clientID + ':' + clientSecret)) }, body: xhrData })
			.then(data => data.json())
			.then((data) => {
				scope.access_token = data.access_token
				fetch('https://api.netatmo.com/api/gethomedata', { method: 'POST', headers: { 'Authorization': 'Bearer ' + data.access_token }, body: xhrData })
				.then(data => data.json())
				.then((data) => {
					scope.camera = data.body.homes[0].cameras[0]
					console.log('CAM: ', scope.camera)
					for (let i = 0; i < 9; i++) {
						scope.events.push(data.body.homes[0].events[i])
					}
					// fetch('https://api.netatmo.com/api/addwebhook?url=https%3A%2F%2Fz52okqoon1.execute-api.us-east-1.amazonaws.com%2Fdefault%2FmotionDetect', { method: 'POST', headers: { 'Authorization': 'Bearer ' + scope.access_token }, body: xhrData })
					// .then(data => data.json())
					// .then((data) => {
					// 	console.log(data);
					// })
				})
			});
	}

	getCamera() {
		return this.camera;
	}

	getEvents() {
		return this.events;
	}
}
