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
			<li> Message Type: ${data[0].messageType} </li>
			<li> Message ID: ${data[0].messageID}</li>
			<li> Message Details: <a href="${data[0].messageURL}" target="_blank">Link</a></li>
			<li> Message Issue Time: ${data[0].messageIssueTime}</li>
			<li> Message: ${data[0].messageBody}</li>
		</ul>
	</div>
	`;

let spaceWeatherHeadersHtml = document.getElementById('target-2');

spaceWeatherHeadersHtml.innerHTML = `	<div class="js-space-2">
	<h2>Past Weather</h2>`;

for (let i = 1; i < data.length; i++) {
	let spaceWeatherPastHtml = document.getElementById('target-2');
	spaceWeatherPastHtml.innerHTML += `
	<div ="js-space-s-blks">
		<ul>
			<li>Type: ${data[i].messageType}</li>
			<li>ID: ${data[i].messageID}</li>
			<li>Details: <a href="${data[i].messageURL}" target="_blank">Link</a>
			<li>Issue Time: ${data[i].messageIssueTime}</a>
		</ul>
	</div>
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