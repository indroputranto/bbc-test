const express = require('express');
const app = express.Router();
const fs = require('fs');
const englishData = JSON.parse(fs.readFileSync('english.json'));
const hindiData = JSON.parse(fs.readFileSync('hindi.json'));

module.exports = function(app){
	app.post('/english', function(request, response) {
	  response.redirect('/english');
	});
	app.post('/hindi', function(request, response) {
	  response.redirect('/hindi');
	});
	//set route for english
	app.get('/english', (req, res, next) => {
		link = 'hindi';
		cityData = {};
		cityName = [];
		cityAqi = [];
		cityCigg = [];
		for (var key in englishData) {
			if (englishData.hasOwnProperty(key)) {
				if (/compare-tabs_1_city_.*._name/.test(key)) {
					cityName.push(englishData[key]);
					cityData['name'] = cityName;
				}
				if (/compare-tabs_1_city_.*._aqi/.test(key)) {
					cityAqi.push(englishData[key]);
					cityData['aqi'] = cityAqi;
				}
				if (/compare-tabs_1_city_.*._cigg/.test(key)) {
					cityCigg.push(englishData[key]);
					cityData['cigg'] = cityCigg;
				}	
			}
		}
		return res.render('english', { englishData, cityData, link });
	});

	//set route for hindi
	app.get('/hindi', (req, res, next) => {
		link = 'english';
		cityData = {};
		cityName = [];
		cityAqi = [];
		cityCigg = [];
		for (var key in hindiData) {
			if (hindiData.hasOwnProperty(key)) {
				if (/compare-tabs_1_city_.*._name/.test(key)) {
					cityName.push(hindiData[key]);
					cityData['name'] = cityName;
				}
				if (/compare-tabs_1_city_.*._aqi/.test(key)) {
					cityAqi.push(hindiData[key]);
					cityData['aqi'] = cityAqi;
				}
				if (/compare-tabs_1_city_.*._cigg/.test(key)) {
					cityCigg.push(hindiData[key]);
					cityData['cigg'] = cityCigg;
				}	
			}
		}
		return res.render('hindi', { hindiData, cityData ,link});

	});
}