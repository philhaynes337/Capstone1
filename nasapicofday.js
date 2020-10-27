'use stric';

//const apiUrlP = 'https://api.nasa.gov/planetary/apod?api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu';

//const apiKey = "";


function dateConvert() {


	let cd = new Date();
	cd.setDate(cd.getDate() - 1);

	let year = cd.getFullYear();
	let month = cd.getMonth() + 1;
	let day = cd.getDate();

	let convertedDate = year + '-' + month  + '-' + day;

	let apiCorrectDateUrl = 'https://api.nasa.gov/planetary/apod?date='+ convertedDate +'&api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu'

	loadPicOfDay(apiCorrectDateUrl)


}



function loadPicOfDay(date) {


	console.log("This is the date: " + date);
	fetch(date)
		.then(response => response.json())
		.then(responseJson => 
			//console.log("Connected to Nasa's Picture of the Day!")
			console.log(responseJson))
		.catch(error => console.log('something went wrong'));

}




function all() {
	dateConvert();
	loadPicOfDay();

}



$(all)



