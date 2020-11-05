'use strict';

const nasaSpaceWeatherUrl = 'https://api.nasa.gov/DONKI/notifications?api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu'




function showNasaSpaceWeather(data) {
	console.log(data);


	
	let spaceWeatherHtml = document.getElementById('target');
	spaceWeatherHtml.innerHTML = 
	`
	<div class="js-space-1">
	<h2>Current Space Weather Situation</h2>
		<ul>
			<li><h3> Message Type:</h3> ${data[0].messageType} </li>
			<li> <h3>Message ID:</h3> ${data[0].messageID}</li>
			<li> <h3>Message Details:</h3> <a href="${data[0].messageURL}" target="_blank">Link</a></li>
			<li> <h3>Message Issue Time:</h3> ${data[0].messageIssueTime}</li>
			<li> <h3>Message:</h3> ${data[0].messageBody}</li>
		</ul>
	</div>
	`;

let spaceWeatherHeadersHtml = document.getElementById('target-2');

spaceWeatherHeadersHtml.innerHTML = `	<div class="js-space-2 group">
	<h2>Past Weather</h2>`;

for (let i = 1; i < 6; i++) {
	let spaceWeatherPastHtml = document.getElementById('target-2');
	spaceWeatherPastHtml.innerHTML += `
	<!-- <div class="js-space-s-blks"> -->
		<ul>
			<li><h3>Type:</h3> ${data[i].messageType}</li>
			<li><h3>ID:</h3> ${data[i].messageID}</li>
			<li><h3>Details:</h3> <a href="${data[i].messageURL}" target="_blank">Link</a>
			<li><h3>Issue Time:</h3> ${data[i].messageIssueTime}</a>
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