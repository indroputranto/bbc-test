var  fs  =  require('fs'); 
var  gulp  =  require('gulp'); 
var  ejs  =  require("gulp-ejs");
var rename = require('gulp-rename');

gulp.task('ejs-english', function(){
    const englishData = JSON.parse(fs.readFileSync('english.json'));

    link = "hindi.html";
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

    return gulp.src('./views/english.ejs')
     .pipe(ejs({englishData, cityData, link}, {})) 
     .pipe(rename({extname:'.html'}))
     .pipe(gulp.dest('./dist'))
  });

gulp.task('ejs-hindi', function(){
    const hindiData = JSON.parse(fs.readFileSync('hindi.json'));

    link = "english.html";
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
    return gulp.src('./views/hindi.ejs')
    .pipe(ejs({hindiData, cityData,link}, {})) 
    .pipe(rename({extname:'.html'}))
     .pipe(gulp.dest('./dist'))
  });
  