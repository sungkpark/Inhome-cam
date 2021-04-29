var fs = require('fs');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = require('request');

let _BASE_URL = "https://api.netatmo.com/";
let _AUTH_REQ = _BASE_URL + "oauth2/token";

let clientID = "";
let clientSecret = "";
let username = "";
let password = "";
let scope = "read_camera%20access_camera";

let authUrl = "https://api.netatmo.com/oauth2/authorize?"
                    + "client_id=" + clientID
                    + "&scope=" + scope;

let camera_url_m3u8;

function get_camera(callback) {

    let authOptions = {
        url: "https://api.netatmo.com/oauth2/token",
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(clientID + ':' + clientSecret).toString('base64'))
        },
        form: {
            username: '',
            password: '',
            grant_type: 'password',
            scope: "read_camera access_camera read_presence access_presence"
        },
        json: true
    }

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let token = body.access_token;

            let getHomeDataUri = "https://api.netatmo.com/api/gethomedata";

            var options = {
                url: getHomeDataUri,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            get_live_shot(options);
        } else {
            console.log(response);
        }
    })
}

function get_live_shot(options, callback) {
    request.get(options, function (error, response, body) {
        let camera = body.body.homes[0].cameras[0];
        // snapshot => body.body.homes[0].events[i].snapshot.url
        console.log(body.body.homes[0].events[0]);
        if (camera.is_local == true) {
            let photo_url = camera.vpn_url + "/live/snapshot_720.jpg";
            console.log(photo_url);
        } else {
            console.log("Your camera is on a different network. Sorry, reconnect to the same network.");
        }
    })
}

function get_recent_motion(options, callback) {
    request.get(options, function (error, response, body) {
        let camera = body.body.homes[0].cameras[0];
        let video_id = body.body.homes[0].events[1].video_id;
        // console.log(body.body.homes[0].cameras[0]);
        if (camera.is_local == true) {
            camera_url_m3u8 = camera.vpn_url + "/camera_url/vod/" + video_id + "/index_local.m3u8";
            fs.writeFile('./m3u8/index_local.m3u8', camera_url_m3u8, function (err) {
                if (err) throw err;
                // console.log('Saved!');
            });
            console.log(camera_url_m3u8);
        } else {
            console.log("Your camera is on a different network. Sorry, reconnect to the same network.");
        }
    })
}

function get_live_stream(options, callback) {
    request.get(options, function (error, response, body) {
        let camera = body.body.homes[0].cameras[0];
        if (camera.is_local == true) {
            // console.log(camera.vpn_url + "/live/index_local.m3u8");
            // console.log(camera.vpn_url + "/live/files/medium/index_local.m3u8");
            camera_url_m3u8 = camera.vpn_url + "/live/files/medium/index_local.m3u8";
            console.log(camera_url_m3u8);
            fs.writeFile('./m3u8/index_local.m3u8', camera_url_m3u8, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        } else {
            console.log("Your camera is on a different network. Sorry, reconnect to the same network.");
        }
    })
}

get_camera(function (result) {
});


// camera url
// {
//     "local_url": "http://192.168.178.129/0ccb1f0ed87632c75b6a50b4cb8ba8f9",
//     "product_name": "Welcome Netatmo"
// }

// application url
// {
//     "local_url":"http://192.168.178.129/0ccb1f0ed87632c75b6a50b4cb8ba8f9",
//     "product_name":"Welcome Netatmo"
// }
