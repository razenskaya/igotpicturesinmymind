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

app.get('/midnight:letters([a-zA-Z]{2})?', function(req, res) {

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
        },
        merch: {
            enabled: true,
            products: {
                _1: {
                    name: `[+ +] - debut album CD`,
                    price: 32.99,
                    url: 'https://store.missmikeeez.ru/xo',
                    artwork: '/items/1/artwork-110x110.webp'
                }
            }
        }
    });
});

app.get('/easyfun:letters([a-zA-Z]{2})?', function(req, res) {

    var uuid = '427d1efd-e744-4a41-8f15-ed5d8bfae11b';

    var clientIp = req.clientIp;
    var lookUp = geoip.lookup(clientIp);

   /* function finishcity() { if (lookUp.city) {
        return lookUp.city;
    } else {
       return "Unknown";
    } } */

    res.render('pages/index', {
        title: '365 PARTYGIRL REMIX',   
        artist: 'vamp',
        uri: req.path.substring(1),
        uuid: uuid,
        randomuuid: uuidv4(),
        genre: "Pop",
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
            apple: '1764191785',
            spotify: '52qrtveZ7LAWg0RO1J36A8',
            deezer: '632356171',
            youtubemusic: 'OLAK5uy_mYMKYRw_QBxQCk2UjMLXZ2NKYFVFISPAk',
            youtube: 'OLAK5uy_mtylcSwcmVcARA9NvrKG8LLAfJuebsQE0',
            amazon: 'B0DDS2LT7D',
            pandora: 'AL9r5bmhdcdbbm6'
        },
        merch: {
            enabled: true,  
            products: {
                _1: {
                    name: `BRAT (cd)`,
                    price: 14.98,
                    url: 'https://store.charlixcx.com/products/brat-cd',
                    artwork: 'https://store.charlixcx.com/cdn/shop/files/packshot_2.png?v=1711639414&width=823'
                },
                _2: {
                    name: `Club classics (keychain)`,
                    price: 10.00,
                    url: 'https://store.charlixcx.com/products/club-classic-keychain',
                    artwork: 'https://store.charlixcx.com/cdn/shop/files/KEYCHAIN_DANCE_front.png?v=1718725636&width=823'
                },
                _3: {
                    name: `BRAT (red picture disc)`,
                    price: 39.98,
                    url: 'https://store.charlixcx.com/products/brat-red-picture-disc',
                    artwork: 'https://store.charlixcx.com/cdn/shop/files/030724_Brat_VINYL_D2CRed01.jpg?v=1711983445&width=1100'
                },
                _4: {
                    name: `BRAT (translucent black vinyl)`,
                    price: 27.98,
                    url: 'https://store.charlixcx.com/products/brat-translucent-black-vinyl',
                    artwork: 'https://store.charlixcx.com/cdn/shop/files/MainImage.png?v=1709214157&width=823'
                },
            }
        }
    });
});

app.get('*', function(req, res) {
    res.render('pages/404')
})

app.listen(8080)
