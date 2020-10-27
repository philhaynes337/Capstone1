'use strict';


const spaceXcompanyInfo = 'https://api.spacexdata.com/v4/company';





function fetchSpaceXCompanyInfo() {



	fetch(spaceXcompanyInfo)
		.then(response => response.json())
		.then(responseJson =>

			console.log(responseJson))
		.catch(error => alert("Something went wrong!"));


	console.log("Connected to SpaceXAPI!!")
}







function spaceXBtn() {


	$('#spacex').submit(event => {
			event.preventDefault();
			console.log("SpaceX Button Works");

	fetchSpaceXCompanyInfo();

	});



}

function all() {
	console.log("SpaceX Started!")
	spaceXBtn();
}

$(all);