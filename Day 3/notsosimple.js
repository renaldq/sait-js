// A Not-So Simple Website

// 4
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
}
var newImg = document.createElement('img');
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
    newImg.src = 'https://placekitten.com/200/300';
} else {
    newImg.src = 'http://www.placepuppy.net/400/250';
}
var pageBody = document.getElementsByTagName('body')[0];
pageBody.appendChild(newImg);


// 5
if (history.length = 1) {
    document.bgColor = "lightblue";
} else {
    document.bgColor = "coral";
}


// 6
var h1Style = document.getElementById('heading');
h1Style.style.color = 'red';
h1Style.style.fontSize = "34px";
h1Style.style.textAlign = "center";