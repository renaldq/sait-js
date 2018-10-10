// alert('Hello World!');

document.write('Hello world');


function tellFortune(numOfChildren, partnerName, geoLocation, jobTitle) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numOfChildren +" kids.");
}

tellFortune(2, 'Vanesa', 'Montreal', 'Graphic Designer');

function calculateDogAge (dogAge) {
    var x = dogAge * 7;
    console.log("your dog is " + x + " years old in dog years");
}

calculateDogAge (2);

function calculateSupply(age, amountPerDay) {
    var Xf = 80;
    var NN = ((80 - age) * 365) * amountPerDay;
    console.log("You will need " + NN + " to last you until the ripe oldage of " + Xf);
}

calculateSupply (29, 65);