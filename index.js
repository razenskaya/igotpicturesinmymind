const express   = require('express')
const spotify   = require('spotify-auth-express');
const ejs       = require('ejs');
const fs        = require('fs');
const pathlib   = require('path')
const { 
    v1: uuidv1,
    v4: uuidv4,
  }             = require('uuid');
const getClientIP = require('@loxjs/express-client-ip');
const geoip       = require('geoip-lite');
const clist       = require('country-list-js'); 
const sharp       = require('sharp');

const app = express()
app.use(express.static('static'))
app.set('view engine', 'ejs');
app.use(getClientIP.middleware);

app.get('/', function(req, res) {
    res.redirect('https://linkfire.com/')
})

app.get('/midnightId', function(req, res) {

    var uuid = 'd056fa82-fc6e-422e-af14-718064869dd7';

    var clientIp = req.clientIp;
    var lookUp = geoip.lookup(clientIp);

   /* function finishcity() { if (lookUp.city) {
        return lookUp.city;
    } else {
       return "Unknown";
    } } */

    res.render('pages/index', {
        title: '[12:00]',
        artist: 'twelveM',
        uri: req.path.substring(1),
        uuid: uuid,
        randomuuid: uuidv4(),
        genre: "K-Pop",
        ip: {
            /*address: clientIp,
            country: clist.findByIso2(lookUp.country).name || "Unknown",
            countryCode: lookUp.country,
            continent: clist.findByIso2(lookUp.country).continent,
            city: finishcity(),
            lat: lookUp.ll[0],
            long: lookUp.ll[1],*/
            address: clientIp,
            country: "Unknown",
            countryCode: "Unknown" || "US",
            continent: "Unknown",
            city: "Unknown",
            lat: "Unknown",
            long: "Unknown"
        },
        services: {
            apple: '1752077772',
            spotify: '3D9B5dvCWEX8CrE3ehMMJs',
            deezer: '601466562',
            youtubemusic: 'OLAK5uy_ncQ8Mjg3Eyo51kyNNYHcg91-lriPDUqI8',
            youtube: 'OLAK5uy_m1lhQ-tGoZN7rMOU2opVUTIz3KMOFMyrU'
        }
    });
});

app.get('*', function(req, res) {
    res.render('pages/404')
})

app.listen(8080)
