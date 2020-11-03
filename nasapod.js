'use strict';


var temp 


function loadPicOfDay(urlString) {

let cd = new Date();
	cd.setDate(cd.getDate() - 1);

	let year = cd.getFullYear();
	let month = cd.getMonth() + 1;
	let day = cd.getDate();

	let convertedDate = year + '-' + month  + '-' + day;

	let apiCorrectDateUrl = 'https://api.nasa.gov/planetary/apod?date='+ convertedDate +'&api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu';




	console.log("This is the url string: " + apiCorrectDateUrl);
	fetch(apiCorrectDateUrl)
		.then(response => {
			if (response.ok) {
				console.log("Connected to NASA's Picture of the Day!")
				//temp = response.json();

				return response.json();
			}
			throw new Error(response.statusText);
			response.json()


		})


		.then(responseJson => loadDisplayPictureOfTheDay(responseJson))
		.catch(error => {
			console.log('something went wrong');
			//let errorMsg = `${err.message}`;
			//console.log(errorMsg);
		})

}

//function dateConvert() {


//	let cd = new Date();
//	cd.setDate(cd.getDate() - 1);
//
//	let year = cd.getFullYear();
//	let month = cd.getMonth() + 1;
//	let day = cd.getDate();
//
//	let convertedDate = year + '-' + month  + '-' + day;
//
//	let apiCorrectDateUrl = 'https://api.nasa.gov/planetary/apod?date='+ convertedDate +'&api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu'
//
//	loadPicOfDay(apiCorrectDateUrl);


//}

function loadDisplayPictureOfTheDay(data) {

		console.log(data.url);
		let nasaPodHtml = document.getElementById('target');
		nasaPodHtml.innerHTML = `


		<img src="${data.url}">
		<div id="js-pod-description">
		<h2>${data.title}</h2>
			<ul>
				<li>Explanation:  ${data.explanation}</li>
				<li>Copyright: ${data.copyright}</li>
				<li>Date: ${data.date}</li>
				<li>HD Version: <a href="${data.hdurl}" target="_blank">HD Image Link</a></li>
		</div>



		`;
}

function pictureOfTheDayBtn() {
	$('#images').submit(event => {
		event.preventDefault();
		console.log("NASA POD Button Works!");
		$('#target').empty();


		loadPicOfDay();

	})
}


function all() {
	//dateConvert();
	//loadPicOfDay();
	//dateConvert();
	//loadDisplayPictureOfTheDay();
	pictureOfTheDayBtn();

}



$(all);



