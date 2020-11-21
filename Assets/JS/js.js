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


// geoAPI Ajax call
function geoAPI( capitalizeCity ) {
    
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=" + capitalizeCity,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "40b74e1f4amsh068422a7e0b07d6p129d70jsna842418e168e",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    
    // city name found at: response.results[0].id
    var cityEl = response.data[0].city;
    // country name found at: response.results[0].country_id
    var countryEl = response.data[0].country;      // header contains city and country names. (still need to figure out how to remove _ in names)
    $("#headingMain").text(cityEl);
    $("#countryEl").text(countryEl);

    $("#textMain").addClass("box");

    console.log(response.data);
  });

};


//----------------------------------------------------------------------------------------------------------------------//


// WeatherAPIKey API AJAX CALL
function weatherAPI (city) {
  // var cityEl = city
  // cityEl = cityEl.replace(" " , "_");
  // console.log(cityEl);
  var WeatherAPIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + WeatherAPIKey;
  console.log(weatherURL);
   
  $.ajax({ 
    url: weatherURL, 
    method: "GET" 
  }).then(function(response) {
    console.log(response)
    var tempF = (response.main.temp);          
    $("#weatherData").text("Temperature: " + tempF.toFixed(0)+"°");  
    var imageURL = response.weather[0].icon;
    var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"+imageURL+"@2x.png");
          console.log(imageURL)
    $("#weatherData").append(iconImg) 
    $("#citySearchBtn").on("click", function(event) {
      event.preventDefault();  
    });    
  });
};



//---------------------------------------------------------------------------------------------------------------------------//


// TriposoAPI Ajax call
function triposoAPI( capitalizeCity ) {
  var triposoURL = "https://www.triposo.com/api/20200803/location.json?id=" + capitalizeCity + "&account=" + triposoAPIKey + "&token=" + triposoAPIToken;  
  console.log(triposoURL);
  $.ajax({ url: triposoURL,  method: "GET" 
      }).then(function(response) {       
        var imgURL = response.results[0].images[0].source_url;
        $(".hero-section").css("background-image", "url(" + imgURL + ")");

        // snippet from city
        var citySnippetEl = response.results[0].snippet;
        $("#paragraphEl").text(citySnippetEl);

        response.results[0].id;
        // localStorage
        // cities.push(cityObject);
        // localStorage.setItem('city', cityObject);
        console.log(response.results[0].country_id);
      }); 
};






// Click event listerner to our search button.
$("#citySearchBtn").click(function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var city = $("input[name=citySearch]").val();
  console.log(city)
  var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
  // This line grabs the input from the textbox
  var city = citySearchBox.val().trim();
  var capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
  var cityAllOne = capitalizeCity;
  cityAllOne = cityAllOne.replace(/ /g, "_");
  
  // Adding movie from the textbox to our array
  cities.push(capitalizeCity);
  localStorage.setItem('cities', JSON.stringify(cities));
  // localStorage.setItem('city', capitalizeCity);
  // Calling renderButtons which handles the processing of our movie array
  geoAPI( city );
  weatherAPI( city );
  triposoAPI( capitalizeCity );
  //---------------------ONCE FINISHED---------------------------//
  // displayCity();
  // previousCity();
  // console.log(city);
  console.log(city)
});

console.log(cities);

$( function previousCity() {
  // get info and parse from cities array in local storage
  var cityComplete = JSON.parse(localStorage.getItem('cities'));
  // populate autocomplete in #citySearch
  $( "#citySearch" ).autocomplete({source: cityComplete});
} );

// };



// ------------------------BEHOLD. MY FUTURE STUFF-------------------------------------------------------//


// Google image API
// function googleImg ( city ) {
  //   googleAPIKey = AIzaSyAPeiRIAKmZHyg0iRZtShVzhInKKRiQv1I;
  //   googleURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1900&photoreferencekey=" + googleAPIKey + ""
// };



// function displayCity () {

//   // document get data from localStorage
//   // change background-image data for .hero-selection
//   // change h1 text for headingMain
//   // change h5 text for paragraphMain
// };




