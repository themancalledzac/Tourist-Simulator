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





// GLOBAL VARIABLES
var cities = [];


// Zac's playground

function triposoAPI( chosenLocation ) {
    $("#searchedCity").empty();
  for (var i = 0; i < cities.length; i++) {

    var city = cities[i];
    // var chosenLocation = $(city);
    var triposoAPIKey = "7ZTLRO4H";
    var triposoAPIToken = "yx4cnfzccsyrugqslwb2eqc2s92obaye";
    var triposoURL = "https://www.triposo.com/api/20200803/location.json?id=" + city + "&account=" + triposoAPIKey + "&token=" + triposoAPIToken;
  
    console.log(triposoURL);
    $.ajax({ url: triposoURL,  method: "GET"
    
        }).then(function(response) {
  
          console.log(response.results[0]);
          // Creating a div to hold the city & information
          var cityDiv = $("<div class='searchedCity'>");
  
          // Storing the city name data
          var cityEl = response.results[0].id;
          
          // Creating an element to have the city name displayed
          var pOne = $("<h2>").text( cityEl );
  
          // Displaying the name
          cityDiv.append(pOne);
  
          // Storing the country name
          var countryName = response.results[0].country_id;
  
          // Creating an element to hold the country name
          var pTwo = $("<h3>").text( countryName );
  
          // Displaying the country name
          cityDiv.append(pTwo);
  
          // retreiving image URL
          var imgURL = response.results[0].images[0].source_url;
  
          // creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
  
          // Appending the image
          cityDiv.append(image);
          
          // Putting the entire city div above previous city divs.
          $("#searchedCity").prepend(cityDiv);


  
          // console.log(response.results)
          // console.log(triposoURL)
        });
  }

};


// Click event listerner to our search button.
$("#citySearchBtn").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var city = $("#citySearch").val().trim();
  var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);

  // Adding city from the textbox to our array
  cities.push(capitalizeCity);

  // Calling renderButtons which handles the processing of our city array
  triposoAPI(capitalizeCity);
  // console.log(city);
      });

// Click event listerner to our search button.
$("#citySearchBtn").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var city = $("#citySearch").val().trim();
  var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);

  // Adding city from the textbox to our array
  cities.push(capitalizeCity);

  // Calling renderButtons which handles the processing of our city array
  triposoAPI(capitalizeCity);
  // console.log(city);
      });

  // Adding city from the textbox to our array
  cities.push(capitalizeCity);
  
  

  
  // IF there is an existing searchedCity div present
  // WHEN the search button is clicked
  // THEN the existing searchedCity div is removed
  // AND replaced with a new searchedCity div
  
  //   if($("#searchedCity").length) {
      //     $("div").remove("#searchedCity");
      //   }
      
    //   if($("#searchedCity").length) {
    //       $("div").replace("#searchedCity");
    //   }

  
  
  
  
  
  
  
  
  
  // LOCATION: City, Country, Image

// POI: called when clicked on card. pull:
    // 3 points of interest
    // descriptive text
    // names of those points
    // images
    // WEATHER info from weatherAPI
    // Time if allowed
    // Native Language

// LOCATION: City, Country, Image

// POI: called when clicked on card. pull:
    // 3 points of interest
    // descriptive text
    // names of those points
    // images
    // WEATHER info from weatherAPI
    // Time if allowed
    // Native Language


 // openweathermap.org
var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
var weatherURL = "https://www.api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
console.log(weatherURL);
$.ajax({ url: weatherURL, 
   method: "GET"

    }).then(function(response) {
      
      $("#citySearchBtn").on("click", function(event) {
        event.preventDefault();
      
        // This line grabs the input from the textbox
        var city = $("#citySearch").val().trim();
        var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
      
        // Adding city from the textbox to our array
        cities.push(capitalizeCity);
      
        // Calling renderButtons which handles the processing of our city array
        triposoAPI(capitalizeCity);
        // console.log(city);
      });
      
      console.log(response)
    });




//      var tempF=(response.main.temp-273.15)* 1.80 + 32;


//     $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

//     $(".#").text("Temperature:"+" "+tempF.toFixed(0));

//     $(".#").text("Humitidty:"+" "+response.main.humidity);

//     $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));



