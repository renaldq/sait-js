var submitButton = document.getElementById('submit');
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');

submitButton.addEventListener('click', function(event) {
    errorName.style.display = "none";
    errorAge.style.display = "none";

    var name = document.form1.txtName.value;
    var age = parseInt(document.form1.txtAge.value);

    if(!name) {
        event.preventDefault();
        errorName.style.display = "block";
    }
    if(!age) {
        event.preventDefault();
        errorAge.style.display = "block";
    }

    if (age < 18) {
        event.preventDefault();
        tooYoung.style.display = "block";
    }
});