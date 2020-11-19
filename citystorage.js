// while loop
// place after #citySearchBtn

// function grabs city from search bar and throws into local storage
function getCity() {
    var cityArray = [ ],
    keys = Object.keys(localStorage),
    i = keys.length;
  
    while (i--) {
      cityArray.push(localStorage.getItem(keys[i]));
    }
    return cityArray;
  }
  console.log(getCity());