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




	
	fetch(apiCorrectDateUrl)
		.then(response => {
			if (response.ok) {
				
				

				return response.json();
			}
			throw new Error(response.statusText);
			response.json()


		})


		.then(responseJson => loadDisplayPictureOfTheDay(responseJson))
		.catch(error => {
			console.log('something went wrong');
		
		})

}


function loadDisplayPictureOfTheDay(data) {

		
		let nasaPodHtml = document.getElementById('target');
		nasaPodHtml.innerHTML = `

		<article>
		<div class="centerit">
		<img src="${data.url}" alt="Picture of the Day"><br>
		</div>
		
		<h2>${data.title}</h2>
	
			<ul>
				<li><h3>Explanation:</h3> <p> ${data.explanation}</p></li>
				<li><h3>Copyright:</h3><p> ${data.copyright}</p></li>
				<li><h3>Date:</h3><p> ${data.date}</p></li>
				<li><h3>HD Version:</h3> <a href="${data.hdurl}" target="_blank"><p>HD Image Link</a></p></li>

		
		</article>



		`;
}

function pictureOfTheDayBtn() {
	$('#images').submit(event => {
		event.preventDefault();
		
		$('#target').empty();
		$('#target-2').empty();


		loadPicOfDay();

	})
}


function all() {

	pictureOfTheDayBtn();

}



$(all);



