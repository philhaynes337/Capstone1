'use strict';


const spaceXcompanyInfo = 'https://api.spacexdata.com/v4/company';

const spaceXUpcomingUrl = 'https://api.spacexdata.com/v4/launches/upcoming';





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


function upcomingLaunch() {

	$('#launches').submit(event => {
		event.preventDefault();
		console.log("upcomingLaunches Works!");

		fetchUpcomingLaunch();
	})
}


function fetchUpcomingLaunch() {

	fetch(spaceXUpcomingUrl)
		.then(response => {
			if (response.ok) {
				console.log("Conncted to SpaceX Upcoming Launches")

				return response.json();
			}
			throw new Error(response.statusText);
			response.json()

		})
		.then(responseJson => upcomingLaunchShow(responseJson))
		.catch(error => {
			console.log("JSON ERROR @ Upcoming Launches");
		})
}

function upcomingLaunchShow(responseJson) {
	$('#target').empty();
	console.log(responseJson);

	let launchHtml = document.getElementById('target');
	launchHtml.innerHTML = 
	`
	<div id="nextLaunch">
		<ul>
			<li>Next Launch is: ${responseJson[0].date_utc}</li>
			<li>Flight Number: ${responseJson[0].flight_number}</li>
			<li>Details: ${responseJson[0].details}</li>
		</ul>
	</div>
	<div id="nextFiveLaunches-1">

	</div>

	`;

	

}




function all() {
	console.log("SpaceX Started!")
	spaceXBtn();
	upcomingLaunch();
}

$(all);