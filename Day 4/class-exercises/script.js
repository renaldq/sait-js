// var divObject = document.getElementById("object");

// divObject.style.position = "absolute";
// divObject.style.left = "200px";
// divObject.style.top = "200px";

// function doThisLater() {
//     alert("Time's up")
// }

// var timerID = setTimeout(doThisLater, 3000);
// var timerID = setInterval(doThisLater, 3000);

// clearTimeout(timerID);
// clearInterval(timerID);

// function updateTime() {
//     document.getElementById("output")
//     .innerHTML = new Date();
// }

// setInterval(updateTime, 1000);


// var direction;

// var moveForward = true;

// function move() {
//     var img = document.getElementById('gif');
//     var currentLeft = parseInt(img.style.left);

//     if (moveForward && (currentLeft > (window.innerWidth-img.width))) {
//         moveForward = false;
//     }

//     if (!moveForward && (currentLeft <= 0)) {
//         walkForwards = true;
//     }

//     if (moveForward) {
//         img.style.left = (currentLeft + 2) + 'px';
//     } else {
//         img.style.left = (currentLeft - 2) + 'px';
//     }
// }

// setInterval(move, 50);

// function sayHi (event) {
//     alert('Hi!');
// };

var link = document.getElementById("saitLink");
link.addEventListener("click", function (event) {
    alert("Error");
});