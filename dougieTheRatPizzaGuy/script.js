function query(event) {

    // use this variable to store the value of the current borough (as a string)
    // EXAMPLE: let borough = "BRONX"
    let borough = document.getElementById("string").addEventListener("click", dosomething);
  
    // use this variable to store the number of results the user requested (as a string or number)
    // EXAMPLE: let numOfResults = 5
    let numOfResults;
  
    // leave the next four lines alone 
    // in a nutshell, we make a request to a free and public api that handles NYPD data 
    // and it eventually gives us back an object (JSON) to deal with 
    
    let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`
  
    fetch(api)
      .then((data) => data.json())
      .then((json) => showResults(json));
  }
  
  
  // you'll do most of your DOM Manipulation in this function
  function showResults(complaints) {
  
  }