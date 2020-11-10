'use strict';

const nasaSpaceWeatherUrl = 'https://api.nasa.gov/DONKI/notifications?api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu'




function showNasaSpaceWeather(data) {
	console.log(data);


	
	let spaceWeatherHtml = document.getElementById('target');
	spaceWeatherHtml.innerHTML = 
	`
	<article>
	<div class="centerit">
	<img src="space_weather.jpg" alt="Space Weather"><br>
	</div>
	<h2>Current Space Weather:</h2>
		<ul>
			<li><h3> Message Type:</h3> <p>${data[0].messageType}</p></li>
			<li> <h3>Message ID:</h3> <p>${data[0].messageID}</p></li>
			<li> <h3>Message Details:</h3> <p><a href="${data[0].messageURL}" target="_blank">Click Here</a></p></li>
			<li> <h3>Message Issue Time:</h3> <p>${data[0].messageIssueTime}</p></li>
			<li> <h3>Message:</h3> <p>${data[0].messageBody}</p></li>
		</ul>
	</article>
	`;

let spaceWeatherHeadersHtml = document.getElementById('target-2');

spaceWeatherHeadersHtml.innerHTML = `	<div class="js-space-2 group">
	<h2>Past Weather:</h2>`;

for (let i = 1; i < 4; i++) {
	let spaceWeatherPastHtml = document.getElementById('target-2');
	spaceWeatherPastHtml.innerHTML += `
	<!-- <div class="js-space-s-blks"> -->
		<ul>
			<li><h3>Type:</h3> <p>${data[i].messageType}</p></li>
			<li><h3>ID:</h3> <p>${data[i].messageID}</p></li>
			<li><h3>Details:</h3> <p><a href="${data[i].messageURL}" target="_blank">Click Here</p></a>
			<li><h3>Issue Time:</h3> <p>${data[i].messageIssueTime}</p></a>
		</ul>
	<!-- </div> -->
	`;

	}
}







function fetchNasaSpaceWeather () {

	fetch(nasaSpaceWeatherUrl)
		.then(response => response.json())
		.then (responseJson =>
				showNasaSpaceWeather(responseJson)
			)
		.catch(error => console.log("*****CATCH @ Space Weather*****"))


}





function spaceWeatherBtn() {
	$('#spaceweather').submit(event => {
		event.preventDefault();
		console.log("Space Weather Button Works");
		$('#target').empty();


		fetchNasaSpaceWeather();

	})
}






function all() {

	spaceWeatherBtn();

}

$(all);