console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);


function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;

    console.log(latitude);
    console.log(longitude);
}

navigator.geolocation.getCurrentPosition(success);

console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);

document.bgColor = "black";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
} else {
    console.log("get a better browser");
}

var header = document.getElementById('header');
console.log(header);

var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
};

console.log(getElementsByTagName[1]);

document.getElementsByTagName('p'); // returns multiple nodesvar specificParagraph = 
var specificParagraph =  document.getElementsByTagName('p')[1];
console.log(specificParagraph);

var photo = document.getElementById('abstractImg');

photo.src = 'https://images.unsplash.com/photo-1515940946701-731c68c86501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c211dfd93639ddeecf6f0913c45bba3&auto=format&fit=crop&w=500&q=60';

console.log(photo.src);


var pageMain = document.getElementsByTagName('main')[0];

var newParagraph  = document.createElement('p');
var paragraphText = document.createTextNode("text from javascript");
newParagraph.appendChild(paragraphText);

pageMain.appendChild(newParagraph);