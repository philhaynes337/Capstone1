'use strict';


const spaceXcompanyInfo = 'https://api.spacexdata.com/v4/company';

const spaceXUpcomingUrl = 'https://api.spacexdata.com/v4/launches/upcoming';


function showSpaceXCompanyInfo(data) {

		$('target').empty();

		let showSpaceXHtml = document.getElementById('target');
		showSpaceXHtml.innerHTML = `

			<!-- <div class="js-spacex-info group"> -->
			<article>
				<div class="centerit">
					<img src="spacex_logo2.png" class="logo"><br>
				</div>
			<h2>Company Profile:</h2>
				<ul>
					<li><h3>Company Name:</h3><p> ${data.name}</p></li>
					<li><h3>Founder:</h3><p> ${data.founder}</p></li>
					<li><h3>Date Founded:</h3> <p>${data.founded}</p></li>
					<li><h3>Number of Employees:</h3><p>${data.employees}</p></li>
					<li><h3>Vehicles:</h3> <p>${data.vehicles}</p></li>
					<li><h3>Launch Sites:</h3> <p>${data.launch_sites}</p></li>
					<li><h3>Test Sites:</h3> <p>${data.test_sites}</p></li>
					<li><h3>CEO:</h3> <p>${data.ceo}</p></li>
					<li><h3>CTO:</h3> <p>${data.cto}</p></li>
					<li><h3>COO:</h3> <p>${data.coo}</p></li>
					<li><h3>CTO Propulsion:</h3> <p>${data.cto_propulsion}</p></li>
					<li><h3>Website:</h3> <a href="${data.links.website}" target="_blank"><p>Click Here</a></p></li>
					<li><h3>Flickr:</h3> <a href="${data.links.flickr}" target="_blank"><p>Click Here</a></p>
					<li><h3>Twitter:</h3> <a href="${data.links.twitter}" target="_blank"><p>Click Here</a></p></li>
					<li><h3>Elon's Twitter:</h3> <a href="${data.links.elon_twitter}" target="_blank"><p>Click Here</a></p></li>


				</ul>
				</article>
			

		`
		let showSpaceXHtmlII = document.getElementById('target-2');
		showSpaceXHtmlII.innerHTML = `
		<div class="divcol">
			<section>
				<h2>Summary:</h2>
					<ul>
						<li><p>${data.summary}</p></li>
					</ul>
			</section>
			<section>
				
				<h2>Headquarters:</h2>
					<ul>
						<li><p>${data.headquarters.address}<br>
						${data.headquarters.city}, ${data.headquarters.state}</p></li>
			<section>
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
	<article>
	<div class="centerit">
	<img src="spacex_launch.jpg" alt="SpaceX Launch"><br>
	</div>
	<h2>Next Launch Information:</h2><br>
	
		<ul>
			<li><h3>Next Launch is:</h3><p> ${responseJson[0].date_utc}</p></li>
			<li><h3>Flight Number:</h3> <p>${responseJson[0].flight_number}</p></li>
			<li><h3>Details:</h3> <p>${responseJson[0].details}</p></li>
		</ul>
	</article>


	`;

	let launchHeaderHtml = document.getElementById('target-2');
	launchHeaderHtml.innerHTML = `

		
				<h2>Upcoming Launches:</h2>
			

	`;



	for (let i = 1; i < 5; i++) {

		let nextFiveLaunchesHtml = document.getElementById('target-2');
		nextFiveLaunchesHtml.innerHTML += `

			
				<ul>

					<li><h3>Flight Number:</h3> <p>${responseJson[i].flight_number}</p></li>
					<li><h3>Date:</h3><p> ${responseJson[i].date_utc}</p></li>
					
				</ul>
			

		`
	}

	

}




function all() {
	
	spaceXBtn();
	upcomingLaunch();
}

$(all);