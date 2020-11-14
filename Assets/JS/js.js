// main JS file for Project
// frameworks and apis used:
// https://get.foundation/index.html
// https://openweathermap.org/api
// http://geodb-cities-api.wirefreethought.com/
// https://developers.google.com/places/web-service/photos
// https://momentjs.com/
// https://www.triposo.com/
// ^ don't have to use all of these! read up first


// all functionality on the front page index
// navbar, with page information and about button
// WHEN about is pressed: modal/text box pops up containing names of group members

// front page functionality:
// 6 buttons with "popular tourist destinations"
// button that says "random"
// WHEN random button is pressed: drops you to a city pulled from google places api
// WHEN a popular destination is pressed: view city listed

// BUTTON BEHAVIOR:
// popular destinations:
// WHEN button is clicked:
// modal pops up containing information such as:
// city name. country name. weather information. trivia. current time?


// 
































// search first off
// triposoAPI()

// Zac's playground

// https://www.triposo.com/api/
// account ID: 7ZTLRO4H
// yx4cnfzccsyrugqslwb2eqc2s92obaye

// https://www.triposo.com/api/20200803/location.json?id=London&account=<account ID>&token=<API token>
function triposoAPI( chosenLocation ) {
// var chosenLocation = "Amsterdam";
  var triposoAPIKey = "yx4cnfzccsyrugqslwb2eqc2s92obaye";
  var triposoAPIToken = "7ZTLRO4H";
  var triposoURL = "https://www.triposo.com/api/20200803/location.json?id=" + chosenLocation + "&account=" + triposoAPIToken + "&token=" + triposoAPIKey;

  console.log(triposoURL);
  $.ajax({ url: triposoURL,  method: "GET"
  
      }).then(function(response) {
        // response sent to other function
  
        console.log(triposoURL)
        console.log(response)
      });
};







































































var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";

//location input

var location=$("#cityInput");

// openweathermap.org
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +location; "&appid=" + APIKey;





     var tempF=(response.main.temp-273.15)* 1.80 + 32;


    $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

    $(".#").text("Temperature:"+" "+tempF.toFixed(0));

    $(".#").text("Humitidty:"+" "+response.main.humidity);

    $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));




