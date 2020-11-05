'use strict';


function showAboutHtml() {

	let aboutHtml = document.getElementById('target');

	aboutHtml.innerHTML = `
    <p>Welcome to Mission Control! Here you will find NASA's Picture of the day with details. Also information about SpaceX with upcoming launches.
    We also have current and past space weather updates!
    </p>
	`;

}

function aboutHtmlBtn() {

	$('#main').submit(event => {
		event.preventDefault();
		console.log("Loading Main");
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