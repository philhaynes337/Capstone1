let dateNow = Date("March 21, 2012");

let currentDate = Date.parse(dateNow);
let convertedCurrentDate = currentDate - 86400000;

let calDate = Date(convertedCurrentDate);
let testDate = Date();


console.log(dateNow);
console.log(currentDate);
console.log(convertedCurrentDate);
//console.log(dateNow);
console.log(calDate);
console.log(dateNow);
console.log(testDate);
//console.log(typeof convertedCurrentDate);
//console.log(typeof 86400000);


let d = Date();
d.setHours(d.getHours() - 24);
console.log(d);