'use strict';


const spaceXcompanyInfo = 'https://api.spacexdata.com/v4/company';

const spaceXUpcomingUrl = 'https://api.spacexdata.com/v4/launches/upcoming';


function showSpaceXCompanyInfo(data) {

		$('target').empty();

		let showSpaceXHtml = document.getElementById('target');
		showSpaceXHtml.innerHTML = `

			<!-- <div class="js-spacex-info group"> -->
			<h2>Company Profile:</h2>
				<ul>
					<li><h3>Company Name:</h3> ${data.name}</li>
					<li><h3>Founder:</h3> ${data.founder}</li>
					<li><h3>Date Founded:</h3> ${data.founded}</li>
					<li><h3>Number of Employees:</h3>${data.employees}</li>
					<li><h3>Vehicles:</h3> ${data.vehicles}</li>
					<li><h3>Launch Sites:</h3> ${data.launch_sites}</li>
					<li><h3>Test Sites:</h3> ${data.test_sites}</li>
					<li><h3>CEO:</h3> ${data.ceo}</li>
					<li><h3>CTO:</h3> ${data.cto}</li>
					<li><h3>COO:</h3> ${data.coo}</li>
					<li><h3>CTO Propulsion:</h3> ${data.cto_propulsion}</li>
					<li><h3>Website:</h3> <a href="${data.links.website}" target="_blank">${data.links.website}</a></li>
					<li><h3>Flickr:</h3> <a href="${data.links.flickr}" target="_blank">${data.links.flickr}</a>
					<li><h3>Twitter:</h3> <a href="${data.links.twitter}" target="_blank">${data.links.twitter}</a></li>
					<li><h3>Elon's Twitter:</h3> <a href="${data.links.elon_twitter}" target="_blank">${data.links.elon_twitter}</a></li>


				</ul>
			

		`
		let showSpaceXHtmlII = document.getElementById('target-2');
		showSpaceXHtmlII.innerHTML = `

		<h2>Summary:</h2>
				<ul>
					<li>${data.summary}</li>
				</ul>

				
			<h2>Headquarters:</h2>
				<ul>
					<li>${data.headquarters.address}<br>
					${data.headquarters.city}, ${data.headquarters.state}</li>

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
			

	$('#target-2').empty();

	fetchSpaceXCompanyInfo();

	});


}


function upcomingLaunch() {

	$('#launches').submit(event => {
		event.preventDefault();
		

		$('#target-2').empty();

		fetchUpcomingLaunch();
	})
}


function fetchUpcomingLaunch() {

	fetch(spaceXUpcomingUrl)
		.then(response => {
			if (response.ok) {
				

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
	

	let launchHtml = document.getElementById('target');
	launchHtml.innerHTML = 
	`
	<div>
	<h2>Next Launch Information:</h2><br>
	
		<ul>
			<li><h3>Next Launch is:</h3> ${responseJson[0].date_utc}</li>
			<li><h3>Flight Number:</h3> ${responseJson[0].flight_number}</li>
			<li><h3>Details:</h3> ${responseJson[0].details}</li>
		</ul>
	</div>


	`;

	let launchHeaderHtml = document.getElementById('target-2');
	launchHeaderHtml.innerHTML = `

		
				<h2>Upcoming Launches:</h2>
			

	`;



	for (let i = 1; i < 5; i++) {

		let nextFiveLaunchesHtml = document.getElementById('target-2');
		nextFiveLaunchesHtml.innerHTML += `

			
				<ul>

					<li><h3>Flight Number:</h3> ${responseJson[i].flight_number}</li>
					<li><h3>Date:</h3> ${responseJson[i].date_utc}</li>
					
				</ul>
			

		`
	}

	

}




function all() {
	
	spaceXBtn();
	upcomingLaunch();
}

$(all);