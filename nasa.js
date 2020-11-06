'use strict';

const nasaUrl = 'https://images-api.nasa.gov/search?q=mars';




function fetchNasa() {


  fetch(nasaUrl) 
    

    .then(response => response.json())
    .then(responseJson => 
    	//resutlsNasa(responseJson))
      console.log(responseJson))//displayResults(responseJson))
    .catch(error => alert("Something went wrong!"));

   
   console.log("Connected to NASA!");
   let nasaMsg = "NASA MSG STRING";
   resutlsNasa(nasaMsg);

}



function resutlsNasa(msg) {
  let html = '';
  $('.target').html(msg);

  return

}


function nasaBtn() {



	$('#main').submit(event => {
    event.preventDefault();
  
   	console.log("This button works!")
    $('#target').empty();
    $('#target-2').empty();

   	fetchNasa();

  });

}



function all() {

}

$(all);