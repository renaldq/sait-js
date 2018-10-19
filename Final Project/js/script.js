// Fri Oct 19
// Javascript code for travel agency final project
// By Renald Qereshniku


// Mobile menu
// var menu = document.getElementById('mobile-container')
// var open = document.getElementById('open-mobile')
// var close = document.getElementById('close-mobile')

// function openMenu() {
//     menu.className = 'mobile-container open';
// }

// function closeMenu() {
//     menu.className = 'mobile-container';
// }

// open.addEventListener('click', openMenu);
// close.addEventListener('click', closeMenu);


// date at footer
var date = new Date();
var datePar = document.getElementById('date');
datePar.innerHTML = date;


// array of travel agents
var agents = [
    { name: "Nicola Edmonds", phoneNum: '403-547-8724'},
    { name: 'Karolina Brooks', phoneNum: '403-547-2397'}
];