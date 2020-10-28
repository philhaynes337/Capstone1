'use strict';


let cd = new Date();
	cd.setDate(cd.getDate() - 1);

	let year = cd.getFullYear();
	let month = cd.getMonth() + 1;
	let day = cd.getDate();

	let convertedDate = year + '-' + month  + '-' + day;

	let apiCorrectDateUrl = 'https://api.nasa.gov/planetary/apod?date='+ convertedDate +'&api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu';

	loadPicOfDay(apiCorrectDateUrl);



function loadPicOfDay(urlString) {


	console.log("This is the url string: " + urlString);
	fetch(urlString)
		.then(response => {
			if (response.ok) {
				console.log("Connected to NASA's Picture of the Day!")

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
		nasaPodHtml.innerHTML = '<img src="' + data.url + '">';
}


function all() {
	//dateConvert();
	loadPicOfDay();
	//dateConvert();
	//loadDisplayPictureOfTheDay();

}



$(all);



