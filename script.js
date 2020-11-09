'use strict';







function showAboutHtml() {

	let aboutHtml = document.getElementById('target');

	aboutHtml.innerHTML = `
	<artical>
		<div class="centerit">
			<img src="nasa_logo.png" class="nasalogo"><img src="spacex_logo2.png" class="logo">
				<br>
		</div>

	
    <p>Welcome to Mission Control! Here you will find NASA's Picture of the day with details. Also information about SpaceX with upcoming launches.
    We also have current and past space weather updates! Please enjoy this web application. Any questions please contact us at <a href="mailto:philhaynes337@gmail.com">Philhaynes337@gmail.com</a>.
    </p>
    </artical>
	`;

}

function aboutHtmlBtn() {

	$('#main').submit(event => {
		event.preventDefault();
		
		$('#target').empty();
		$('#target-2').empty();

		showAboutHtml();

	})

}

function all() {

	aboutHtmlBtn();
    showAboutHtml();
}

$(all);

