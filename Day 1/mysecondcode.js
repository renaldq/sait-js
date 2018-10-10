var temperature = -12;
var soRandom = false;

if (temperature < -20) {
    console.log('You should stay inside');
} else if (temperature < 0 && soRandom == true) {
    console.log('what is this');
} else if (temperature < 10) {
    console.log('You should put on a coat');
} else {
    console.log('Wear whatever you want');
}
