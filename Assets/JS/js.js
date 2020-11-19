// GLOBAL VARIABLES
var cities = [];
var citySearchButton = $("#citySearchBtn");
var citySearchBox = $("#citySearch");

// GLOBAL triposo API variables
var triposoAPIKey = "7ZTLRO4H";
var triposoAPIToken = "yx4cnfzccsyrugqslwb2eqc2s92obaye";
// GLOBAL Open Weather Map API Key
var WeatherAPIKey = "a0ed00a1e03e86452a0e4c5419b896b8";


//-----------------------------------------------------------------------------------------------------------------------//


// TriposoAPI Ajax call
function triposoAPI( capitalizeCity ) {
    var triposoURL = "https://www.triposo.com/api/20200803/location.json?id=" + capitalizeCity + "&account=" + triposoAPIKey + "&token=" + triposoAPIToken;  
    console.log(triposoURL);
    $.ajax({ url: triposoURL,  method: "GET"
    
        }).then(function(response) {
           
          
          // city name found at: response.results[0].id
          var cityEl = response.results[0].id;
          // country name found at: response.results[0].country_id
          var countryEl = response.results[0].country_id;
          // cityImage  
          var imgURL = response.results[0].images[0].source_url;

          response.results[0].id;
          // localStorage
          // cities.push(cityObject);
          // localStorage.setItem('city', cityObject);
          console.log(cities);
        });
    // }
    // displayCity ( cityEl , countryEl , )      
};


//----------------------------------------------------------------------------------------------------------------------//


// WeatherAPIKey API AJAX CALL
function weatherAPI ( city ) {
    var WeatherAPIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPIKey;
    console.log(weatherURL);
    $.ajax({ url: weatherURL, method: "GET" }).then(function(response) {
    
      $("#citySearchBtn").on("click", function(event) {
          event.preventDefault();
          //      var tempF=(response.main.temp-273.15)* 1.80 + 32;          
              // $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");          
  x            // $(".#").text("Temperature:"+" "+tempF.toFixed(0));          
              // $(".#").text("Humitidty:"+" "+response.main.humidity);       
              // $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));
    });    
    console.log(response)
    });
};





function displayCity () {

  // document get data from localStorage
  // change background-image data for .hero-selection
  // change h1 text for headingMain
  // change h5 text for paragraphMain
};





function previousCity () {
  // clear local storage
  // push cities array to localStorage
  

};




// Click event listerner to our search button.
citySearchButton.on("click", function(event) {
    event.preventDefault();
  // This line grabs the input from the textbox
  var city = citySearchBox.val().trim();
  var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);

  // Adding movie from the textbox to our array
  cities.push(capitalizeCity);
  localStorage.setItem('cities', cities);
  // localStorage.setItem('city', capitalizeCity);
  // Calling renderButtons which handles the processing of our movie array
  triposoAPI( capitalizeCity );



  
  weatherAPI( city );
        //---------------------ONCE FINISHED---------------------------//
  displayCity();
  previousCity();
  // console.log(city);
  console.log(city)
});








// console.log(response.results[0]);
// // Creating a div to hold the city & information
// var cityDiv = $("<div class='searchedCity'>");

// // Storing the city name data
// var cityEl = response.results[0].id;

// // Creating an element to have the city name displayed
// var pOne = $("<h2>").text( cityEl );

// // Displaying the name
// cityDiv.append(pOne);

// // Storing the country name
// var countryName = response.results[0].country_id;

// // Creating an element to hold the country name
// var pTwo = $("<h3>").text( countryName );

// // Displaying the country name
// cityDiv.append(pTwo);

// // retreiving image URL
// var imgURL = response.results[0].images[0].source_url;

// // creating an element to hold the image
// var image = $("<img>").attr("src", imgURL);

// // Appending the image
// cityDiv.append(image);

// // Putting the entire city div above previous city divs.
// $("#searchedCity").prepend(cityDiv);





// [
//   {Seattle, USA, URL, Weather
//   }
//   {amsterdam, Netherlands, URL, Weather}
// ]