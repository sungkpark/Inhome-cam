var fs = require('fs');
var fetch = require("node-fetch");
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = require('request');

let _BASE_URL = "https://api.netatmo.com/";
let _AUTH_REQ = _BASE_URL + "oauth2/token";

let clientID = "5f5a685a1e6f7004af364dbd";
let clientSecret = "HRBFX6sQGM184iflUPu0A4eajDfVUeYg2FPjXSFac24";
let username = "sung.park@kpn.com";
let password = "Puckpiper123!";
// let redirectUri = "http://localhost:8888/callback";
let scope = "read_camera%20access_camera";
// let state = "molstraat"

// let authUrl = "https://api.netatmo.com/oauth2/authorize?"
//                     + "client_id=" + clientID
//                     + "&scope=" + scope;

let authUrl = "https://api.netatmo.com/oauth2/authorize?client_id=5f5a685a1e6f7004af364dbd&client_secret=HRBFX6sQGM184iflUPu0A4eajDfVUeYg2FPjXSFac24&scope=read_camera%20access_camera";

function get_camera(callback) {

    // let postParams = {
    //     "grant_type": "password",
    //     "client_id": clientID,
    //     "client_secret": clientSecret,
    //     "username": username,
    //     "password": password,
    //     "scope": scope
    // }

    let authOptions = {
        url: "https://api.netatmo.com/oauth2/token",
        headers: {
            'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
        },
        form: {
            username: 'sung.park@kpn.com',
            password: 'Puckpiper123!',
            grant_type: 'password',
            scope: "read_camera access_camera read_presence access_presence"
        },
        json: true
    }

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let token = body.access_token; //.split("|")[0];
            // console.log(token);

            let getHomeDataUri = "https://api.netatmo.com/api/gethomedata";

            var options = {
                url: getHomeDataUri,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            get_live_stream(options);
        } else {
            console.log(response);
        }
    })
    setTimeout(get_camera, 6000);
}

function get_live_shot(options, callback) {
    request.get(options, function (error, response, body) {
        // console.log(body.body.homes[0].events[0]);
        // console.log(body.body.homes[0].cameras[0].vpn_url);
        // vpn_url: https://prodvpn-eu-5.netatmo.net/restricted/10.255.76.162/0ccb1f0ed87632c75b6a50b4cb8ba8f9/MTYwMDM2NTYwMDp5tTZo4W_zZWxogoPVxMH2xs3FFQ,,
        let camera = body.body.homes[0].cameras[0];
        if (camera.is_local == true) {
            console.log(camera.vpn_url + "/live/snapshot_720.jpg");
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
            let camera_url_m3u8 = camera.vpn_url + "/live/files/medium/index_local.m3u8";
            console.log(camera_url_m3u8);
            let camera_url = new URL(camera_url_m3u8);
            // console.log(process.env.BASE_URL);
            // console.log(camera_url.href);
            var xhr = new XMLHttpRequest();
            xhr.open("GET", camera_url, false);
            xhr.responseType = "blob";

            xhr.onload = function () {
                // console.log(this.responseText);
                fs.writeFile('./m3u8/index_local.m3u8', this.responseText, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
            };
            xhr.send();
            // const stream = fs.createReadStream('https://prodvpn-eu-6.netatmo.net/restricted/10.255.18.68/0ccb1f0ed87632c75b6a50b4cb8ba8f9/MTYwMDM3MjgwMDopSuvDdEwPsKQ3LBaMMn7IsuTSwQ,,/live/files/medium/index_local.m3u8');
            const stream = fs.createReadStream('./m3u8/index_local.m3u8');
            stream.on("data", function (data) {
                var chunck = data.toString().split("\n"); 
                console.log(chunck[5]);
            })
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