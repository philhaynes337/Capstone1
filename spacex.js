'use strict';


const spaceXcompanyInfo = 'https://api.spacexdata.com/v4/company';

const spaceXUpcomingUrl = 'https://api.spacexdata.com/v4/launches/upcoming';


function showSpaceXCompanyInfo(data) {

		$('target').empty();

		let showSpaceXHtml = document.getElementById('target');
		showSpaceXHtml.innerHTML = `

			<div class="js-spacex-info">
			<h2>Company Profile:</h2>
				<ul>
					<li>Company Name: ${data.name}</li>
					<li>Founder: ${data.founder}</li>
					<li>Date Founded: ${data.founded}</li>
					<li>Number of Employees:${data.employees}</li>
					<li>Vehicles: ${data.vehicles}</li>
					<li>Launch Sites: ${data.launch_sites}</li>
					<li>Test Sites: ${data.test_sites}</li>
					<li>CEO: ${data.ceo}</li>
					<li>CTO: ${data.cto}</li>
					<li>COO: ${data.coo}</li>
					<li>CTO Propulsion: ${data.cto_propulsion}</li>
					<li>Website: <a href="${data.links.website}" target="_blank">${data.links.website}</a></li>
					<li>Flickr: <a href="${data.links.flickr}" target="_blank">${data.links.flickr}</a>
					<li>Twitter: <a href="${data.links.twitter}" target="_blank">${data.links.twitter}</a></li>
					<li>Elon's Twitter: <a href="${data.links.elon_twitter}" target="_blank">${data.links.elon_twitter}</a></li>


				</ul>
			<h2>Summary:</h2>
				<ul>
					<li>${data.summary}</li>
				</ul>
			<h2>Headquarters:</h2>
				<ul>
					<li>${data.headquarters.address}<br>
					${data.headquarters.city}, ${data.headquarters.state}</li>
			</div>

		`



}






function fetchSpaceXCompanyInfo() {



	fetch(spaceXcompanyInfo)
		.then(response => response.json())
		.then(responseJson =>

			showSpaceXCompanyInfo(responseJson))
		.catch(error => alert("Something went wrong!"));


	console.log("Connected to SpaceXAPI!!")
}







function spaceXBtn() {


	$('#spacex').submit(event => {
			event.preventDefault();
			console.log("SpaceX Button Works");

	$('#target-2').empty();

	fetchSpaceXCompanyInfo();

	});


}


function upcomingLaunch() {

	$('#launches').submit(event => {
		event.preventDefault();
		console.log("upcomingLaunches Works!");

		$('#target-2').empty();

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
	<h2>Next Launch Information</h2>
		<ul>
			<li>Next Launch is: ${responseJson[0].date_utc}</li>
			<li>Flight Number: ${responseJson[0].flight_number}</li>
			<li>Details: ${responseJson[0].details}</li>
		</ul>
	</div>
	<div id="nextFiveLaunches-1">

	</div>

	`;

	let launchHeaderHtml = document.getElementById('target-2');
	launchHeaderHtml.innerHTML = `

			<div id="next-launch">
				<h2>Upcoming Launches</h2>
			</div>

	`;



	for (let i = 1; i < responseJson.length; i++) {

		let nextFiveLaunchesHtml = document.getElementById('target-2');
		nextFiveLaunchesHtml.innerHTML += `

			<div id="js-next-flights">
				<ul>

					<li>Flight Number: ${responseJson[i].flight_number}</li>
					<li>Date: ${responseJson[i].date_utc}</li>
					
				</ul>
			</div>

		`
	}

	

}




function all() {
	console.log("SpaceX Started!")
	spaceXBtn();
	upcomingLaunch();
}

$(all);